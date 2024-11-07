from flask import Flask
from .extensions import db
from .config import Config
from .main import main  

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)

    app.register_blueprint(main)

    return app
