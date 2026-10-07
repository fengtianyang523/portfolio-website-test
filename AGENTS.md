# Prototype Instructions

## Prototype-specific direction

- Treat `reference/source-layout.png` as the visual truth: near-white warm field, quiet editorial typography, overlapping desaturated photography and generous negative space.
- English is the default and primary interface language.
- The gallery moves horizontally at a slow constant pace. Reuse the three supplied project images when more visual rhythm is needed.
- Inside the gallery band, a cropped crosshair follows the pointer. Its vertical travel is limited to the band and both axes fade before reaching the edges. The Product/Interaction and CMF/Material labels remain fixed at the center.
- Resting images retain muted original color; hover enlarges the card and restores full color, while activation briefly darkens it. Maintain visibly dramatic variation between image sizes. Do not add project-detail routes.
- Keep the Profile dialog internally scrollable without a visible scrollbar. It closes from its Close control, Escape, or a click on the surrounding backdrop, never from a click inside the profile content.
- Keep Profile as a vertical experience timeline. Do not show GPA, a top-left CMF tag, or a top masthead year.
- Keep homepage utility copy comfortably legible rather than micro-sized. Both the top-left identity and top-right Profile control open the same Profile dialog.
- Profile should retain the fuller original information architecture: introduction, timeline, selected projects/research, toolkit and contact.
- Both visible email contacts must use `mailto:fengtim@aliyun.com`.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
