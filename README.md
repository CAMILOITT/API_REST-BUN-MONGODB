# API REST con Bun y MongoDB

Una API REST simple y eficiente construida con [Bun](https://bun.sh) y MongoDB, implementando operaciones CRUD para productos.

## 🚀 Características

- Ejecución rápida con el runtime de Bun
- Integración con MongoDB usando Mongoose
- Operaciones CRUD para productos
- Soporte para TypeScript
- Arquitectura simple y limpia

## 📋 Requisitos Previos

- [Bun](https://bun.sh) v1.2.19 o superior
- MongoDB instalado y en ejecución
- Node.js 18 o superior (para el build)

## 🛠️ Estructura del Proyecto

``` text
src/
├── config/
│   └── mongoose.ts    # Configuración de conexión MongoDB
├── controller/
│   └── product.controller.ts    # Manejadores de rutas de productos
└── model/
    └── products.model.ts    # Esquema de base de datos para productos
```

## 🔧 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/CAMILOITT/API_REST-BUN-MONGODB.git
cd API_REST-BUN-MONGODB
```

2. Instalar dependencias:

```bash
bun install
```

## 🚀 Uso

### Desarrollo

Ejecutar el proyecto en modo desarrollo:

```bash
bun run main.ts
```

### Compilación

Compilar el proyecto para producción:

```bash
bun run build
```

### Pruebas

Ejecutar pruebas:

```bash
bun test
```

## 🔧 Variables de Entorno

Asegúrate de configurar tus variables de entorno antes de ejecutar la aplicación:

- `MONGODB_URI`: Tu cadena de conexión de MongoDB
- `PORT`: Número de puerto para el servidor (opcional)

## 🛠️ Tecnologías

- [Bun](https://bun.sh) - Runtime todo en uno de JavaScript rápido
- [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL
- [Mongoose](https://mongoosejs.com/) - Modelado de objetos MongoDB
- [TypeScript](https://www.typescriptlang.org/) - JavaScript con sintaxis para tipos

## 👥 Contribuir

¡Las contribuciones son bienvenidas! No dudes en enviar un Pull Request.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

Creado con ❤️ usando Bun v1.2.19
