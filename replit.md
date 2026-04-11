# Lens Bros - Photography & Video Production Website

## Project Overview

A professional website for **Lens Bros**, a Chicago-based photography and video production company specializing in real estate, events, weddings, and commercial work. Features a "Cinematic Noir" aesthetic with deep blacks and gold/blue accents.

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4.0 + Radix UI (shadcn/ui pattern)
- **Animations**: Framer Motion
- **Routing**: wouter (lightweight React Router alternative)
- **Build Tool**: Vite 7.x
- **Package Manager**: pnpm
- **Backend**: Express (serves static files in production)

## Project Structure

```
/client          - React frontend (Vite root)
  /src/components  - Reusable UI components
  /src/pages       - Route components (Home, Services, Blog, Contact)
  /src/lib         - Utility functions, image config
  /src/hooks       - Custom React hooks
/server          - Express server (static file serving + SPA routing)
/shared          - Shared constants/types
/dist            - Production build output
  /public          - Frontend assets
```

## Development

- **Start**: `pnpm dev` (runs Vite dev server on port 5000)
- **Build**: `pnpm build` (builds frontend + bundles server)
- **Production**: `pnpm start` (runs Express server)

## Deployment

Configured as a **static** deployment:
- Build command: `pnpm build`
- Public directory: `dist/public`

## Replit Configuration

- Dev server runs on port 5000 (0.0.0.0 host)
- `allowedHosts: "all"` for Replit proxy compatibility
- Workflow: "Start application" → `pnpm dev`
