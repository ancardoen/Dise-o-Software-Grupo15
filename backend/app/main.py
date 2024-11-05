from flask import request, jsonify
from app import create_app
from .extensions import db
from .models import User

app = create_app()

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    nombre = data.get('nombre')
    correo = data.get('correo')
    contraseña = data.get('contraseña')

    new_user = User(nombre=nombre, correo=correo, contraseña=contraseña)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Usuario registrado exitosamente."}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    correo = data.get('correo')
    contraseña = data.get('contraseña')

    user = User.query.filter_by(correo=correo, contraseña=contraseña).first()

    if user:
        return jsonify({"message": f"Bienvenido, {user.nombre}!"}), 200
    else:
        return jsonify({"message": "Correo o contraseña incorrectos."}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
