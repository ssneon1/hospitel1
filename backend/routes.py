from flask import Blueprint, jsonify, request
from database import db
from models import Service, Doctor, Facility, GalleryImage, Appointment


api_bp = Blueprint("api", __name__)


def seed_if_empty():
    if not Service.query.first():
        services = [
            Service(
                name="General Medicine",
                icon="Stethoscope",
                description="Comprehensive primary care for all ages",
            ),
            Service(
                name="Emergency Care",
                icon="Ambulance",
                description="24/7 emergency services with rapid response",
            ),
        ]
        db.session.add_all(services)

    if not Doctor.query.first():
        doctors = [
            Doctor(
                name="Dr. Sarah Johnson",
                qualification="MBBS, MD",
                specialization="Cardiologist",
                experience_years=20,
                photo_url="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
            ),
        ]
        db.session.add_all(doctors)

    if not Facility.query.first():
        facilities = [
            Facility(
                title="Modern Operation Theaters",
                description="State-of-the-art surgical suites with advanced equipment",
                icon="Building2",
                image_url="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop",
            ),
        ]
        db.session.add_all(facilities)

    if not GalleryImage.query.first():
        gallery = [
            GalleryImage(
                title="Hospital Building",
                image_url="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
                category="exterior",
            ),
        ]
        db.session.add_all(gallery)

    db.session.commit()


@api_bp.before_app_request
def ensure_seeded():
    seed_if_empty()


@api_bp.get("/hospital")
def get_hospital():
    return jsonify(
        {
            "name": "SMPPS Hospital",
            "tagline": "Trusted Care, Advanced Treatment",
            "established": 1999,
            "description": "A multi-specialty hospital providing quality healthcare with compassion.",
        }
    )


@api_bp.get("/services")
def get_services():
    services = Service.query.all()
    return jsonify(
        [
            {
                "id": s.id,
                "name": s.name,
                "icon": s.icon,
                "description": s.description,
            }
            for s in services
        ]
    )


@api_bp.get("/doctors")
def get_doctors():
    doctors = Doctor.query.all()
    return jsonify(
        [
            {
                "id": d.id,
                "name": d.name,
                "qualification": d.qualification,
                "specialization": d.specialization,
                "experience_years": d.experience_years,
                "photo_url": d.photo_url,
            }
            for d in doctors
        ]
    )


@api_bp.get("/facilities")
def get_facilities():
    facilities = Facility.query.all()
    return jsonify(
        [
            {
                "id": f.id,
                "title": f.title,
                "description": f.description,
                "icon": f.icon,
                "image_url": f.image_url,
            }
            for f in facilities
        ]
    )


@api_bp.get("/gallery")
def get_gallery():
    images = GalleryImage.query.all()
    return jsonify(
        [
            {
                "id": g.id,
                "title": g.title,
                "image_url": g.image_url,
                "category": g.category,
            }
            for g in images
        ]
    )


@api_bp.post("/appointments")
def create_appointment():
    data = request.get_json() or {}
    required = ["full_name", "phone", "department"]
    missing = [f for f in required if not data.get(f)]
    if missing:
        return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400

    appointment = Appointment(
        full_name=data["full_name"],
        phone=data["phone"],
        email=data.get("email"),
        department=data["department"],
        preferred_date=data.get("preferred_date"),
        message=data.get("message"),
    )
    db.session.add(appointment)
    db.session.commit()

    return jsonify({"id": appointment.id, "message": "Appointment request received"}), 201
