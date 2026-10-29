# Continuous homepage gallery — 2026-10-29

Latest user direction: gallery drift continues during pointer hover, keyboard focus and activation; remove all hover/focus animation pauses. Keep the existing speed, seamless repeated sequences, hover enlargement/color, captions and project links. Preserve the system reduced-motion preference. Runtime animation owner: src/styles.css; no opening-specific play-state override is needed.

# Layout correction — 2026-10-29

Latest user direction supersedes the special Team Project row and uncropped selected-work covers: all five selected-work cards share the same two-column grid, 3:2 cover crop and caption style; stack on phones. Hero ribbon variation stays intact. NEXUS AI control uses aligned live bilingual three-stage panels with sequential arrows, stacked below 800px; retain the original lower process illustration. Runtime owners: src/App.jsx and src/styles.css.

# Tianyang Feng — Horizontal Editorial Portfolio

Data Union participant-scene gallery crop: trim 5% from the right of cover-based ribbon photographs via left-anchored 105.263% image width inside clipped slots. Preserve ribbon geometry and original asset for all other placements.

## Opening sequence — 2026-10-28

Latest user update removes the opening identity text and its fade stage. Show only the plain dark gray curtain for 1800ms, followed by the existing upward slide and gradual sharpening. All earlier instructions to display I AM TIANYANG FENG are superseded.

Smoothness refinement: gallery drift runs underneath the curtain from the start and remains running through the clearing phase even if the pointer overlaps it. After the 950ms slide, the visible hero resolves from 12px blur to sharp over 850ms with an ease-out curve. Restrict filtering to the hero for rendering performance; restore interaction after clearing while gallery drift continues. This replaces the abrupt end-of-slide deblur.

Latest sequence: 1800ms hold → 350ms identity-text fade → 950ms upward curtain slide. Homepage stays stationary and blurred at 12px until the curtain has left, then becomes sharp. No progressive deblurring during the slide. Reduced motion uses shorter text/panel fades.

Latest user correction: hold 1.8 seconds, then translate the dark opening straight upward over 950ms. Keep the homepage stationary beneath it; remove all perspective, flipping and homepage-rise motion. This supersedes the original one-second flip description below.

First homepage entry per session opens on a plain #282828 field with centered white I AM TIANYANG FENG in the shared sans-serif stack. Hold one second, then lift and rotate the panel upward over 950ms while the homepage rises subtly into place. OpeningIntro.css owns --opening-background / --opening-ink and motion; OpeningIntro.jsx owns session persistence, temporary interaction/scroll locking and cleanup. No repeated opening on internal navigation or refresh; project deep links bypass the intro. Reduced motion replaces the turn with a 180ms fade; Escape skips it.

## Data Union case study — 2026-10-28

Latest update removes image-enlargement and original-image links, retaining direct imagery and project/video navigation. Close the charcoal photography section with the uncropped installation-final.png panorama, separated from the action photos by 48px.

The white document opens with YouTube demonstration vHbISkXTyqo after the title/summary and before research. Reuse shared edge-to-edge 16:9 .project-video, bilingual title/fallback and 48px separation before research.

Final object/scenario addition is photography-led: a short LoRa overview with a small module image, a large original exploded drawing, then a charcoal finished-installation presentation with one dominant usage photograph, paired acrylic/receipt close-ups and three physical interaction moments. Avoid code, screen-detail and fabrication explanations per user direction. Use the full supplied board as an SVG image clipped to the exploded structure region because the separate label layer omits geometry; preserve original annotations. Keep natural photo proportions, quiet bilingual captions and stacked mobile images.

The second supplied board extends the case study after Definition. Give authorization its own image/steps composition, user flow four spacious illustrated rows and two charcoal rationale panels, and operation four image-led studies in a two-column grid. Keep original implementation photos uncropped. The ESP32 flow is a separate final section with explanatory bilingual text and a large diagram, avoiding a cramped side column. On phones stack the operation studies and diagram section. Source assets and embedded English remain intact; live headings and descriptions translate.

Latest refinement: horizontal user predictions follows the two-column research area as a full-width study with a substantially larger diagram and explanation below. The definition introduction is explicitly left-aligned and shares its left edge with the artwork.

Route #/projects/data-union now owns all Data Union homepage activations, replacing earlier image previews. Preserve the shared fixed photograph, navigation, sans-serif typography and flat 1200px white paper. The title and supplied date/summary form a balanced two-column introduction. Background research has paired columns with original diagrams, interview and theory context; technology uses three restrained image/text rows. The supplied transparent definition artwork appears uncropped on a charcoal #282828 panel, with bilingual explanation and full-size access. Burgundy #a32b3b follows the reference's data connectors and is owned by --union-accent in src/DataUnion.css. Shared palette/type tokens remain in src/styles.css. Stack at tablet/phone widths, retain all source aspect ratios and provide full-size links for detailed figures. All authored copy switches EN / 中文; original image labels remain English. This supersedes previous preview-only Data Union notes.

## Team Project addition — 2026-10-28

The fifth selected-work entry is Team Project / 团队作品, opening #/projects/team-project from both card and gallery. Preserve the preceding four-card order and two-column grid. Team Project occupies a separate row below a hairline: information left, cover right; on phones, copy precedes the image. The moving gallery includes the prototype, exhibition and shell-assembly photographs. Use more pronounced wide/tall/tiny size contrast, vertical displacement and overlaps with once-per-load variation shared by both loop copies. Retain slow drift and accessible raised hover/focus states.

Detail layout reuses the shared sans-serif stack, fixed navigation, full-screen photographic intro and 1200px flat white document. The Mars background remains fixed with a 34% vertical crop. Use an editorial sequence: title with quiet contribution metadata, a large square prototype photo beside the concept, a scene-photo spread aligned at its lower edge, then making process and a compact structure study side by side. Use 64px desktop gutters, a restrained 64px headline, 25px chapter headings, 88px chapter spacing and subtle dividers. Enlarge the exhibition photo proportionally until it matches the rendering's height. The latest supplied station-structure-labeled.png replaces the composed SVG and numbered legend; display the entire transparent artwork at a maximum 440px with its original embedded labels. Preserve original contribution percentages. Below 700px, stack major groups and fit the complete technical illustration to the content width with no horizontal scrolling. src/TeamProject.css owns scoped layout rules and reuses existing palette/type tokens.

## North Star

A quiet moving exhibition wall: neutral gray-white, low-saturation photographs and extremely restrained editorial typography. The page should feel curated and cinematic, with a stationary selected-work exhibition below.

## Visual truth

- Source: `reference/source-layout.png`.
- Register: art-direction studio, monochrome editorial, slow and tactile.
- Anti-references: dark techno HUDs, dashboard cards, bright accents, rounded UI shells, gradients and dense copy.

## Tokens

- Canvas: `#f5f5f5`.
- Ink: `#202020`.
- Muted copy: `#686868`.
- Hairline: `rgba(32, 32, 32, 0.38)`.
- Paper overlay: `#ffffff`.
- All text: Helvetica Neue / Segoe UI with PingFang SC / Microsoft YaHei Chinese fallbacks; one shared sans-serif stack.
- Utility and display use the same `--sans` token.

Runtime owner: `src/styles.css :root`. CSS variables map directly to the palette above.

## Composition

- Scrollable page: a full-viewport introduction followed by selected-work cards with generous blank space.
- Masthead is widely spaced with legible utility text; the moving gallery owns the center.
- Repeated supplied project images use dramatically irregular widths, heights, offsets and overlaps.
- The statement is centered below the image ribbon, echoing the reference's fashion-editorial cadence.
- Both the top-left identity and top-right Profile control open one native modal. It contains an introduction, vertical experience timeline, selected projects, toolkit and contact section; M-Synth has a dedicated detail page.

## Motion and state

- Latest homepage refinement: shrink gallery photograph dimensions by 10% and soften overlaps while adding neighbor spacing. Keep curated size differences and vertical displacement, giving the moving exhibition more air without changing its interaction behavior.

- Data Union now has two additional gallery photographs: a tall front view of the installation and a wide close-up of the receipt interaction. Each opens its actual original image in the shared preview dialog. Keep their project identity linked to Data Union for caption tracking and preserve the homepage cover. Extend the loop duration proportionally as the ribbon grows to retain the slow drift.

- The project caption above the homepage statement follows the crosshair/nearest photograph while drifting, updates immediately on photo hover or keyboard focus, and shares identity across repeated loop copies. Reserve caption height so changing names does not move the headline. Omit the former Beijing / Available for collaboration line beneath the statement.

- The gallery drifts horizontally at a slow constant pace and continues during hover/focus.
- A crosshair tracks the pointer only inside the gallery band; both axes fade before their fixed band edges. Only Product/Interaction stays fixed at the top center.
- In the resting state, photographs keep a muted but clearly visible trace of their original color. Image hover/focus enlarges the card and restores full color. Image activation briefly darkens the photograph and updates the selected-project caption.
- The Profile dialog keeps vertical scrolling while hiding its local scrollbar. Clicking the dimmed area outside the dialog or pressing Escape closes it; interaction inside the paper surface does not.
- Reduced-motion preferences stop the ambient drift and compress transitions.

## Responsive and accessibility

- English is the default interface language.
- Image cards are semantic buttons with accessible project names and keyboard focus.
- Mobile preserves the moving layered ribbon while reducing card dimensions and hiding non-essential masthead copy.
- The native dialog provides Escape handling and accessible modal semantics.

## Selected work — October 2026

User reference: aurorajiang.com for work presentation and supplied screenshot for neutral gray-white color. Keep the moving hero, then show four projects in a balanced two-column grid (one column on phones): M-Synth, NEXUS, Eco-Friendly Data Center and Installation of Data Union. Use shared 3:2 image containers with contained, uncropped artwork. Image-first cards show persistent title and discipline; the first three open their detail routes, while Data Union opens the existing accessible image dialog until case-study content is supplied. Preserve original artwork colors with subtle resting desaturation.

## Typography and header refinement

Latest homepage cleanup: remove the selected-work count and the right-aligned Objects, interactions & spaces subtitle. The live project caption uses 15px desktop / 13px phone text; the Explore selected work link uses 15px desktop / 14px phone text and a 44px minimum target. Retain the stable caption space, quiet sans-serif hierarchy and existing selected-work title size.

Use sans-serif throughout. EN / 中文 controls sit beside Profile and translate homepage and profile content. Selected language persists locally. All header buttons use black pill backgrounds with white text on hover and keyboard focus; the current language stays selected in black. Remove the CMF/Material gallery label.

## Work cover update
Homepage architecture-photo entries in the moving gallery share the Eco-Friendly Data Center id, title and discipline with the selected-work card. Retain their supplied rail-hub.png image. Every repeated gallery item routes through its project id to the corresponding detail page, including keyboard activation.

The lower work cards use four user-supplied photographs: M-Synth, NEXUS, Eco-Friendly Data Center (System Design / 系统设计), and Installation of Data Union (Interactive Installation / 交互装置). Their cover assets and metadata are separate from the moving hero gallery. The data-center card has no supplied year, so no year is shown.

## M-Synth detail page — user update

The synthesizer opens `#/projects/msynth`, compatible with the standalone file. Use the supplied photo as a fixed full-viewport background. After one screen of photography, a centered 1200px white document scrolls above it, fluid on mobile. No shadows or rounded corners on the white page. Use existing project photography and title as initial content; do not invent research or outcomes. Retain language controls and links back to the work section.

- All project detail pages use a shared `.detail-header`: viewport-fixed top navigation above page content, with Back to work and EN / 中文 always visible while scrolling. The empty space between controls does not intercept page interactions.

## NEXUS detail page

Opening metadata follows the title/subtitle and precedes the demonstration: Tianyang Feng, Ke Zhang; 2026.07–2026.10; Contribution: Material Research & Hardware Development. Use 15px muted live text (14px on phones), a wrapping names/date row with 40px spacing, then the bilingual contribution line. Preserve the names and date exactly and translate only the contribution label/content.
Reuse the existing detail-page CSS and responsive geometry. The supplied nexus-background.png remains fixed behind the full-screen introduction and 1200px white paper. Both homepage entries open #/projects/nexus. Initial content uses the established NEXUS title/category and supplied photograph.

## Data center detail page
Concept follows Cooling Technique Analysis: use reference/data-center-concept-layout.png for the principles tree and four-node resource relationship map. Preserve the supplied model at a small scale and render labels/connectors natively so all copy translates. Scoped concept tokens own purple principles (#686f9e), connectors (#858dc4) and resource-node colors (#4b5870, #554d6f, #4a7475, #755267). Keep diagram spacing generous, square principle labels, rounded resource boxes, and horizontal scrolling inside the maps on phones. The cropped neighboring panel is outside this section's scope.
Cooling Technique Analysis follows the two-column benefits/process area. Use the supplied reference/data-center-cooling-layout.png for the current/future sequence, evaporation-impact strip, three blue leader lines, cold-plate detail, large translucent arrow, refrigerant loop and Microsoft case over a quiet infrastructure illustration. Preserve source diagram transparency and geometry; authored labels/copy are bilingual. The section owns --cooling-callout #7d8cff and --cooling-label #bdc2d4; retain #191b35 for the impact strip. On phones, contain horizontal scrolling inside each diagram and stack the case copy/photo. Reproduce supplied technical/statistical statements without treating them as independently verified.
Layout refinement: center the stakeholder map at 65% of its original full desktop width. Beneath the Ideation flow map, place Benefit To Core Stakeholders on the left and Process of generating data on the right in .94fr / 1.06fr columns separated by 48px. Both headings use 20px type and align at the top; benefit panels fill their column beside 88px photos, while the process uses 128px images, 18px subheads and 15.5px descriptions. Below 1000px, stack the two sections; phones retain comfortable text and image sizes. The previous 25%-width panel rule is superseded.
The fourth section is Process of generating AI data, following reference/data-center-process-layout.png: five ordered image/copy rows with a decorative curved dashed path on the left, three cream glowing points and a final cross. Use supplied images uncropped, live bilingual copy, --process-route #4e5ca4 and --process-copy #adb3d6 scoped to the process section. Glow is static. Phones stack images and copy while retaining the left-side route.
The third section, Ideation, follows reference/data-center-ideation-layout.png. Use live bilingual intent copy and water-allocation node labels, thin neutral connectors, and three photo/benefit rows. Benefit surface #282e68 and heading band #1e255b are owned by scoped CSS variables in .data-center-benefits-process-grid; retain the reference's rounded node and benefit-panel geometry. Source photographs are displayed from the left side of the supplied row assets while authored text remains translatable. Preserve label readability with a horizontally scrollable map on phones.
The second section is Stakeholder Analysis: a bilingual section heading in the shared --detail-heading color, followed only by the supplied stakeholder map (1859 × 1702) at natural aspect ratio, centered at 65% width on desktop and 100% on phones. Use the document's 48px side inset (28px on phones), no crop, no extra copy.
The first research section is Background, following reference/data-center-background-layout.png. Desktop uses two equal columns with water-use context and supplied capacity chart on the left, regional water-allocation cases and community concerns on the right. Preserve the six supplied image assets at natural proportions, including the original chart labels. Use #fff4d8 section headings and a #191b35 full-width summary strip on the #242940 document. All authored copy is bilingual; stack columns below 900px and stack the intro/protest compositions on phones. Supplied statistical claims are reproduced from the user's reference, not independently verified.
The intro carries a separate supplied OASIS logo (oasis-logo.png, 674 × 156) and two restrained lines of live bilingual copy. Both logo and text scroll upward with the intro. Use small light-gray text (#d4d6df), centered, without a panel; explain pressure on water resources and the OASIS cooling/design response from the user's supplied reference. Wrap naturally on narrow screens.
The selected-work card opens #/projects/eco-data-center. The user's latest world-at-night artwork (3694 × 1902, eco-data-center-background.png), showing only the map without the logo or foreground model, fills the fixed background with a centered crop. The 1200px document uses #242940, with #f4f5fa text and #bdc2d4 metadata; scoped --detail-paper, --detail-ink and --detail-muted tokens in src/styles.css own these values. Reuse the shared detail navigation. The page has no invented research or outcomes.


### NEXUS background research
First section follows the supplied 01 Background reference: blue heading (#2043ba), three supplied statistic photographs, research directions with a thin arrow rule, explanatory copy, and the supplied recovery-phase illustration. Keep copy bilingual; embedded artwork retains its original English. Stack statistic images and directions on phones. The section replaces the repeated hero photograph inside the document.


The Background section continues with the supplied medical-system/product positioning map after the recovery phases. Preserve its original artwork and add a bilingual caption and accessible description.


### NEXUS online observation
Section 02 follows the supplied comparison layout: 14 Rednote patient experiences (US), three columns for rehabilitation timing, functional rebuilding, and process/logistics. Rows show supplied case excerpts, pain points, and blue opportunity headings. Copy is bilingual; mobile stacks rows with explicit theme labels.


### NEXUS design concept
Section 03 Design Concept follows Online Observation, using the supplied online assessment system diagram and the user's exact English caption, with a Chinese translation. Reuse the blue section heading and shared document spacing.


### NEXUS technical testing
Section 04 uses supplied biomimetic inspiration, four wrist-test photos, and the original comparison chart. Desktop uses paired experiment columns and mobile stacks them. All live copy is bilingual. Retain source angle labels exactly, including 0.12° — 0.12°, without inferring corrected measurements.


NEXUS chapter spacing: add 32px between consecutive sections, reduced to 24px on mobile. Preserve internal section layouts.


### NEXUS design analysis
Section 05 unfolds as sketch/process, prototype iteration, then a full-width blue system architecture/programming panel. Keep source diagrams white on blue, seven component explanations as live bilingual text, and code screenshots large. Use the latest supplied standalone prototype photos. Preserve generous inter-chapter spacing; stack image groups on phones.


### NEXUS real-life wearing gallery
Section 06 shows all seven supplied photos: full-arm portrait alongside paired wrist states and hardware detail, two laptop-use photos, then a full-width NEXUS closing portrait. Preserve native image proportions and original color, no image overlays or invented claims. Stack major groups on mobile, retaining the wrist pair. Keep the approved extra chapter spacing.


### NEXUS AI control
Section 07 follows wearing presentation: AI-Driven Closed-Loop Rehabilitation Control, with the supplied diagram displayed uncropped at natural aspect ratio. Preserve bilingual heading and accessible image description, shared blue heading and increased chapter spacing.


### NEXUS reflection
Section 08 closes the project with the user's exact English What To Do, Challenge, and Future Expectations copy in three columns, translated in Chinese mode. The supplied doctor/patient platform mockup appears full-width below, without cropping. Stack reflections on narrow screens and retain chapter spacing.


Online Observation case photos use 16px more width per image on desktop/tablet (8px into each cell gutter), retaining their aspect ratios and column alignment. Mobile photos remain full-width.


NEXUS white document opens with the YouTube demonstration rakRKz4GoYA below the project title and before Background, using the shared 16:9 project-video treatment and external playback fallback. The fixed photographic cover remains the backdrop.


### Data center solar radiation research
After Concept, use the supplied solar layout: seasonal findings alongside the paired heatmaps, then a short interpretation, four quiet efficiency columns separated by hairlines and the full eight-view solar-simulation montage. Reuse #242940, light headings and muted body copy with 48px desktop / 28px phone gutters. Stack seasonal analysis below 900px and keep diagrams horizontally scrollable below 600px so embedded labels remain readable. Copy follows the user's reference and supports English/Chinese.

### Data center architectural design
Design follows the solar research. Use three restrained columns (1 / 1.3 / .9) with a 24px gutter: perspective and three elevations, section with a compact two-color pipe key, and exploded assembly with muted blue labels. Native annotations are bilingual and readable without colliding with pipework. Reflow to two columns below 1100px and one below 750px; phone section and exploded art scroll horizontally while the explanatory text wraps within the page. Reuse the dark detail canvas, typography and chapter spacing.

### Data center scenario and physical model
After Design, show the complete panorama at its source aspect ratio across the full paper. Group four dark translucent captions at the lower right, leaving the factory visible on the left. Model is a separate section below with 64px chapter separation and an enlarged, centered 1040-by-700 composition: overall and entrance views above, rear and facade details below, alongside the materials list. Retain transparent frames and muted blue landscape. Below 900px keep the full panorama and place captions below it; model photography reflows to a natural-proportion grid with readable bilingual text.

### Data Union homepage addition
Use the supplied data-union-cover.png in both the moving hero (wide slots to retain the installation and participant) and the fourth selected-work card. Keep the four-project rhythm, bilingual titles/categories, derived project count, and image-preview behavior consistent across gallery and cards. Preserve the gray-white canvas, sans-serif typography, muted resting color and original-photo preview. No year or project narrative has been supplied.

### Homepage order and controlled randomness — 2026-10-22
The 2-by-2 selected-work grid reads Data Union, Data Center, NEXUS, M-Synth. The hero begins with Data Union and mixes broad landscape photos with smaller/taller details, uneven vertical placement, positive gaps and restrained overlaps. Apply only small random size/position variations once per load, shared by duplicate loop sequences. Keep layout stable through hover, language switching and modal use. Raise hovered/focused slots to make their full image reachable above neighboring layers.
