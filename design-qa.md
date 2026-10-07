# Design QA

**Source visual truth path**

`reference/source-layout.png`

**Implementation evidence**

- Source-matched desktop capture: `qa/implementation-reference-size.png`
- Source/implementation comparison: `qa/comparison-reference-size.png`
- Wide desktop capture: `qa/implementation-desktop-latest.png`
- Mobile homepage: `qa/implementation-mobile-latest.png`
- Mobile Profile state: `qa/implementation-profile-mobile-latest.png`

**Viewport and normalization**

- Source pixels: 735 × 733.
- Matched implementation pixels and CSS viewport: 735 × 733 at device pixel ratio 1.
- `qa/comparison-reference-size.png` places the unchanged 735 × 733 source beside the 735 × 733 browser render with a 12px separator; no browser chrome or scaling is present.
- Additional responsive evidence was captured at 1440 × 900 and 390 × 844.

**State**

Default English homepage with the horizontal gallery in its neutral low-saturation state. Hover color, click feedback, Profile, fixed center labels, responsive layout and email affordances were checked separately.

## Required fidelity surfaces

- Fonts and typography: restrained uppercase utility copy and the high-contrast serif statement preserve the source hierarchy. Corner copy was intentionally enlarged per the latest request while remaining visually subordinate to the statement.
- Spacing and layout rhythm: a broad empty upper field, fixed-height horizontal gallery band, centered axis and irregular overlapping photographs preserve the source composition. Card widths now range from 112px to 370px before responsive scaling, creating a clearly varied image rhythm.
- Colors and visual tokens: the original neutral monochrome register remains, but the canvas is intentionally shifted closer to white (`#fbfaf7`) and the Profile surface to `#fffefa`.
- Image quality and asset fidelity: every visible artwork uses one of the three supplied high-resolution photographs copied into `public/assets`. Neutral state retains a muted trace of the original palette; hover restores full color without stretching or low-resolution substitution.
- Copy and content: the interface defaults to English. The top-left CMF tag, top-year copy and GPA are absent. Profile includes a fuller introduction, Lenovo/Meituan/Tsinghua timeline, four selected projects, three toolkit groups and direct contact.

## Full-view comparison evidence

`qa/comparison-reference-size.png` shows the source on the left and the current implementation on the right at the same dimensions. Both use a centered vertical axis, a bounded horizontal image ribbon, uneven overlapping image sizes, generous negative space and a centered serif statement. The lighter canvas, personal masthead and absence of carousel arrows are intentional changes requested by the user.

## Focused-region comparison

No extra crop was required because the 735 × 733 comparison keeps the axis labels, photograph edges and statement readable. The implementation-only Profile state was captured separately at 390 × 844 to verify the vertical timeline and responsive spacing.

## Comparison history

### Earlier pass

- [P2] Images were too similar in scale and the canvas remained darker than requested.
- [P2] Profile used a horizontal three-column resume layout rather than the requested vertical timeline.
- Fixes: changed the canvas and modal tokens to pale warm off-white; expanded the image-size range and overlaps; rebuilt Profile as a vertically connected timeline; fixed axis labels at the center; restored color on image hover; enlarged corner utility text; removed GPA, top-left CMF and top-year copy; added `mailto:fengtim@aliyun.com` links in both contact locations.

### Final pass

- Latest user-directed fixes: pushed the background closer to white, enlarged every homepage utility-text tier, made both masthead corners open the same dialog, and restored the fuller Profile information architecture from the original site.
- Evidence: `qa/comparison-reference-size.png`, `qa/implementation-desktop-latest.png`, `qa/implementation-mobile-latest.png` and `qa/implementation-profile-mobile-latest.png`.
- Result: no actionable P0/P1/P2 mismatch remains. The differences from the visual source are all explicit user-directed content or palette changes.

## Interaction, accessibility and responsive evidence

- Pointer tracking moved from x=180px to x=1120px while both axis labels remained fixed at the desktop center (720px).
- Hover computed to full color: `grayscale(0)`, opacity `1`, `mix-blend-mode: normal`.
- Both contact locations resolve to `mailto:fengtim@aliyun.com`.
- Both top-left identity and top-right Profile controls opened the dialog. Profile exposed four information sections, three timeline events, four selected projects and three toolkit groups; it contained no GPA.
- Mobile at 390 × 844 reported `document.body.scrollWidth === window.innerWidth === 390`; no horizontal overflow.
- All 14 repeated gallery images loaded from the copied assets with non-zero natural widths.
- Document language is `en` and the native dialog provides Escape behavior and keyboard focus management.
- Browser logs contained Vite connection messages and React's development info only; no warning or error entries.
- Premium static audit passed in strict mode with zero findings.
- `npm run build` passed and `npm run test:sites` passed 4/4 tests.

## Findings

No actionable P0/P1/P2 findings.

## Follow-up polish

- [P3] The exact visible collage changes with the continuous drift; this is intentional ambient motion rather than layout instability.

final result: passed
