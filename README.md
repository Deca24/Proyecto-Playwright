# Proyecto Playwright - Automatizaci�n de B�squeda de Empleos

Proyecto de automatizaci�n de pruebas para buscar y listar vacantes de empleo en portales de trabajo usando Playwright.

## Caracter�sticas

- **B�squeda personalizada**: Busca empleos seg�n el rol y ubicaci�n que especifiques
- **Listado completo**: Muestra todas las vacantes encontradas con detalles
- **Multi-navegador**: Pruebas en Chrome, Firefox y Safari
- **Informaci�n detallada**: T�tulo, empresa, ubicaci�n, salario y link de cada vacante
- **Configurable**: Usa variables de entorno para personalizar la b�squeda

## Requisitos

- Node.js (versi�n 14 o superior)
- npm

## Instalaci�n

1. Clona o descarga el proyecto
2. Instala las dependencias:

```bash
npm install
```

3. Copia el archivo de ejemplo y config�ralo:

```bash
copy .env.example .env
```

## Configuraci�n

Edita el archivo `.env` con tus par�metros de b�squeda:

```env
TARGET_ROLE=QA Automation
LOCATION=Colombia
```

## Uso

### Ejecutar b�squeda de empleos

```bash
npm test
```

### Otros comandos disponibles

```bash
npm run test:headed    # Ver tests con navegador visible
npm run test:ui        # Interfaz interactiva
npm run test:report    # Ver reporte HTML
```

## Informaci�n Extra�da

Para cada vacante encontrada:
- T�tulo del puesto
- Empresa
- Ubicaci�n
- Salario (si est� disponible)
- Link directo a la oferta
