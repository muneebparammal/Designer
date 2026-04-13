/** Export case study visuals from Figma into `public/casestudy/sobha/` using these filenames. */
export const sobhaAssets = {
  /** Hero card image */
  hero: "/casestudy/sobha/sobha-cover.png",

  /** Section 4 — full-width mockup image (after Scope Expansion) */
  mockupWide: "/casestudy/sobha/mockup-wide.png",

  /** Section 6 — Competitor Analysis table (kept as single image) */
  competitorAnalysis: "/casestudy/sobha/competitor-analysis.png",

  /** Section 7 — User Persona cards (kept as single image) */
  userPersona: "/casestudy/sobha/user-persona.png",

  /**
   * Section 8 — Customer Journey Map: 3 rows of 2 images each.
   * Export each cell from Figma using these filenames.
   */
  journeyMap1L: "/casestudy/sobha/journey-map-1l.png",
  journeyMap1R: "/casestudy/sobha/journey-map-1r.png",
  journeyMap2L: "/casestudy/sobha/journey-map-2l.png",
  journeyMap2R: "/casestudy/sobha/journey-map-2r.png",
  journeyMap3L: "/casestudy/sobha/journey-map-3l.png",
  journeyMap3R: "/casestudy/sobha/journey-map-3r.png",

  /**
   * Section 9 — UI Screens: one image per sub-section row of phone mockups.
   * Export each row from Figma using these filenames.
   */
  uiScreensServiceRequest: "/casestudy/sobha/ui-screens-service-request.png",
  uiScreensAmenityBooking: "/casestudy/sobha/ui-screens-amenity-booking.png",
  uiScreensAccessControl: "/casestudy/sobha/ui-screens-access-control.png",
  /** Additional Features right panel (2 rows of screens) */
  uiScreensAdditional: "/casestudy/sobha/ui-screens-additional.png",

  /**
   * Section 13 — Design System: 2 rows.
   *   Row 1 (2 cols): Color Palette + Typography
   *   Row 2 (1 col): Components & Icons
   */
  designSystemColors: "/casestudy/sobha/ds-colors.png",
  designSystemTypography: "/casestudy/sobha/ds-typography.png",
  designSystemComponents: "/casestudy/sobha/ds-components.png",
} as const;
