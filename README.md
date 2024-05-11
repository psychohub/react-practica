# Práctica de fundamentos de React

Este proyecto es una aplicación frontend desarrollada con React para gestionar el API de anuncios Nodepop. Es una SPA (Single Page Application) que proporciona una interfaz gráfica para interactuar con el backend de Nodepop, permitiendo la creación, visualización y eliminación de anuncios.

## Backend

El backend utilizado es el proyecto Nodepop API, disponible en:

- [nodepop-api](https://github.com/davidjj76/nodepop-api)

Una vez iniciado, el backend corre en el puerto 3001 y ofrece un swagger accesible en `/swagger` para probar los endpoints.

### Endpoints Disponibles

- `/api/auth/signup`: Registro de usuarios.
- `/api/auth/login`: Autenticación y obtención de token.
- `/api/v1/adverts`: Listado y creación de anuncios con posibilidad de aplicar filtros.
- `/api/v1/adverts/:id`: Detalles y eliminación de un anuncio específico.
- `/api/v1/adverts/tags`: Listado de tags disponibles para los anuncios.

Todos los endpoints bajo `/adverts` requieren autenticación.

## Frontend

### Tecnologías

- React
- react-router para el enrutamiento
- MDBReact para algunos componentes UI

### Estructura de Rutas

- **Públicas**:
  - `/login`: LoginPage para autenticación.
- **Protegidas**:
  - `/`: Redirección a `/adverts`.
  - `/adverts`: Listado de anuncios.
  - `/adverts/:id`: Detalle de un anuncio específico.
  - `/adverts/new`: Formulario para la creación de nuevos anuncios.
  - `/*`: NotFoundPage para rutas no definidas.

### Componentes Principales

- `LoginPage`: Ingreso de usuario.
- `AdvertsPage`: Listado de anuncios con filtros.
- `AdvertPage`: Detalles de un anuncio y opción de eliminación con confirmación.
- `NewAdvertPage`: Creación de un nuevo anuncio.
- `NotFoundPage`: Página de error 404.

### Instalación y Ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/psychohub/react-practica
   cd react-practica
Instalar dependencias:
bash
Copy code
npm install
Ejecutar la aplicación:
bash
Copy code
npm start
