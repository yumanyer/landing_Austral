# AustralFinance — dirección de experiencia

## Objetivo
Landing institucional e inmersiva que explique la misión de Austral: abrir rutas de capital y construir infraestructura para mercados que aún no existen, empezando en Argentina y conectando con Latinoamérica y el mundo. Se implementa como HTML, CSS y JavaScript vanilla, sin backend ni frameworks, en un proyecto separado de CLP.

## Diseño
- **Movimiento visual:** editorialismo financiero contemporáneo con cartografía de rutas e infraestructura visible; sobrio y preciso, no estética cripto especulativa.
- **Principios:** 1) cada animación cuenta una parte de la misión; 2) el acceso se representa como una ruta que se abre; 3) la infraestructura se construye progresivamente; 4) datos conceptuales nunca se presentan como actividad real.
- **Color:** Deep Austral (#102A33) da profundidad y confianza; blanco aporta aire editorial; Celeste Bandera (#75AADB) señala dirección, conexión y oportunidades; Slate (#55717A) organiza información secundaria.
- **Composición:** navegación compacta, grandes bloques editoriales asimétricos y una línea/ruta visual que atraviesa las secciones; alternancia controlada entre fondo claro y oscuro.
- **Motivos:** rutas geográficas abiertas; nodos tipográficos/estructurales de empresa-capital-mercado; una secuencia Argentina → Latinoamérica → mundo.
- **Interacción:** la página responde a hover, selección y scroll con estados visibles; movimientos cortos, precisos y funcionales; controles utilizables con teclado.
- **Animación:** entrada de rutas en el hero; aparición progresiva y conexión de componentes al entrar en viewport; transición geográfica por etapas; respetar `prefers-reduced-motion`; no bloquear lectura ni interacción.
- **Tipografía:** Lora para titulares/editorial; Die Grotesk para marca, UI y cifras si se aporta la fuente, con DM Sans / sans-system como fallback. Usar una escala editorial clara y cifras funcionales compactas.
- **Esencia:** infraestructura que conecta empresas de Latinoamérica con nuevas oportunidades de mercado. Personalidad: abierta, precisa y ambiciosa.
- **Voz:** directa, institucional y optimista sin exagerar. Ejemplos: “Construimos mercados para que las empresas puedan crecer.” / “Argentina es el punto de partida. El mundo, el horizonte.”
- **Logo:** no recrear el isotipo del manual. Al no estar incluido el archivo del logo, usar temporalmente el texto AUSTRAL en sans semibold y reemplazable por el logo oficial.
- **Color distintivo:** Celeste Bandera #75AADB.

## Estructura
- `index.html`: navegación y contenido semántico de todas las secciones.
- `styles.css`: sistema visual responsive, movimiento y estados de accesibilidad.
- `script.js`: navegación móvil, revelado en scroll y explicador interactivo de mercado.
- `manus-routes.json`: ruta pública `/` requerida por Preview.

## Alcance de contenido e interacción
Hero de rutas que se abren; manifiesto y explicación de acceso; explicador interactivo Empresa / Participantes / Mercado; transparencia y disponibilidad 24/7 como esquema conceptual, no métrica real; expansión Argentina → Latinoamérica → mundo; cierre/CTA configurable sin inventar un destino de contacto.
