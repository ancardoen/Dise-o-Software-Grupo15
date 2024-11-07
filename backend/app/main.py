from flask import Blueprint, request, jsonify
from .extensions import db
from .models import User
from flask_cors import CORS

# Blueprint
main = Blueprint('main', __name__)

# Configura CORS 
CORS(main, resources={r"/*": {"origins": "http://localhost:3000"}})

@main.route('/signup', methods=['POST'])
def signup():
    data = request.json
    nombre = data.get('nombre')
    correo = data.get('correo')
    contrasena = data.get('contrasena')

    new_user = User(nombre=nombre, correo=correo, contrasena=contrasena)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Usuario registrado exitosamente."}), 201

@main.route('/login', methods=['POST'])
def login():
    data = request.json
    correo = data.get('correo')
    contrasena = data.get('contrasena')

    user = User.query.filter_by(correo=correo, contrasena=contrasena).first()

    if user:
        return jsonify({"message": f"Bienvenido, {user.nombre}!"}), 200
    else:
        return jsonify({"message": "Correo o contraseña incorrectos."}), 401
