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
APIREST_COMPUSTORE
├── final_project/
│   ├── bruno.json                      # Configuración de Bruno
│   ├── create_product.bru              # Colección de pruebas de Bruno para cada endpoint CRUD
│   ├── get_all_products.bru            
│   ├── get_product.bru                     
│   ├── update_product.bru          
│   └── delete_product.bru              
├── src/
│   ├── config/                         # Configuración de la aplicación
│   │   ├── mongoose.ts                 # Conexión a la base de datos MongoDB
│   │   └── server.ts                   # Configuración del servidor
│   ├── controller/                     # Lógica de negocio
│   │   └── product.controller.ts       # Controladores para productos (CRUD)
│   ├── model/                          # Modelos de datos
│   │   └── products.model.ts           # Esquema e interfaz del producto con Mongoose
│   ├── routes/                         # Definición de rutas
│   │   ── products.routes.ts           # Endpoints de la API para productos
│   ├── types/                          # Definiciones de TypeScript
│   │   └── global.types.ts             # Interfaces y tipos globales
│   ├── utils/                          # Utilidades
│   │   └── Error.ts                    # Clases personalizadas para manejo de errores
│   └── main.ts                         # Punto de entrada de la aplicación
├── .gitignore                          # ignorar archivos innecesarios
├── .env                                # archivo .env, donde se guarda toda la información sensible
└── .env_sample                         # Ejemplo de archivo .env
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
