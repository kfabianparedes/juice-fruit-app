# Juice Fruit App 🍹

Sistema de autenticación web con Node.js, Express y TypeScript.

## 🏗️ Estructura

```
src/
├── config/          # Configuración
├── controllers/     # Controladores
├── services/        # Lógica de negocio
├── repositories/    # Acceso a datos
├── middlewares/     # Middlewares Express
├── routes/          # Rutas API
├── types/           # Tipos TypeScript
├── utils/           # Utilidades
├── errors/          # Errores personalizados
├── public/          # Frontend
│   ├── views/       # HTML
│   └── assets/      # CSS/JS
└── server.ts        # Servidor
```

## 🚀 Instalación

```bash
npm install
npm run dev
```

## 🔐 Credenciales de Prueba

```
admin@example.com / admin123
user@example.com / user123
```

## 📡 API

- `GET /` - Login
- `GET /welcome` - Bienvenida
- `POST /login` - Autenticación
- `GET /api/message` - Info del servidor

## 🛠️ Scripts

```bash
npm run dev    # Desarrollo
npm run build  # Compilar
npm start      # Producción
```

## 📄 Licencia

ISC
