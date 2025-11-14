# Juice Fruit App 🍹

Aplicación web moderna con formulario de contacto, construida con Express.js y TypeScript siguiendo las mejores prácticas de desarrollo.

## 🏗️ Estructura del Proyecto

```
juice-fruit-app/
├── src/
│   ├── config/              # Configuración de la aplicación
│   │   └── app.config.ts
│   ├── controllers/         # Controladores (lógica de negocio)
│   │   └── form.controller.ts
│   ├── middlewares/         # Middlewares de Express
│   │   ├── errorHandler.ts
│   │   └── requestLogger.ts
│   ├── routes/              # Definición de rutas
│   │   ├── api.routes.ts
│   │   └── form.routes.ts
│   ├── types/               # Tipos TypeScript
│   │   └── index.ts
│   ├── utils/               # Utilidades y validadores
│   │   └── validators.ts
│   ├── public/              # Archivos estáticos (Frontend)
│   │   ├── js/
│   │   │   ├── components/
│   │   │   │   └── form.handler.js
│   │   │   ├── services/
│   │   │   │   └── api.service.js
│   │   │   ├── utils/
│   │   │   │   └── ui.manager.js
│   │   │   └── config.js
│   │   ├── index.html
│   │   ├── main.js
│   │   └── style.css
│   └── server.ts            # Punto de entrada del servidor
├── package.json
├── tsconfig.json
└── README.md
```

## ✨ Características

- **Arquitectura modular**: Separación clara entre controladores, rutas y servicios
- **TypeScript**: Tipado estático para mayor seguridad
- **Validación robusta**: Validación de datos en backend y frontend
- **Manejo de errores**: Sistema centralizado de manejo de errores
- **UI responsiva**: Diseño adaptable con feedback visual
- **Logging**: Registro de peticiones HTTP
- **Buenas prácticas**: Código limpio, documentado y mantenible

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo (con hot reload)
npm run dev

# Compilar TypeScript
npm run build

# Producción
npm start
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor en modo desarrollo con recarga automática
- `npm run build` - Compila el código TypeScript a JavaScript
- `npm start` - Inicia el servidor en modo producción

## 🔧 Configuración

Las variables de configuración se encuentran en `src/config/app.config.ts`:

```typescript
{
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '*'
}
```

## 📡 API Endpoints

### GET `/api/message`
Obtiene un mensaje de bienvenida.

**Respuesta:**
```json
{
  "message": "Hello, Juice Fruit! 🍹",
  "timestamp": "2025-11-13T10:00:00.000Z"
}
```

### POST `/submit`
Envía datos del formulario.

**Body:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com"
}
```

**Respuesta exitosa:**
```json
{
  "status": "success",
  "message": "¡Completado exitosamente! 🎉",
  "data": {
    "name": "Juan Pérez",
    "email": "juan@ejemplo.com"
  }
}
```

**Respuesta de error:**
```json
{
  "status": "error",
  "message": "El correo electrónico es inválido"
}
```

## 🎨 Frontend

El frontend está organizado en módulos:

- **config.js**: Configuración y constantes
- **api.service.js**: Comunicación con el backend
- **ui.manager.js**: Manejo de la interfaz de usuario
- **form.handler.js**: Lógica del formulario
- **main.js**: Punto de entrada

## 🛡️ Seguridad

- Validación de datos en cliente y servidor
- Escape de HTML para prevenir XSS
- Tipado estático con TypeScript
- Manejo centralizado de errores

## 🧪 Buenas Prácticas Implementadas

1. **Separación de responsabilidades**: Cada módulo tiene una responsabilidad única
2. **DRY (Don't Repeat Yourself)**: Código reutilizable
3. **Tipado fuerte**: Uso de TypeScript e interfaces
4. **Manejo de errores**: Try-catch y middleware de errores
5. **Código documentado**: Comentarios JSDoc
6. **Convenciones de nombres**: CamelCase, PascalCase según contexto
7. **Async/Await**: Código asíncrono legible
8. **Validación**: Validación robusta en ambos lados
9. **Responsive design**: CSS moderno con variables
10. **Accesibilidad**: Atributos ARIA y semántica HTML

## 📦 Dependencias

### Producción
- `express` - Framework web para Node.js

### Desarrollo
- `typescript` - Superset de JavaScript con tipado estático
- `tsx` - Ejecutor de TypeScript
- `@types/express` - Tipos para Express
- `@types/node` - Tipos para Node.js

## 📄 Licencia

ISC

## 👤 Autor

Kevin Fabian
