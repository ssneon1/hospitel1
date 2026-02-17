import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Mail,
  Heart,
  Shield,
  Users,
  Award,
  ChevronRight,
  Stethoscope,
  Ambulance,
  Baby,
  Brain,
  Bone,
  Eye,
  Activity,
  Syringe,
  Microscope,
  Building2,
  BedDouble,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react';

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* Top Bar */}
      <div className="bg-teal-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>Emergency: +1 (555) 123-4567</span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <Clock size={14} />
              <span>Mon-Sat: 8:00 AM - 8:00 PM</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <Mail size={14} />
            <span>info@SNAhospital.com</span>
          </div>
        </div>
      </div>

      {/* Orange About Bar */}
      <div className="bg-[#ec6526] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-medium">
            🏥 SNA Hospital - A multi-specialty healthcare center providing quality medical services with compassion since 1999
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ec6526] to-[#d4541a] rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">SNA Hospital</h1>
              <p className="text-xs text-[#ec6526] font-medium">Shree Narayan Ashram Multi-Specelist Hospital</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-md"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-600 hover:text-teal-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              <span>25+ Years of Excellence in Healthcare</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Your Health is Our
              <span className="text-teal-600 block">Top Priority</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A multi-specialty hospital providing quality healthcare with compassion. 
              We combine advanced medical technology with personalized care to ensure 
              the best outcomes for our patients.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-lg"
              >
                <Phone size={18} />
                Book Appointment
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
              >
                Learn More
                <ChevronRight size={18} />
              </a>
            </div>
            {/* Quick Info */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Ambulance className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Emergency</p>
                  <p className="font-semibold text-gray-800">24/7 Available</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-800">Get Directions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                alt="SNA Hospital Building"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">50,000+</p>
                  <p className="text-sm text-gray-500">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-teal-100 rounded-3xl transform -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop"
              alt="Hospital Interior"
              className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-2xl shadow-xl text-center">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-teal-600 font-medium mb-4">
              <span className="w-12 h-0.5 bg-teal-600"></span>
              About Our Hospital
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Providing Quality Healthcare Since 1999
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with the vision to provide affordable and quality healthcare to everyone, 
              SNA Hospital has grown to become one of the most trusted healthcare institutions 
              in the region. Our commitment to excellence, compassion, and patient care sets us apart.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe that every patient deserves to be treated with dignity and respect. 
              Our team of experienced doctors, nurses, and staff work together to ensure that 
              you receive the best possible care in a comfortable and healing environment.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Heart, title: 'Compassionate Care' },
                { icon: Shield, title: 'Trust & Safety' },
                { icon: Award, title: 'Excellence' },
                { icon: Users, title: 'Patient-First' },
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="font-medium text-gray-700">{value.title}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-teal-600 font-medium hover:gap-4 transition-all"
            >
              Explore Our Services
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Founder Section
function FounderSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div className="absolute inset-0 border-4 border-white/20 rounded-3xl transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
              alt="Dr. Robert Wilson - Founder"
              className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>

          {/* Founder Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-teal-200 font-medium mb-4">
              <span className="w-12 h-0.5 bg-teal-200"></span>
              Meet Our Founder
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dr. Robert Wilson
            </h2>
            <p className="text-teal-100 text-lg mb-4">
              Founder & Chairman
            </p>
            <blockquote className="text-xl italic border-l-4 border-[#ec6526] pl-6 mb-6 text-teal-50">
              "Our goal is to ensure every patient is treated with dignity and care. 
              We founded SNA Hospital with a simple mission: to make quality 
              healthcare accessible to everyone, regardless of their background."
            </blockquote>
            <p className="text-teal-100 mb-8 leading-relaxed">
              With over 35 years of experience in the medical field, Dr. Wilson has 
              dedicated his life to improving healthcare standards. His vision and 
              leadership have transformed SNA into a center of excellence.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold">35+</p>
                <p className="text-sm text-teal-200">Years in Medicine</p>
              </div>
              <div className="w-px h-12 bg-teal-400"></div>
              <div className="text-center">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm text-teal-200">Awards Received</p>
              </div>
              <div className="w-px h-12 bg-teal-400"></div>
              <div className="text-center">
                <p className="text-3xl font-bold">50K+</p>
                <p className="text-sm text-teal-200">Lives Touched</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    { icon: Stethoscope, title: 'General Medicine', desc: 'Comprehensive primary care for all ages' },
    { icon: Ambulance, title: 'Emergency Care', desc: '24/7 emergency services with rapid response' },
    { icon: Heart, title: 'Cardiology', desc: 'Advanced heart care and cardiac surgery' },
    { icon: Bone, title: 'Orthopedics', desc: 'Bone, joint, and musculoskeletal care' },
    { icon: Baby, title: 'Maternity Care', desc: 'Complete prenatal and postnatal services' },
    { icon: Brain, title: 'Neurology', desc: 'Expert brain and nervous system treatment' },
    { icon: Eye, title: 'Ophthalmology', desc: 'Complete eye care and vision services' },
    { icon: Activity, title: 'ICU & Trauma', desc: 'Critical care and trauma management' },
    { icon: Syringe, title: 'Surgery', desc: 'Minimally invasive and general surgery' },
    { icon: Baby, title: 'Pediatrics', desc: 'Specialized care for infants and children' },
    { icon: Microscope, title: 'Diagnostics', desc: 'Advanced lab and imaging services' },
    { icon: Shield, title: 'Health Checkups', desc: 'Preventive health screening packages' },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-teal-600 font-medium mb-4">
            <span className="w-12 h-0.5 bg-teal-600"></span>
            Our Services
            <span className="w-12 h-0.5 bg-teal-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Medical Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs 
            under one roof with state-of-the-art facilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:from-teal-500 group-hover:to-teal-600 transition-colors">
                <service.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Doctors Section
function DoctorsSection() {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      qualification: 'MBBS, MD',
      specialization: 'Cardiologist',
      experience: '20 Years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Michael Chen',
      qualification: 'MBBS, MS',
      specialization: 'Orthopedic Surgeon',
      experience: '18 Years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Emily Davis',
      qualification: 'MBBS, DGO',
      specialization: 'Gynecologist',
      experience: '15 Years',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. James Wilson',
      qualification: 'MBBS, MD',
      specialization: 'Neurologist',
      experience: '22 Years',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Lisa Anderson',
      qualification: 'MBBS, MD',
      specialization: 'Pediatrician',
      experience: '12 Years',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. David Kim',
      qualification: 'MBBS, MS',
      specialization: 'General Surgeon',
      experience: '16 Years',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop'
    },
  ];

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-teal-600 font-medium mb-4">
            <span className="w-12 h-0.5 bg-teal-600"></span>
            Our Doctors
            <span className="w-12 h-0.5 bg-teal-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified and experienced doctors are dedicated to 
            providing you with the best medical care possible.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <a
                    href="#contact"
                    className="bg-white text-teal-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-teal-50"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                <p className="text-teal-600 font-medium text-sm mb-2">{doctor.qualification}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{doctor.specialization}</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    {doctor.experience}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Facilities Section
function FacilitiesSection() {
  const facilities = [
    {
      icon: Building2,
      title: 'Modern Operation Theaters',
      desc: 'State-of-the-art surgical suites with advanced equipment',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop'
    },
    {
      icon: Microscope,
      title: 'Advanced Diagnostics',
      desc: 'Latest MRI, CT scan, and laboratory facilities',
      image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&h=400&fit=crop'
    },
    {
      icon: BedDouble,
      title: 'Comfortable Wards',
      desc: 'Clean, spacious, and air-conditioned patient rooms',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop'
    },
    {
      icon: Activity,
      title: '24×7 Emergency',
      desc: 'Round-the-clock emergency and trauma care',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop'
    },
    {
      icon: Ambulance,
      title: 'Ambulance Service',
      desc: 'Fully equipped ambulances with trained paramedics',
      image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?w=600&h=400&fit=crop'
    },
    {
      icon: Heart,
      title: 'ICU & Critical Care',
      desc: 'Modern intensive care unit with life support systems',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop'
    },
  ];

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-teal-600 font-medium mb-4">
            <span className="w-12 h-0.5 bg-teal-600"></span>
            Our Facilities
            <span className="w-12 h-0.5 bg-teal-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We have invested in the best medical infrastructure to ensure accurate 
            diagnosis and effective treatment for all our patients.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <facility.icon className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop', alt: 'Hospital Building' },
    { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=600&fit=crop', alt: 'Patient Room' },
    { src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop', alt: 'Operation Theater' },
    { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=400&fit=crop', alt: 'Reception Area' },
    { src: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&h=400&fit=crop', alt: 'Diagnostic Lab' },
    { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=600&fit=crop', alt: 'Medical Staff' },
    { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop', alt: 'Hospital Corridor' },
    { src: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=400&h=400&fit=crop', alt: 'Pharmacy' },
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-teal-600 font-medium mb-4">
            <span className="w-12 h-0.5 bg-teal-600"></span>
            Gallery
            <span className="w-12 h-0.5 bg-teal-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Take a Virtual Tour
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our modern facilities, comfortable patient areas, and 
            state-of-the-art medical equipment through our photo gallery.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 1 || index === 5 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                  index === 1 || index === 5 ? 'h-full min-h-[400px]' : 'h-48'
                }`}
              />
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100">
                  <ChevronRight className="w-6 h-6 text-teal-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const reasons = [
    { icon: Users, title: 'Experienced Doctors', desc: 'Team of highly qualified specialists with decades of experience' },
    { icon: Heart, title: 'Affordable Treatment', desc: 'Quality healthcare at reasonable prices with multiple payment options' },
    { icon: Microscope, title: 'Modern Equipment', desc: 'Latest diagnostic and treatment technology for accurate care' },
    { icon: Shield, title: 'Patient-First Approach', desc: 'Your comfort and well-being are our top priorities' },
    { icon: Award, title: 'Quality Accredited', desc: 'NABH accredited hospital maintaining highest standards' },
    { icon: Building2, title: 'Clean Environment', desc: 'Hygienic and sanitized facilities for patient safety' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-teal-600 font-medium mb-4">
              <span className="w-12 h-0.5 bg-teal-600"></span>
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Patients Trust SNA Hospital
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              For over 25 years, we have been the preferred healthcare destination for 
              thousands of families. Here's what makes us different from others.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{reason.title}</h3>
                    <p className="text-sm text-gray-600">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <p className="text-4xl font-bold text-teal-600 mb-2">25+</p>
              <p className="text-gray-600">Years of Service</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <p className="text-4xl font-bold text-teal-600 mb-2">50+</p>
              <p className="text-gray-600">Expert Doctors</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <p className="text-4xl font-bold text-teal-600 mb-2">200+</p>
              <p className="text-gray-600">Hospital Beds</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <p className="text-4xl font-bold text-teal-600 mb-2">50K+</p>
              <p className="text-gray-600">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    department: "",
    preferred_date: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const { createAppointment } = await import("./api");
      await createAppointment({
        full_name: form.full_name,
        phone: form.phone,
        email: form.email || undefined,
        department: form.department,
        preferred_date: form.preferred_date || undefined,
        message: form.message || undefined,
      });
      setStatus({ type: "success", message: "Appointment request sent successfully." });
      setForm({
        full_name: "",
        phone: "",
        email: "",
        department: "",
        preferred_date: "",
        message: "",
      });
    } catch (error: any) {
      const message = (error?.response?.data as any)?.error ?? "Something went wrong. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-teal-600 font-medium mb-4">
            <span className="w-12 h-0.5 bg-teal-600"></span>
            Contact Us
            <span className="w-12 h-0.5 bg-teal-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need to book an appointment? Our team is here to help you 
            24/7. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 rounded-2xl text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-teal-100">
                      123 Healthcare Avenue, Medical District<br />
                      New York, NY 10001, United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <p className="text-teal-100">
                      Emergency: +1 (555) 123-4567<br />
                      Reception: +1 (555) 123-4568
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-teal-100">
                      info@SNAhospital.com<br />
                      appointments@SNAhospital.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">OPD Timings</h4>
                    <p className="text-teal-100">
                      Monday - Saturday: 8:00 AM - 8:00 PM<br />
                      Sunday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Emergency Call
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Book an Appointment</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {status && (
                <p
                  className={
                    status.type === "success"
                      ? "text-green-600 text-sm"
                      : "text-red-600 text-sm"
                  }
                >
                  {status.message}
                </p>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    required
                  >
                    <option value="">Select Department</option>
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Orthopedics</option>
                    <option>Neurology</option>
                    <option>Pediatrics</option>
                    <option>Gynecology</option>
                    <option>Surgery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    name="preferred_date"
                    value={form.preferred_date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea
                  rows={3}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your symptoms or concerns..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Appointment Request"}
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1653901456789!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SNA Hospital Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ec6526] to-[#d4541a] rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SNA</h3>
                <p className="text-xs text-[#ec6526]">Hospital</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Providing quality healthcare with compassion since 1999. Your trusted 
              partner in health and wellness.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ec6526] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ec6526] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ec6526] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#ec6526] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Doctors', 'Facilities', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-[#ec6526] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['General Medicine', 'Emergency Care', 'Cardiology', 'Orthopedics', 'Maternity Care', 'Neurology', 'Diagnostics'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#ec6526] transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ec6526] flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Healthcare Avenue, Medical District, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#ec6526]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#ec6526]" />
                <span className="text-sm">info@SNAhospital.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#ec6526]" />
                <span className="text-sm">Mon-Sat: 8AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 SNA Hospital. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#ec6526] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-[#ec6526] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#ec6526] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#d4541a] transition-colors z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

// Main App Component
export function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FounderSection />
        <ServicesSection />
        <DoctorsSection />
        <FacilitiesSection />
        <GallerySection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
