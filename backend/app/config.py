#Base (inicial)

import os

class Config:
  
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///app.db') # Cambiar base de ejemplo sqlite:///app.db
    SQLALCHEMY_TRACK_MODIFICATIONS = False  

    SECRET_KEY = os.getenv('SECRET_KEY', 'tu_clave_secreta') 
  
    DEBUG = os.getenv('DEBUG', 'False') == 'True'  
