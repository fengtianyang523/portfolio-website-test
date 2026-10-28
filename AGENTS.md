# Prototype Instructions

Homepage Data Union participant-scene gallery images: crop 5% off the right edge to hide the original pale/transparent strip. Apply only to the two cover-based slots in both loop copies, using left-anchored expanded image width within the existing clipped card. Keep card sizes, other photographs, selected-work cover and detail background unchanged.

## First-visit opening — 2026-10-28

Latest update: remove I AM TIANYANG FENG completely, including its fade stage and accessible label. The opening is now a plain dark gray curtain: hold 1800ms, slide upward for 950ms, then resolve hero blur over 850ms. Retain gallery drift, reduced-motion fallback, Escape skip and session persistence.

Latest smoothness refinement: keep the gallery drifting before and throughout the opening, overriding hover/focus pause until the opening completes. After the curtain finishes sliding away, gradually resolve blur over 850ms (180ms reduced motion) rather than snapping sharp. Apply blur only to the visible hero, not the entire long homepage, to avoid an oversized filtered layer. Restore normal hover/focus behavior and release scroll/interaction after the clearing phase. This supersedes the prior immediate blur removal.

Latest motion refinement: after the 1800ms hold, fade I AM TIANYANG FENG out over 350ms before the dark curtain starts its 950ms upward slide. Keep the underlying homepage stationary and blurred at 12px for the entire opening; remove blur only when the curtain animation finishes. Reduced motion uses 180ms fades. Replay the updated opening in the right-side preview when done.

Latest correction supersedes the flip: hold the opening for 1800ms, then slide the entire dark panel straight upward to reveal a stationary homepage. No rotation, perspective or homepage rising motion. Retain the 950ms slide, session behavior, scroll/interaction cleanup and reduced-motion fade.

On the first homepage entry per browser session, show a full-viewport dark gray (#282828) opening with centered white I AM TIANYANG FENG. Hold for 1000ms, then flip/lift the panel upward over 950ms to reveal the existing homepage. Use sessionStorage so returning home and refreshing in the same session does not replay it; direct project links remain accessible without the opening. Lock background scrolling and interaction during the opening, restore on finish or unmount, allow Escape to skip, and use a short fade for reduced motion. Keep the exact English identity statement in either language. Implement through OpeningIntro.jsx / OpeningIntro.css without changing the gallery layout.

## Data Union detail — 2026-10-28

Latest user update: remove all image-enlargement/full-size/prototype-detail links. Images remain directly displayed; project navigation and video fallback links remain. Add the supplied installation-final.png as a full-width uncropped closing photograph after the three physical interaction photos. This supersedes earlier full-size-link guidance.

Place the supplied YouTube demonstration vHbISkXTyqo immediately after the project title/intro and before Background research, following the shared 16:9 project-video treatment with bilingual accessible title, full-screen support and external playback fallback. Preserve the full-screen photographic opening.

Final supplied technical/scenario board: the user delegates layout and explicitly omits code details, display-screen details and making process for this addition. Append a restrained LoRa overview, data-trader/key exploded structure and photography-led finished-installation section. Use the complete original board only through a bounded SVG viewBox for the exploded drawing (the separately supplied callout PNG has no drawing geometry). Finish with a large usage photo, acrylic/receipt details and three physical interaction photos: insert key, select buyer, take receipt. Omit the code screenshot, screen close-up and laptop screenshot from this addition. Live copy and captions remain bilingual. Implementation lives in DataUnionObject.jsx and scoped DataUnion.css.

Continue after Definition with the user's second supplied board: Authorization process (merchant → alliance → individual, original vertical collage and four live bilingual stages), User flow (four illustrated steps, geography rationale and horizontal-harm protection), Operation instruction (four source drawings with explanation and original log/device/printer images), then a separate readable ESP32 interaction-flow section. Use DataUnionProcess.jsx and scoped DataUnion.css rules. Keep source transparency, full image proportions and large-image links. The provided computer log and receipt are prototype evidence; do not implement real keyboard capture or transactions. On phones stack authorization and operations; preserve the earlier full-width relationship diagram and left-aligned definition heading.

Latest layout feedback: move Horizontal predictions between users below the paired background-research columns into a full-width section, enlarge the original relationship diagram to the content width, and retain its explanation below. Definition title and introductory text must be left-aligned, with their left edge matching the definition artwork.

Data Union now opens #/projects/data-union from the selected-work cover and every gallery photograph, superseding earlier preview-only behavior. Reuse the existing installation cover as the fixed full-screen backdrop, shared fixed navigation and 1200px white document. Use the supplied October 28 board and original transparent diagrams for background research, interview, horizontal data relationships, three protection technologies and data-union definition. Keep authored text bilingual; preserve embedded English artwork. Retain the supplied July–October 2026 date without adding outcomes. Use src/DataUnion.jsx and scoped src/DataUnion.css, restrained burgundy accents, two research columns, three image/copy technology rows and a dark full-width definition panel. On phones stack columns; provide full-size links for dense diagrams. Keep this update local, consistent with the current prototype workflow.

## Homepage fifth project — 2026-10-28

Append Team Project / 团队作品 after the existing four selected-work cards and include it in the moving gallery. Both open #/projects/team-project. The project is Deimos Celestial Palace / 荧惑天宫, a five-person sci-fi installation. Use the supplied IMG_20250413_220312.png as the fixed cover background, followed by the shared flat 1200px white document and fixed bilingual navigation. Content follows Figma NlArIgtYtqiRDFNlIE9QDT, node 190:13564: prototype, personal responsibilities (components design 20%, team management 40%, visual rendering 60%), concept, landscape/exhibition/render images, four making steps, two construction photos and the eight-module station drawing. All authored copy supports EN / 中文; retain supplied artwork and do not invent achievements or a date.

Latest user direction: redesign this detail page with a refined editorial hierarchy and restrained image sizes; the line drawing must not dominate the document. Put contributions alongside the title, a large prototype photo alongside the concept, then an aligned scene-photo spread. Pair Making process with Station structure in two columns. Use the latest user-supplied station-structure-labeled.png directly, with its original transparency and embedded English labels, capped at 440px on desktop; it replaces the numbered SVG and separate legend. Enlarge the exhibition photograph proportionally to match the adjacent Mars rendering's height. On phones, stack major sections and fit the complete technical illustration to the content width. Component styles live in src/TeamProject.css.

Homepage follow-up: give Team Project its own full-width row below the four existing cards, separated by a horizontal rule. Its title and discipline sit on the left and its cover on the right; stack copy then cover on phones. Add exhibition and shell-assembly photographs to the moving gallery (no Mars background), linking to the same project. Increase size contrast, vertical offsets, gaps and overlaps in the ribbon. Sample the variation once per load and share it across both loop copies; keep hover/focus elevation and stable layout through interactions.

## Prototype-specific direction

- Latest breathing-space update: reduce all moving homepage gallery photographs by about 10%, reduce negative overlaps and add more space between neighbors. Preserve the strong relative size contrast, vertical offsets, once-per-load stability and shared loop geometry.

- NEXUS opening metadata: below the title and subtitle, before the demo video, show Tianyang Feng, Ke Zhang; July–October 2026 (2026.07–2026.10); and Contribution: Material Research & Hardware Development. Preserve author names in both languages and translate the contribution to 材料研究与硬件开发 in Chinese. Use quiet gray live text and allow names/date to wrap on phones.

- Latest typography cleanup: Selected work shows only its heading, without a project count or the Objects, interactions & spaces subtitle. Enlarge the live project title/category to 15px on desktop and 13px on phones. Enlarge Explore selected work to 15px on desktop and 14px on phones, with a 44px minimum target. Preserve caption tracking, reserved height and comfortable separation from the gallery.

- Data Union gallery follow-up: include two additional supplied photographs, public/assets/data-union/installation-front.jpg and interaction-closeup.png, interspersed with the existing work. Use a tall front-view crop centered on the device and a wide interaction close-up. Both share the Data Union title/category and open their own full original photograph in the existing preview dialog when clicked, including repeated loop copies. Retain the selected-work cover.

- Latest homepage copy update: remove the Beijing / Available for collaboration line beneath the main statement. The project title/category above the statement follows the photo beneath the crosshair, the nearest photo in a gap, pointer hover and keyboard focus, including both loop copies. While the ribbon drifts unattended, follow the stationary center crosshair. Keyboard focus takes priority until the pointer moves again; pause automatic caption updates when a dialog is open or the hero is outside the viewport. Keep the caption's reserved height stable across project/language changes and leave clear space below the gallery in both languages.

- Treat `reference/source-layout.png` as the visual truth: neutral gray-white field, quiet editorial typography, overlapping desaturated photography and generous negative space.
- English is the default and primary interface language.
- The gallery moves horizontally at a slow constant pace. Reuse the four supplied project images when more visual rhythm is needed.
- Inside the gallery band, a cropped crosshair follows the pointer. Its vertical travel is limited to the band and both axes fade before reaching the edges. Only the Product/Interaction label remains fixed at the top center; omit CMF/Material.
- Resting images retain muted original color; hover enlarges the card and restores full color, while activation briefly darkens it. Maintain visibly dramatic variation between image sizes. M-Synth has a dedicated project-detail hash route; other projects retain image previews.
- Keep the Profile dialog internally scrollable without a visible scrollbar. It closes from its Close control, Escape, or a click on the surrounding backdrop, never from a click inside the profile content.
- Keep Profile as a vertical experience timeline. Do not show GPA, a top-left CMF tag, or a top masthead year.
- Keep homepage utility copy comfortably legible rather than micro-sized. Both the top-left identity and top-right Profile control open the same Profile dialog.
- Profile should retain the fuller original information architecture: introduction, timeline, selected projects/research, toolkit and contact.
- Both visible email contacts must use `mailto:fengtim@aliyun.com`.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## User preference — 2026-10-18

- Use a neutral gray-white canvas instead of warm cream, following the supplied reference screenshot.
- Keep the horizontal hero and add a selected-work card section below it, inspired by aurorajiang.com. Show the four existing projects with large covers and persistent names/categories.
- Cards may open an image preview dialog; M-Synth now opens its dedicated detail page.

- All typography uses the shared sans-serif font stack, including display headings and Profile.
- Keep visible EN / 中文 controls at the top right; translate the homepage and Profile, persist language selection, and keep English as the initial default.
- All header buttons use black pill backgrounds and white text on hover/focus; the selected language stays black.

## M-Synth detail page — user update

The synthesizer opens `#/projects/msynth`, compatible with the standalone file. Use the supplied photo as a fixed full-viewport background. After one screen of photography, a centered 1200px white document scrolls above it, fluid on mobile. No shadows or rounded corners on the white page. Use existing project photography and title as initial content; do not invent research or outcomes. Retain language controls and links back to the work section.

- All project detail pages use a shared `.detail-header`: viewport-fixed top navigation above page content, with Back to work and EN / 中文 always visible while scrolling. The empty space between controls does not intercept page interactions.

## NEXUS detail page — user update
NEXUS now opens #/projects/nexus from both gallery and selected work. Follow the M-Synth layout: supplied fixed full-screen background, then a flat 1200px white document, with shared fixed navigation and language controls. Start with the project title and supplied photograph; add further content when supplied.

## Data center detail page — 2026-10-20
The architecture photograph in both repeated homepage hero-gallery sequences opens #/projects/eco-data-center, matching the selected-work card. Keep its supplied rail-hub.png photograph but identify it as Eco-Friendly Data Center / System Design in both languages. Gallery routing uses the shared project id so all copies support mouse and keyboard activation consistently.
Eco-Friendly Data Center opens #/projects/eco-data-center from selected work. The latest user update replaces the protest photograph with the supplied OASIS world-at-night artwork, stored locally as eco-data-center-background.png. The flat 1200px document uses #242940 instead of white, with light text and muted light metadata. Reuse shared fixed navigation. Start with the existing title and supplied project cover; do not invent project research or results.

The fixed cover background is the latest supplied world-at-night map without a logo. Use the separately supplied oasis-logo.png as an image inside the scrolling intro, with two small, light-gray explanatory lines below it: AI data-center expansion pressures water resources; OASIS cooling technology and data-center design support sustainable water allocation. The logo and both lines scroll upward together with the intro; only the map stays fixed. Follow the user's supplied copy reference, translate with the language controls, and allow natural wrapping on phones.

The first content section is Background, following reference/data-center-background-layout.png. Replace the repeated cover inside the document with a two-column research section: water-use context and the supplied capacity chart on the left; three supplied regional case images, community concerns and protest photography on the right; a full-width research summary below. Keep supplied numerical statements and embedded chart labels without inventing sources or results. Live copy is bilingual and columns stack on narrow screens. Preserve #242940 and the existing cover.

The second section is Stakeholder Analysis / 利益相关者分析: only a heading and the supplied data-center-stakeholder-map.png, centered at 65% of the desktop content width and uncropped at its natural aspect ratio. Preserve all embedded artwork and labels without adding explanatory body copy.

Latest sizing/layout update: display the stakeholder map at 65% of the desktop content width, centered, preserving its aspect ratio. Below the Ideation water-allocation map, combine Benefit To Core Stakeholders (left) and Process of generating data (right) in one two-column layout. Size benefit panels to their column, with 88px photographs; the process uses 128px images and a narrow decorative route. Align both section headings and use a 48px column gap. Below 1000px, stack the benefits above the process. Phone map and panels retain readable content widths. This replaces the earlier 25%-width benefit-panel rule.

The third section is Ideation / 构思, following reference/data-center-ideation-layout.png: a short intent statement, a water-allocation map (original water resources, government, industrial/agricultural production, AI data center and resident community), then three benefit rows for AI companies, local government and residents. Use live bilingual text and the photographs at the left of the supplied benefit-row assets; preserve the blue panels and pill-shaped flow nodes. The map can scroll horizontally on phones to retain legible labels.

The fourth section is Process of generating AI data / AI 数据生成流程, following reference/data-center-process-layout.png. Show five supplied images with live bilingual headings and descriptions in this order: User Input, GPU Computing, Computing Power Distribution, Thermal Cooling, Model Autoregression. Preserve the reference's decorative curved dashed route, three static glowing nodes and final cross. On phones, stack each image above its copy and retain a narrow route in the left gutter.

Cooling Technique Analysis follows the benefits/process columns, using reference/data-center-cooling-layout.png. Preserve the supplied current-cooling diagram, exploded cold plate, refrigerant-loop diagram, Microsoft case image and footer decoration. Recreate the cooling-tower/server/chip callout lines and labels as responsive overlays, with a large translucent downward arrow leading to future zero-water evaporation technology. Copy is bilingual and reproduces the supplied research rather than adding technical claims. Current and future diagrams scroll horizontally on phones so their labels stay readable; the Microsoft case stacks. Preserve original PNG transparency.

Concept / 概念 follows Cooling Technique Analysis, using reference/data-center-concept-layout.png. Recreate the design-principles tree with the supplied small building model: Construction branches into Modular layout, Height and Heat Dissipation; Energy branches into Zero-water Evaporation and Solar Power Generation. Below it, reproduce the four-node resource relationship map for the future energy-saving factory, excess electricity, community/local production and land/initial water. Labels and intent copy are live bilingual text. Keep muted purple principle boxes, four differentiated resource-node colors, thin connectors and the source arrow directions. Maps scroll horizontally on phones; do not add the partially visible neighboring section from the reference screenshot.


Research On Solar Radiation / 太阳辐射研究 follows Concept, using reference/data-center-solar-layout.png. Place three seasonal findings to the left of the supplied paired Tucson DNI/GHI heatmaps; follow with the supplied solar-analysis conclusion, four facade efficiency values (roof 70–85%, southwest 15–25%, west 0–10%, north/east 0%), and the uncropped two-row eight-simulation montage. Keep native PNG transparency, live bilingual copy, and horizontal diagram scrolling on phones. Preserve supplied claims without adding external findings.

Design / 设计 follows Solar Radiation Research, using reference/data-center-design-layout.png and six supplied drawings. Keep a three-column desktop composition: development render with three labeled orthographic views, thermosyphon section, and exploded assembly. Put the red/blue pipe explanations above the section at web widths to prevent overlap; ventilation and underground-pipe labels remain on the diagram. Recreate four live bilingual assembly labels. Stack at narrower widths and allow horizontal diagram browsing on phones. Crop only the render's empty/noisy upper margin in CSS; preserve building details, image transparency and diagram proportions.

Scenario / 场景 and Model / 模型 follow Design, using reference/data-center-scenario-model-layout.png. Latest user update: show the entire factory panorama at its original 5230:1738 ratio across the paper, with four translucent numbered caption blocks grouped at the lower right. Model follows below as its own full-width section, with a centered 1040px composition and larger complete-model, entrance, rear and facade-detail photos. Preserve PNG transparency and the three-item materials list. Below 900px keep the panorama uncropped, wrap captions below it in two columns, and use a natural-proportion model photo grid. All live copy remains bilingual.

## Homepage fourth project — 2026-10-21
The homepage now contains four projects: M-Synth, NEXUS, Eco-Friendly Data Center, and Installation of Data Union / 数据联盟装置. Use the supplied data-union-cover.png in both the moving gallery and the selected-work card. Category: Interactive Installation / 交互装置; no invented year or case-study content. The selected-work area is a balanced 2-by-2 desktop grid with consistent 3:2 image containers and uncropped artwork, stacking on phones. Derive the / 04 count from the project list. Until detail content is supplied, Data Union opens the existing accessible image-preview dialog from both gallery copies and the selected-work card; retain existing detail routing for the other three projects.

## Homepage order and gallery variation — 2026-10-22
Selected-work desktop order is Data Union upper left, Data Center upper right, NEXUS lower left, M-Synth lower right. Phone reading order follows the same sequence. The gallery uses restrained per-load random variation around curated wide/narrow photo sizes, vertical offsets and gaps/overlaps. Sample dimensions once at module initialization and reuse them in both loop copies, so React updates and interactions do not move cards or break the seamless loop. Raise a hovered/focused slot above adjacent overlaps so every image remains accessible. All four projects retain their existing mouse/keyboard activation behavior, including Data Union's image preview.
