# IC-FOODS Website — Architecture

> Last updated: 2026-02-09

## Role in the Ecosystem

IC-FOODS Website is the **design reference and theming source of truth** for the IC-FOODS CMS. It is a static React/Vite SPA that defines the visual identity, page layouts, and content structure that will be migrated into the [ic-foods-cms](https://github.com/IC-FOODS/ic-foods-cms) Wagtail site.

Once its theming and content are fully migrated into ic-foods-cms, and ic-foods-cms is launched, **This repo will be removed from production and archived.** 

### Ecosystem Map

```
IC-FOODS Website (this repo)
    │
    │  design tokens, page layouts, content structure
    │
    ▼
IC-FOODS CMS (IC-FOODS/ic-foods-cms)
    │
    │  Wagtail site skin
    │
    ▼
KnowBrow Platform Core (UKnowGrow/knowbrow)
```

See [IC-FOODS CMS ARCHITECTURE.md](https://github.com/IC-FOODS/ic-foods-cms/blob/main/PLANS/ARCHITECTURE.md) for details on how this theming migrates into the CMS and how visualization plugins are embedded.

### Visualization Plugins

Visualization tools like [GraphMap](https://github.com/UKnowGrow/graphmap) and [Food Omics Explorer](https://github.com/IC-FOODS/food-omics-explorer) are **standalone apps embedded in CMS pages via iframes**. Each viz tool has its own API client that talks to the platform backend independently. The CMS provides the iframe wrapper and passes configuration (theme, auth token, data source) via URL params and `postMessage`.

IC-FOODS website devs don't interact with viz tools directly — they are embedded at the CMS layer. However, the theming tokens defined here (Aggie Blue/Gold) are passed to viz iframes so they match the site look.

## What This Repo Contains

### Pages (React SPA)
| Page | File | Purpose |
|------|------|---------|
| Home | `pages/Home.tsx` | Hero with interactive ontology background, problem/solution cards, impact stats |
| Research | `pages/Projects.tsx` | R&D projects, research areas, resources (CSV-driven) |
| Publications | `pages/Publications.tsx` | Publication listings (CSV-driven) |
| Conferences | `pages/Conferences.tsx` | Conference listings |
| About Us | `pages/AboutUs.tsx` | Team profiles, mission (CSV-driven) |
| Partners | `pages/Partners.tsx` | Partner organizations (CSV-driven) |
| Connect | `pages/Connect.tsx` | Contact form |

### Components
- `components/Navbar.tsx` — navigation bar with IC-FOODS branding
- `components/Footer.tsx` — site footer

### Design Tokens (Aggie Blue/Gold Theme)

| Token | Value | Usage |
|-------|-------|-------|
| `aggie-blue` | `#022851` | Primary backgrounds, headings |
| `aggie-gold` | `#FFBF00` | Accents, CTAs, highlights |
| `aggie-blueLight` | `#1b4a7a` | Secondary backgrounds |
| `aggie-gray` | `#f5f5f5` | Section backgrounds |
| `ucd-gradient` | `linear-gradient(135deg, #022851, #1b4a7a)` | Hero sections |
| Font | Inter (300–700) | All text |

Defined inline in `index.html` via TailwindCSS CDN config.

### Content Data (CSVs)
| File | Content |
|------|---------|
| `public/about_team.csv` | Team member profiles |
| `public/partners_list.csv` | Partner organizations |
| `public/publications.csv` | Publication listings |
| `public/rd_list.csv` | R&D project listings |
| `public/rd_research_areas.csv` | Research area descriptions |
| `public/rd_resources.csv` | Resource listings |

### Static Assets
- `public/images/ic-foods-logo.png` — IC-FOODS logo
- `public/images/partners_logos/` — partner organization logos (7 in this repo, 89 in ic-foods-cms)
- `public/images/team/` — team headshots (empty in this repo, 27 in ic-foods-cms)

## How This Informs ic-foods-cms

### Template Migration Map

| React Page | → Wagtail Model | → Template |
|------------|-----------------|------------|
| `Home.tsx` | `HomePage` | `home_page.html` |
| `Projects.tsx` | `ResearchIndexPage` + `ProjectPage` | `research_page.html`, `project_page.html` |
| `Publications.tsx` | Publication snippet + listing page | `publications_page.html` |
| `AboutUs.tsx` | `EmployeePage` + Individual snippet | `about_page.html`, `employee_page.html` |
| `Partners.tsx` | Organization snippet + listing page | `partners_page.html` |
| `Connect.tsx` | `ContactFormPage` | `contact_form_page.html` |
| `Conferences.tsx` | StreamField page | `conferences_page.html` |

### Content Migration Map

| CSV File | → Wagtail Model |
|----------|-----------------|
| `about_team.csv` | `Individual` snippet + `EmployeePage` |
| `partners_list.csv` | `Organization` snippet |
| `publications.csv` | `Publication` snippet |
| `rd_list.csv` | `ProjectPage` instances |
| `rd_research_areas.csv` | `ResearchArea` snippet |
| `rd_resources.csv` | `Resource` snippet |

The `seed_icfoods.py` management command in KnowBrow reads these CSVs and creates the corresponding Wagtail content.

### Interactive Elements to Preserve
- **OntologyBackground** (Home.tsx) — SVG dot animation with cursor attraction physics. This should become a standalone JS widget embeddable in the Wagtail home template.
- **CSV-driven data tables** — will be replaced by Wagtail querysets in template context.

## Archive Plan

Once the following are complete, this repo will be archived:
1. All design tokens migrated to ic-foods-cms CSS
2. All page layouts converted to Wagtail templates
3. All CSV content seeded into Wagtail via management command
4. All static assets (logos, photos) moved to ic-foods-cms
5. Interactive elements (OntologyBackground) extracted as reusable widgets

## Technology
- **React 19** + **Vite**
- **TailwindCSS** (CDN)
- **Lucide React** for icons
- **react-router-dom** for client-side routing
- CSV files for content (no backend)
