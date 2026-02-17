import os
import subprocess
import sys
from flask import Flask
from flask_cors import CORS
from config import Config
from database import db
from routes import api_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    app.register_blueprint(api_bp, url_prefix="/api")

    with app.app_context():
        import models  # noqa

        db.create_all()

    return app


app = create_app()



def start_frontend():
    # Only start if not already running (protect against Flask reloader)
    if os.environ.get("WERKZEUG_RUN_MAIN") == "true":
        return

    print("Attempting to start frontend dev server...")
    try:
        # Go up one level from 'backend' to the root where package.json is
        root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
        
        # Check if npm is available
        npm_cmd = "npm.cmd" if sys.platform == "win32" else "npm"
        
        subprocess.Popen(
            [npm_cmd, "run", "dev"],
            cwd=root_dir,
            shell=True
        )
        print("Frontend dev server start command issued.")
    except Exception as e:
        print(f"Warning: Could not start frontend. Ensure Node.js is installed. Error: {e}")


if __name__ == "__main__":
    start_frontend()
    app.run(debug=True)
