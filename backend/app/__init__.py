from flask import Flask
from .extensions import db  # Importa la instancia de db
from .config import Config  # Importa la configuración

def create_app():
    app = Flask(__name__)
    
    #  base de datos
    app.config.from_object(Config)
    db.init_app(app) 

    with app.app_context():
        from . import models 
        db.create_all() 
    return app
