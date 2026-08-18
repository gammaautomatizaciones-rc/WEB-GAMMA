# WEB-GAMMA — gammaautomatizaciones.com

## Qué es
Web oficial de GAMMA Automatizaciones. Landing pública orientada a Google Ads + WhatsApp.

## Path y repo
- Local: `C:/Users/Gaston/Desktop/GAMMA/PROYECTOS/WEB-GAMMA/`
- Repo: `https://github.com/gammaautomatizaciones-rc/WEB-GAMMA`
- Deploy: **GitHub Pages** → `gammaautomatizaciones.com` (CNAME en repo)
- Cuenta GitHub: `gammaautomatizaciones-rc`
- Token: `~/.claude/credenciales/key_github_gammaautomatizaciones-rc.md` (fine-grained `github_pat_…`)

## Stack
- HTML + CSS + JS vanilla. 3 archivos separados por página (nunca monolítico).
- Sin frameworks. Sin bundler.
- Lenis 1.1.18 (CDN) para smooth scroll.

## Páginas
| Archivo | URL | CSS | JS |
|---|---|---|---|
| `index.html` | `/` | `css/index.css` | inline + `js/wsp-modal.js` |
| `informacion.html` | `/informacion` | `css/informacion.css` | — |
| `servicios.html` | `/servicios` | `css/servicios.css` | `js/servicios.js` |
| `quienes-somos.html` | `/quienes-somos` | `css/quienes-somos.css` | — |
| `contacto.html` | `/contacto` | `css/contacto.css` | `js/contacto.js` |

## Deploy (flujo estándar)
```bash
T=$(grep -oE 'github_pat_[A-Za-z0-9_]{20,}' ~/.claude/credenciales/key_github_gammaautomatizaciones-rc.md | head -1)
git add <archivos>   # ⛔ nunca git add -A (hook lo bloquea)
git commit -m "..."
git push "https://$T@github.com/gammaautomatizaciones-rc/WEB-GAMMA.git" main
```
**Esperar build (~1-2 min) y verificar con curl antes de pasar el link:**
```bash
curl -s https://gammaautomatizaciones.com | grep "<title>"
curl -s -o /dev/null -w "%{http_code}" https://gammaautomatizaciones.com/css/index.css
```

## Analytics
- Google Ads: `AW-17488015524` (gtag en todas las páginas)
- GAMMA Analytics: `https://gamma-analytics.gammasg.workers.dev` (visits, clicks, scroll depth)
- Conversión WA: `gtag_report_conversion()` en todos los botones de WhatsApp

## Gotchas conocidos
- `og:image` debe ser URL **absoluta** con PNG (no SVG — WhatsApp no lo renderiza)
- El primer build de Pages tarda 1-2 min — nunca pasar link antes de verificar
- `git add -A` está bloqueado por hook → agregar archivos individuales

## Diseño — reglas activas
Ver `memory/reglas/reglas-frontend.md`. En resumen:
- Inter (no Montserrat — este proyecto usa Inter)
- Grises: `--text-muted / --text-secondary` (zinc-ish)
- Íconos: SVG inline custom (no Lucide CDN — está todo inline en el HTML)
- Emojis prohibidos en la UI (rubros del hero son excepción aceptada por Gaston)
- Scroll reveal: IntersectionObserver propio + Lenis para smooth scroll

## Checklist antes de entregar link
- [ ] `<title>` descriptivo
- [ ] `<meta name="description">`
- [ ] OG tags con `og:image` absoluta en PNG
- [ ] favicon
- [ ] `<html lang="es">`
- [ ] 0 errores consola
- [ ] Build Pages `"built"` antes de pasar el link
