# Design guide

Use this as a starting point for other Uday Agarwal projects. Preserve the restraint and rhythm; adapt the content and structure to each product.

## Principles

- Keep the interface light, quiet, and content first. Use whitespace for hierarchy before adding boxes, shadows, or decoration.
- Use one narrow reading column, short copy, clear section labels, and thin dividers.
- Give each project one palette color for its top-down hover reveal. Keep the name in the header plain. Use white text on dark blue and red; use dark text on yellow, green, and mist.
- Let links look like links: underlined text, a clearer underline on hover, and a visible keyboard focus ring. Avoid large buttons unless the action calls for one.
- Use motion sparingly: a top-down color fill on project hover and a 150ms, 4px shift on project names. Respect reduced-motion preferences.

## Tokens

| Role | Value |
| --- | --- |
| Background | `#FFFFFF` |
| Main text / focus ring | `#151515` |
| Muted text | `#6B6B6B` |
| Dividers | `#DEDEDE` |
| Signature accent | `#F0EB83` |
| Palette blue | `#080669` |
| Palette red | `#C21D23` |
| Palette green | `#539A18` |
| Palette mist | `#BBD1D3` |
| Font | Geist Sans, with a system sans fallback |

Project hover colors, in order: **Almanac** yellow, **Framix** blue, **Biblio** red, **Strada** green, **Crossed** mist.

Body text is **15px**, weight 400, line height **1.45**, letter spacing **-0.01em**. Use weight 500 for names and key labels; avoid heavy display weights. Navigation is **14px**. Section labels and footer are **12px**; labels are uppercase with **0.08em** letter spacing. Supporting descriptions are **13px** with **1.55** line height.

## Layout and spacing

- Center the page in a **680px max-width** container. Horizontal padding: **16px** by default, **20px** from 420px wide, **28px** from 640px wide. Top page padding: **16px** by default, **28px** from 640px.
- Keep the intro to **590px** wide. Its top offset is `clamp(96px, 20svh, 160px)` on smaller screens and **28vh** from 640px wide. Separate intro paragraphs by **16px**.
- Leave **96px** before each main section on smaller screens and **144px** from 640px wide. Leave **128px** before the footer, increasing to **176px** from 640px.
- Use **1px dividers** above lists and between rows. Project rows have **12px** vertical padding; experience rows have **16px**. Keep description text **12px** below its heading block.
- Header navigation uses **16px** horizontal and **8px** vertical gaps, wraps when needed, and stacks below the name at **380px and narrower**. Footer text stacks below **360px**.

## Reuse rules

Build mobile first and check at **320px**, **640px**, and desktop widths. Never let decoration cause horizontal overflow or cover content. Use semantic headings, descriptive link text, visible focus states, and comfortable contrast. Keep components flat and square edged by default; add an image, accent, or flourish only when it says something specific about the project.
