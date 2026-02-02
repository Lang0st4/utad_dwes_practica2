Gonzalo Márquez | Desarrollo Web Entorno Servidor | DAWE2
Actividad 1: Comenzando un Sistema Meteorológico

¡Entendido! Te lo hago en un solo archivo Markdown completo, incluyendo todos los endpoints y explicando el flujo de usuarios y datos ambientales.

# API de Gestión de Usuarios y Datos Ambientales

Esta API permite **gestionar usuarios** (registro, login, actualización y eliminación) con **autenticación JWT** y también provee endpoints para datos de estaciones meteorológicas o ambientales: `advanced`, `airQuality`, `humidity`, `info`, `pictures`, `precipitation`, `probes` y `wind`.

---

## Tecnologías

- Node.js + Express
- MongoDB + Mongoose
- bcryptjs (hash de contraseñas)
- JSON Web Tokens (JWT)
- express-validator (validación de datos)
- dotenv (variables de entorno)

---

## Estructura de la API

### Usuarios



/api/users
├── POST / → Registrar usuario
├── POST /login → Login de usuario
├── GET / → Listar todos los usuarios (protegido)
├── PUT /:username → Actualizar usuario (protegido)
├── DELETE /:username → Eliminar usuario (protegido)


> Las rutas protegidas requieren el header `Authorization: Bearer <token>`.

### Datos Ambientales



/api/advanced
/api/airQuality
/api/humidity
/api/info
/api/pictures
/api/precipitation
/api/probes
/api/wind


- Cada endpoint devuelve datos específicos de estaciones
- Pueden ser **protegidos con JWT** según configuración

---

## Flujo de autenticación

1. **Registro de usuario** (`POST /api/users`)
   - Envía `username`, `email` y `password`
   - La contraseña se guarda **hasheada**
   - Devuelve usuario + **token JWT**

2. **Login** (`POST /api/users/login`)
   - Envía `email` y `password`
   - Compara password con hash en DB
   - Devuelve usuario + **token JWT**

3. **Rutas protegidas**
   - `Authorization: Bearer <token>`
   - Middleware `authMiddleware` valida token y agrega usuario a `req.user`
   - Ejemplo: `GET /api/users` devuelve todos los usuarios solo si el token es válido

---

## Ejemplo de Requests

### Registro

**POST /api/users**
```json
{
  "username": "usuario1",
  "email": "usuario1@mail.com",
  "password": "contraseñaSegura123"
}


Respuesta

{
  "ERROR": false,
  "MESSAGE": "User signed up successfully",
  "CONTENT": {
    "token": "<JWT>",
    "user": {
      "username": "usuario1",
      "email": "usuario1@mail.com",
      "role": "user"
    }
  }
}

Login

POST /api/users/login

{
  "email": "usuario1@mail.com",
  "password": "contraseñaSegura123"
}


Respuesta

{
  "ERROR": false,
  "MESSAGE": "Authentication success",
  "CONTENT": {
    "token": "<JWT>",
    "user": {
      "username": "usuario1",
      "email": "usuario1@mail.com",
      "role": "user"
    }
  }
}

Listar usuarios (protegido)

GET /api/users
Header

Authorization: Bearer <JWT>


Respuesta

{
  "ERROR": false,
  "MESSAGE": "Users retrieved successfully",
  "CONTENT": [
    { "username": "usuario1", "email": "usuario1@mail.com", "role": "user" },
    ...
  ]
}

Actualizar usuario (protegido)

PUT /api/users/:username

{
  "description": "Nueva descripción",
  "role": "admin"
}


Respuesta

{
  "ERROR": false,
  "MESSAGE": "Users updated successfully",
  "CONTENT": { ...usuario actualizado... }
}

Eliminar usuario (protegido)

DELETE /api/users/:username

Respuesta

{
  "ERROR": false,
  "MESSAGE": "User deleted successfully"
}

Endpoints de Datos Ambientales

GET /api/advanced → Datos avanzados de estación

GET /api/airQuality → Calidad del aire

GET /api/humidity → Humedad

GET /api/info → Información general de estaciones

GET /api/pictures → Fotografías o imágenes asociadas

GET /api/precipitation → Precipitaciones

GET /api/probes → Información de sondas o sensores

GET /api/wind → Velocidad y dirección del viento

Todos los endpoints pueden ser protegidos mediante JWT según configuración de authMiddleware.

Variables de entorno (.env)
PORT=3000
MONGODB_URI=<tu_conexion_mongodb>
JWT_SECRET=<clave_secreta_para_jwt>

Ejecutar la API
# Instalar dependencias
npm install

# Ejecutar servidor
node app.js


La API estará disponible en: http://localhost:3000/api