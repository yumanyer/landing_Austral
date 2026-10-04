# AustralFinance — Landing

Landing institucional responsive hecha con HTML, CSS y JavaScript vanilla. No requiere build, paquete, backend ni framework.

## Ejecutar localmente

Desde esta carpeta:

```bash
python3 -m http.server 3000 --bind 0.0.0.0
```

Abrir `http://localhost:3000`.

## Archivos

- `index.html`: contenido y estructura semántica.
- `styles.css`: sistema visual responsive y animaciones.
- `script.js`: menú móvil, navegación accesible y los dos explicadores interactivos.
- `manus-routes.json`: ruta `/` declarada para Preview.
- `plan.md`: dirección de experiencia y decisiones visuales.

## Antes de publicar

El logotipo está representado con un wordmark temporal porque el archivo oficial no venía adjunto. Reemplazarlo por el lockup oficial sin alterar proporciones ni colores. El punto de contacto todavía debe integrarse con el canal oficial de Austral; por ese motivo, la CTA cierra en el módulo editorial y no inventa una dirección de email. Lora y DM Sans cargan desde Google Fonts; la pila CSS conserva alternativas serif/sans si no hay conexión. DM Sans es el fallback técnico temporal para Die Grotesk.
