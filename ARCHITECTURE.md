# Juice Fruit App - Estructura Full-Stack Monolítica

Aplicación web full-stack monolítica con Node.js, Express y arquitectura limpia siguiendo las mejores prácticas corporativas.

## 🏗️ Estructura del Proyecto

```
juice-fruit-app/
├── src/
│   ├── config/              # Configuración de la aplicación
│   │   └── app.config.ts
│   ├── controllers/         # Controladores (Capa de presentación)
│   │   └── form.controller.ts
│   ├── services/            # Servicios (Lógica de negocio)
│   │   └── form.service.ts
│   ├── repositories/        # Repositorios (Acceso a datos)
│   │   └── form.repository.ts
│   ├── middlewares/         # Middlewares de Express
│   │   ├── errorHandler.ts
│   │   ├── requestLogger.ts
│   │   └── requestId.ts
│   ├── routes/              # Definición de rutas API
│   │   ├── api.routes.ts
│   │   └── form.routes.ts
│   ├── types/               # Tipos TypeScript
│   │   └── index.ts
│   ├── utils/               # Utilidades y validadores
│   │   ├── logger.ts
│   │   └── validators.ts
│   ├── errors/              # Errores personalizados
│   │   └── app.error.ts
│   ├── public/              # Frontend (Servido por Express)
│   │   ├── views/           # Vistas HTML
│   │   │   ├── index.html   (Página de login)
│   │   │   └── welcome.html (Página de bienvenida)
│   │   └── assets/          # Recursos estáticos
│   │       ├── css/
│   │       │   └── style.css
│   │       ├── js/
│   │       │   ├── components/
│   │       │   │   └── form.handler.js
│   │       │   ├── services/
│   │       │   │   └── api.service.js
│   │       │   ├── utils/
│   │       │   │   └── ui.manager.js
│   │       │   ├── config.js
│   │       │   ├── main.js
│   │       │   └── welcome.js
│   │       └── images/      (Para futuros recursos)
│   └── server.ts            # Punto de entrada del servidor
├── package.json
├── tsconfig.json
└── README.md
```

## 📂 Explicación de la Estructura

### Backend (src/)

#### **Capa de Presentación**
- `controllers/` - Maneja las peticiones HTTP y coordina la respuesta
- `routes/` - Define los endpoints y mapea a controladores

#### **Capa de Lógica de Negocio**
- `services/` - Contiene la lógica de negocio de la aplicación
- `utils/` - Funciones auxiliares, validadores, logger

#### **Capa de Datos**
- `repositories/` - Abstracción del acceso a datos (Base de datos, APIs externas)

#### **Infraestructura**
- `middlewares/` - Middlewares de Express (logging, errores, etc.)
- `config/` - Configuración centralizada
- `types/` - Tipos TypeScript compartidos
- `errors/` - Clases de error personalizadas

### Frontend (src/public/)

#### **views/**
Contiene las páginas HTML servidas por Express:
- `index.html` - Página de login
- `welcome.html` - Página de bienvenida después del login

#### **assets/**
Recursos estáticos servidos desde `/assets`:

**css/**
- Hojas de estilo globales y por componente

**js/**
- `components/` - Componentes JavaScript reutilizables
- `services/` - Servicios de comunicación con el backend
- `utils/` - Utilidades del frontend
- `config.js` - Configuración del cliente
- `main.js` - Punto de entrada de la aplicación
- `welcome.js` - Lógica específica de la página de bienvenida

**images/**
- Imágenes, iconos, logos (para uso futuro)

## 🚀 Características de la Arquitectura

### ✅ Separación de Responsabilidades
Cada capa tiene una responsabilidad única y bien definida siguiendo SOLID.

### ✅ Monolito Modular
Aunque es una sola aplicación, está estructurada en módulos independientes que podrían convertirse en microservicios si es necesario.

### ✅ Configuración Centralizada
Toda la configuración en un solo lugar (`config/`).

### ✅ Manejo de Errores Robusto
Sistema centralizado de manejo de errores con clases personalizadas.

### ✅ Logging Estructurado
Logger profesional con contexto (requestId, timestamps, etc.).

### ✅ Validación en Capas
Validación tanto en frontend como backend.

### ✅ Tipado Estricto
TypeScript con configuración estricta en backend.

### ✅ Seguridad
- Validación de datos
- Escape de HTML para prevenir XSS
- Request tracking
- Error handling sin exponer detalles internos

## 🌐 Rutas de la Aplicación

### Vistas (HTML)
- `GET /` - Página de login
- `GET /welcome` - Página de bienvenida (después de login)

### API
- `GET /api/message` - Mensaje de bienvenida
- `POST /login` - Autenticación de usuario

### Recursos Estáticos
- `/assets/css/*` - Hojas de estilo
- `/assets/js/*` - Scripts JavaScript
- `/assets/images/*` - Imágenes

## 📝 Ventajas de esta Estructura

### 1. **Escalabilidad**
Fácil agregar nuevas vistas, rutas o funcionalidades sin afectar el código existente.

### 2. **Mantenibilidad**
Código organizado y fácil de encontrar. Cada archivo tiene una responsabilidad clara.

### 3. **Testeable**
Capas separadas permiten hacer testing unitario e integración fácilmente.

### 4. **Reutilizable**
Componentes y servicios pueden reutilizarse en múltiples vistas.

### 5. **SEO Friendly**
Vistas HTML servidas desde el servidor, no SPA.

### 6. **Performance**
Assets organizados y servidos eficientemente por Express.

### 7. **Desarrollo en Equipo**
Estructura clara facilita la colaboración entre desarrolladores.

## 🛠️ Instalación y Uso

```bash
# Instalar dependencias
npm install

# Desarrollo con hot reload
npm run dev

# Compilar TypeScript
npm run build

# Producción
npm start
```

## 🔐 Credenciales de Prueba

```
admin@example.com / admin123
user@example.com / user123
```

## 🎯 Comparación: SPA vs Monolito

| Aspecto | SPA (React/Vue) | Monolito Full-Stack |
|---------|----------------|---------------------|
| **SEO** | Complejo | Excelente |
| **Initial Load** | Lento | Rápido |
| **Complejidad** | Alta | Media |
| **Bundle Size** | Grande | Pequeño |
| **Server-Side** | ❌ | ✅ |
| **Ideal para** | Apps complejas | Sitios web, dashboards |

## 📊 Flujo de una Petición

```
1. Browser: GET /welcome
   ↓
2. Express: Busca en rutas
   ↓
3. Server: res.sendFile('views/welcome.html')
   ↓
4. Browser: Renderiza HTML
   ↓
5. Browser: Solicita /assets/css/style.css
   ↓
6. Express: Middleware express.static()
   ↓
7. Browser: Aplica estilos
   ↓
8. Browser: Ejecuta /assets/js/welcome.js
```

## 🏆 Mejores Prácticas Aplicadas

1. ✅ Estructura de carpetas clara y estándar
2. ✅ Separación frontend/backend
3. ✅ Assets organizados por tipo
4. ✅ Vistas HTML semánticas
5. ✅ JavaScript modular (no todo en un archivo)
6. ✅ CSS con variables y BEM-like naming
7. ✅ Rutas RESTful en backend
8. ✅ Manejo de errores global
9. ✅ Logging estructurado
10. ✅ Seguridad (validación, XSS prevention)

---

**Tecnologías:** Node.js 20+ | Express 5 | TypeScript 5 | HTML5 | CSS3 | Vanilla JavaScript

**Arquitectura:** Monolito Modular Full-Stack

**Patrón:** MVC + Repository Pattern + Service Layer
