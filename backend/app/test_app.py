import pytest
from app import create_app, db
from app.models import User

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:' 
    
    with app.app_context():
        db.create_all()  
        yield app.test_client()  
        db.session.remove()
        db.drop_all()  
        
def test_signup(client):
   
    user_data_1 = {
        'nombre': 'Carlos',
        'correo': 'carlos@example.com',
        'contrasena': 'password123'
    }

    user_data_2 = {
        'nombre': 'Ana',
        'correo': 'ana@example.com',
        'contrasena': 'password456'
    }

   
    response_1 = client.post('/signup', json=user_data_1)
    assert response_1.status_code == 201
    assert response_1.json['message'] == "Usuario registrado exitosamente."

  
    response_2 = client.post('/signup', json=user_data_2)
    assert response_2.status_code == 201
    assert response_2.json['message'] == "Usuario registrado exitosamente."

def test_login(client):
    
    user_1 = User(nombre='Carlos', correo='carlos@example.com', contrasena='password123')
    user_2 = User(nombre='Ana', correo='ana@example.com', contrasena='password456')
    db.session.add(user_1)
    db.session.add(user_2)
    db.session.commit()

    response_1 = client.post('/login', json={'correo': 'carlos@example.com', 'contrasena': 'password123'})
    assert response_1.status_code == 200
    assert response_1.json['message'] == "Bienvenido, Carlos!"

  
    response_2 = client.post('/login', json={'correo': 'ana@example.com', 'contrasena': 'password456'})
    assert response_2.status_code == 200
    assert response_2.json['message'] == "Bienvenido, Ana!"


    response_invalid = client.post('/login', json={'correo': 'carlos@example.com', 'contrasena': 'wrongpassword'})
    assert response_invalid.status_code == 401
    assert response_invalid.json['message'] == "Correo o contraseña incorrectos."
