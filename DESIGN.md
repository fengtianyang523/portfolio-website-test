# Tianyang Feng — Horizontal Editorial Portfolio

## North Star

A quiet moving exhibition wall: pale warm off-white, low-saturation photographs and extremely restrained editorial typography. The page should feel curated and cinematic, not like a conventional portfolio grid.

## Visual truth

- Source: `reference/source-layout.png`.
- Register: art-direction studio, monochrome editorial, slow and tactile.
- Anti-references: dark techno HUDs, dashboard cards, bright accents, rounded UI shells, gradients and dense copy.

## Tokens

- Canvas: `#fbfaf7`.
- Ink: `#292825`.
- Muted copy: `#77746e`.
- Hairline: `rgba(36, 35, 32, 0.38)`.
- Paper overlay: `#fffefa`.
- Display: Bodoni/Didot-style system serif.
- Utility: Helvetica-style system sans.

Runtime owner: `src/styles.css :root`. CSS variables map directly to the palette above.

## Composition

- Full-viewport single page with generous blank space.
- Masthead is widely spaced with legible utility text; the moving gallery owns the center.
- Repeated supplied project images use dramatically irregular widths, heights, offsets and overlaps.
- The statement is centered below the image ribbon, echoing the reference's fashion-editorial cadence.
- Both the top-left identity and top-right Profile control open one native modal. It contains an introduction, vertical experience timeline, selected projects, toolkit and contact section; there are no project-detail routes.

## Motion and state

- The gallery drifts horizontally at a slow constant pace and pauses for hover/focus.
- A crosshair tracks the pointer only inside the gallery band; both axes fade before their fixed band edges. Product/Interaction and CMF/Material labels stay fixed at the center.
- In the resting state, photographs keep a muted but clearly visible trace of their original color. Image hover/focus enlarges the card and restores full color. Image activation briefly darkens the photograph and updates the selected-project caption.
- The Profile dialog keeps vertical scrolling while hiding its local scrollbar. Clicking the dimmed area outside the dialog or pressing Escape closes it; interaction inside the paper surface does not.
- Reduced-motion preferences stop the ambient drift and compress transitions.

## Responsive and accessibility

- English is the default interface language.
- Image cards are semantic buttons with accessible project names and keyboard focus.
- Mobile preserves the moving layered ribbon while reducing card dimensions and hiding non-essential masthead copy.
- The native dialog provides Escape handling and accessible modal semantics.
