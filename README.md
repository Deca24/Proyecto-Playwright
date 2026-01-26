# ?? Proyecto Playwright - Automatización de Búsqueda de Empleos

Proyecto de automatización de pruebas para buscar y listar vacantes de empleo en portales de trabajo usando Playwright.

## ? Características

- ?? **Búsqueda personalizada**: Busca empleos según el rol y ubicación que especifiques
- ?? **Listado completo**: Muestra todas las vacantes encontradas con detalles
- ?? **Multi-navegador**: Pruebas en Chrome, Firefox y Safari
- ?? **Información detallada**: Título, empresa, ubicación, salario y link de cada vacante
- ?? **Configurable**: Usa variables de entorno para personalizar la búsqueda

## ?? Requisitos

- Node.js (versión 14 o superior)
- npm

## ?? Instalación

1. Clona o descarga el proyecto
2. Instala las dependencias:

```bash
npm install
```

3. Copia el archivo de ejemplo y configúralo:

```bash
copy .env.example .env
```

## ?? Configuración

Edita el archivo `.env` con tus parámetros de búsqueda:

```env
TARGET_ROLE=QA Automation
LOCATION=Colombia
```

## ?? Uso

### Ejecutar búsqueda de empleos

```bash
npm test
```

### Otros comandos disponibles

```bash
npm run test:headed    # Ver tests con navegador visible
npm run test:ui        # Interfaz interactiva
npm run test:report    # Ver reporte HTML
```

## ?? Información Extraída

Para cada vacante encontrada:
- ? Título del puesto
- ? Empresa
- ? Ubicación
- ? Salario (si está disponible)
- ? Link directo a la oferta
