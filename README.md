# Proyecto Playwright - Automatización de Búsqueda de Empleos

Proyecto de automatización de pruebas para buscar y listar vacantes de empleo en portales de trabajo usando Playwright.

## Características

- **Búsqueda personalizada**: Busca empleos según el rol y ubicación que especifiques
- **Filtrado por tiempo**: Filtra vacantes publicadas en las últimas 24 horas
- **Listado completo**: Muestra todas las vacantes encontradas con detalles
- **Multi-navegador**: Pruebas en Chrome, Firefox y Safari
- **Información detallada**: Título, empresa, ubicación, salario, fecha de publicación y link de cada vacante
- **Configurable**: Usa variables de entorno para personalizar la búsqueda

## Requisitos

- Node.js (versión 14 o superior)
- npm

## Instalación

1. Clona o descarga el proyecto
2. Instala las dependencias:

```bash
npm install
```

3. Copia el archivo de ejemplo y configúralo:

```bash
copy .env.example .env
```

## Configuración

Edita el archivo `.env` con tus parámetros de búsqueda:

```env
TARGET_ROLE=QA Automation
LOCATION=Colombia
# Filtrar solo vacantes de las últimas 24 horas (true/false)
FILTER_24H=true
```

### Parámetros de configuración:

- **TARGET_ROLE**: El rol o puesto que deseas buscar
- **LOCATION**: La ubicación geográfica para la búsqueda
- **FILTER_24H**: 
  - `true`: Solo muestra vacantes publicadas en las últimas 24 horas
  - `false`: Muestra todas las vacantes encontradas (valor por defecto)
  - **Nota**: La extracción de fechas depende del formato HTML del portal. Si las fechas muestran "No especificada", el portal podría no mostrar fechas en el listado principal o el selector necesita ajuste.

## Uso

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

## Información Extraída

Para cada vacante encontrada:
- Título del puesto
- Empresa
- Ubicación
- Salario (si está disponible)
- Fecha de publicación (ej: "Hace 2 horas", "Hace 1 día")
- Link directo a la oferta
