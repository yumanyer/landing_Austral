# Austral — Landing V0: estado del diseño y cómo seguir

Documento de traspaso. Resume qué está hecho, con qué decisiones, y las reglas para continuar sin perder la línea visual.

> Nota: el código fue validado por sintaxis, pero no se vio renderizado en un navegador durante la construcción. Lo primero al retomar es abrir cada archivo y ajustar a ojo.

---

## 1. Idea rectora

- **Tesis:** *We build markets that don't exist yet.* Austral es infraestructura financiera de mercado; blockchain es una capa, no el producto.
- **Conversión:** waitlist ("Join the waitlist"). Recorrido buscado: claridad → curiosidad → acción.
- **Concepto visual central:** **partículas esféricas 3D** que representan activos y mercados. Todo el relato se cuenta transformando la misma nube de esferas: dispersión → estructura → conexión → expansión.
- **Principio de calidad:** cada elemento visual debe comunicar crecimiento, dirección, futuro o conexión. Si no, se cuestiona que exista. Nada de estética Web3 genérica (neón, monedas, dashboards falsos, glassmorphism, blobs).

## 2. Sistema de diseño (fijo, viene del brief)

| Token | Valor | Uso |
|---|---|---|
| Celeste Bandera | `#75AADB` | Identidad, esferas, acentos, estados activos |
| Deep Austral | `#102A33` | Fondos oscuros, texto principal |
| Slate | `#55717A` | Texto secundario, esferas "apagadas" |
| White | `#FFFFFF` | Fondo principal, espacio negativo |

- **Lora** (serif): titulares, claims, narrativa. **Die Grotesk**: navbar, botones, UI, números, formularios.
- Regla: letras → Lora, números y UI → Die Grotesk.
- La página es predominantemente clara; Deep Austral aparece como bloques estratégicos (hoy: la sección Problema); el celeste es identidad, no relleno.
- Botones de esquinas casi rectas (`border-radius: 2px`), foco visible, nada de píldoras ni exceso de sombras.
- Pendiente: **Die Grotesk es fuente con licencia**; hoy cae a `Helvetica Neue/Arial`.

## 3. Estado actual por archivo

| Archivo | Qué es | Estado |
|---|---|---|
| `hero/hero-austral-logo.html` | Hero con el isotipo real como forma de las esferas (PNG embebido y muestreado) | **Versión vigente del hero**, aprobada por el usuario |
| `hero/Hero.astro` | Componente Astro del hero, pero con la silueta poligonal (flecha sin travesaño) | Desactualizado: falta portarle el muestreo del logo |
| `hero/hero-preview.html` | Vista previa del componente anterior | Obsoleto |
| `problem/problem-section.html` | Sección Problema inmersiva (pinned + 3D) con copy placeholder | **Boceto vigente** |
| `austral-landing/index.html` | Landing completa V0 (todas las secciones, 2D, bilingüe) | **Superada visualmente**; sirve como referencia de estructura, formulario y i18n |

### 3.1 Hero (vigente)

- Retícula de puntos recortada con el isotipo (se lee el PNG en un canvas fuera de pantalla y se colocan esferas donde hay logo).
- ~650 posiciones × 5 capas finas ≈ 3.200 esferas en un solo `InstancedMesh` (una draw call), con luz ambiente + direccional.
- Ensamble de abajo hacia arriba desde posiciones dispersas (retardo escalonado), luego rotación suave e inclinación con el mouse.
- **Repulsión del mouse:** rayo → plano z=0 → espacio local del grupo; las esferas cercanas se alejan y vuelven con un resorte.
- Fallback 2D (SVG animado) si no hay WebGL, si hay `prefers-reduced-motion` o en móviles débiles.
- Parámetros: `STEP=7` (densidad), radio de esfera `.056`, `SP=.17` (espesor), cada novena esfera en Deep Austral, `R=1.5`, `PUSH=.06`, `SPRING=.03`, `DAMP=.9`.
- Three.js r128 cargado desde cdnjs, solo cuando hace falta.

### 3.2 Problema (vigente)

Sección con scroll "pinned" (`420vh`), fondo Deep Austral, una sola nube de 1.500 esferas que cambia de estado con el scroll (con mesetas para leer cada punto):

1. **Acceso limitado:** cúmulo celeste (empresa) a la izquierda, cúmulo blanco (participantes) a la derecha, muro de esferas slate en el medio.
2. **Mercados fragmentados:** el muro se deshace y todo se reparte en 9 islas separadas.
3. **Infraestructura cerrada:** las esferas forman un círculo apagado tipo reloj, con una aguja celeste (el mercado solo existe en ciertos horarios).

- El texto de la izquierda resalta el problema activo y atenúa los otros; mismo sistema de repulsión con el mouse.
- Mobile: la escena sube (`y=1.7`, escala `.62`) y el texto va abajo con degradé.
- Sin WebGL o con reduced motion: no se fija, queda una lista estática de los tres problemas.
- Parámetros: `N=1500`, `stateOf` (umbrales `.12/.26/.55/.26`), `R=1.3`, `PUSH=.05`, `SPRING=.05`, `DAMP=.88`.
- **Copy:** placeholder. Hay versión en español del bloque HTML con las mismas clases.

## 4. Cómo seguir

### 4.1 Secciones que faltan (continuar la misma narrativa de partículas)

Orden recomendado del recorrido: Navbar → Hero → Problema → **Solución** → **Cómo funciona** → **Blockchain** → **Argentina → LatAm → Mundo** → **Waitlist** → FAQ → Footer.

| Sección | Idea visual propuesta (misma nube de esferas) |
|---|---|
| Solución ("We build the market") | Las islas del Problema convergen hacia un hub con el isotipo de Austral y quedan conectadas. Es el "pago" de la tensión creada antes. Transición clave: Problema → Solución |
| Cómo funciona (Create / Connect / Operate / Scale) | Secuencia de cuatro estados de la misma estructura (construir, enlazar, operar, ampliar). Es una secuencia real, así que sí admite numeración |
| Blockchain ("Markets that don't sleep") | Bloque Deep Austral con 24/7, Programmable, Transparent, Global. Aquí el reloj apagado del Problema se enciende: continuidad visual |
| Argentina → LatAm → Mundo | Mapa de puntos de Argentina que se expande a LatAm y luego a un globo. Etiquetas **Building / Vision** (no prometer fechas) |
| Waitlist | Bloque Celeste Bandera con formulario corto (email, país, rol). Es el único bloque de color pleno; ahí va la conversión |
| FAQ / Footer | Quietos, sin 3D. Alto contraste y mucho aire |

### 4.2 Reglas para no perder la línea

1. **Un elemento memorable por sección** y el resto quieto y disciplinado.
2. **Reutilizar el mismo sistema:** esferas instanciadas, tres estados, scroll → estado, repulsión con el mouse. No inventar un efecto nuevo por sección.
3. **La nube de partículas es el hilo narrativo:** entre secciones debe sentirse una sola escena que evoluciona, no bloques independientes.
4. **Sin cards repetitivas**, sin sombras decorativas, sin gradientes genéricos, sin etiquetas en mayúsculas sobre cada título.
5. **Copy:** frases cortas, sin afirmaciones financieras indemostrables, sin números sin fuente y sin presentar lo no implementado como existente (usar Existing / Building / Vision).
6. **Accesibilidad:** foco visible, `prefers-reduced-motion`, labels reales en formularios, contraste suficiente, alternativa estática para todo lo 3D.

### 4.3 Decisión técnica pendiente (importante)

Hoy **cada sección crea su propio renderer WebGL**. Con dos secciones no hay problema, pero con cuatro o cinco se corre el riesgo de superar el límite de contextos del navegador y se encarece mobile. Antes de sumar más secciones 3D:

- Opción A (recomendada): **un único canvas fijo** detrás de toda la página, con una sola escena cuyos estados se conducen por scroll.
- Opción B: crear el renderer al entrar en pantalla y **destruirlo** (`dispose`) al salir.

También: pasar de CDN a `npm install three` con import en Astro, y dejar los scripts como módulos del componente.

## 5. Pendientes y decisiones abiertas

- [ ] Cargar **Die Grotesk** (licencia web, `@font-face`).
- [ ] Conseguir el **isotipo en SVG** (hoy se usa el PNG de 169×138, bordes con poca resolución).
- [ ] Copy final de Problema y del resto (hoy placeholder).
- [ ] Portar el muestreo del logo a `Hero.astro` y unificar los componentes en Astro.
- [ ] Integrar **i18n ES/EN** en Astro (hoy el bilingüismo solo existe en `austral-landing/index.html`).
- [ ] Formspree: reemplazar `YOUR_FORM_ID`.
- [ ] Navbar y footer definitivos con los estilos nuevos (botones rectos, tipografías del sistema).
- [ ] **FAQ "¿Es un exchange?":** la respuesta del brief es evasiva; conviene redactarla con claridad y revisarla con alguien que conozca el marco regulatorio.
- [ ] Sección de datos: solo con cifras verificables, con fuente y período. Si no hay, omitir.
- [ ] SEO completo (canonical real, Open Graph con imagen, sitemap, robots) y analytics (visitas → waitlist, país, rol).
- [ ] Probar rendimiento real en móviles de gama media y ajustar `STEP` / `N`.

## 6. Resumen en una línea

El lenguaje visual ya está definido: **esferas 3D que se ensamblan, se separan, se apagan y (en las próximas secciones) se conectan y se expanden**, sobre un sistema sobrio celeste / Deep Austral / blanco con Lora y Die Grotesk. Lo que sigue es continuar esa historia con la misma nube de partículas, resolver el uso de un único contexto WebGL y cerrar copy, fuentes y logo vectorial.