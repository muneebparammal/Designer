/** Export case study visuals from Figma into `public/casestudy/sobha/` using these filenames. */
export const sobhaAssets = {
  /** Hero card image */
  hero: "/casestudy/sobha/sobha-cover.png",

  /** Section 4 — full-width mockup image (after Scope Expansion) */
  mockupWide: "/casestudy/sobha/my-role.png",

  /** Section 6 — Competitor Analysis table (kept as single image) */
  competitorAnalysis: "/casestudy/sobha/competitor-analysis.png",

  /** Section 7 — User Persona cards (kept as single image) */
  userPersona: "/casestudy/sobha/user_persona.png",
  personaOne: "/casestudy/sobha/persona-1.png",
  personaTwo: "/casestudy/sobha/persona-2.png",
  personaThree: "/casestudy/sobha/persona-3.png",


    /** Section 7 — Empathy mapcards (kept as single image) */
    empathyOne: "/casestudy/sobha/empathy-1.png",
    empathyTwo: "/casestudy/sobha/empathy-2.png",
    empathyThree: "/casestudy/sobha/empathy-3.png",
  
  /** Section 8 — Customer Journey Map: one image per flow */
  journeyMapAmenity:       "/casestudy/sobha/amenity_booking_journey.png",
  journeyMapServiceRequest:"/casestudy/sobha/service_request__journey.png",
  journeyMapMoveIn:        "/casestudy/sobha/movein__journey.png",
  journeyMapAccessControl: "/casestudy/sobha/access_control_journey.png",

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
