/**
 * i18n — Localisation strings for the PointOfAttention UI.
 *
 * All built-in modal and UI strings are configurable per locale.
 * The host app picks a locale (default: 'it') or passes a custom
 * `WarningViewerLocale` object.
 */

/** UI strings that can be localised. */
export interface WarningViewerLocale {
  modal: {
    /** Modal title: "Seleziona difetto" / "Select defect" */
    title: string;
    /** Prefix before the mesh name: "Parte:" / "Part:" */
    partLabel: string;
    /** Cancel button: "Annulla" / "Cancel" */
    cancel: string;
  };
}

/** Built-in locales. */
const builtIn: Record<string, WarningViewerLocale> = {
  it: {
    modal: {
      title: 'Seleziona difetto',
      partLabel: 'Parte:',
      cancel: 'Annulla',
    },
  },
  en: {
    modal: {
      title: 'Select defect',
      partLabel: 'Part:',
      cancel: 'Cancel',
    },
  },
};

/**
 * Resolves a locale code or custom locale object into a concrete
 * `WarningViewerLocale`.
 *
 * - If a string code is provided, looks up the built-in locale dictionary.
 * - If an object is provided, returns it directly (allows full customization).
 * - Falls back to the built-in English locale when the code is unknown.
 * - Defaults to Italian (`'it'`) for backward compatibility when omitted.
 */
export function resolveLocale(
  locale?: string | WarningViewerLocale
): WarningViewerLocale {
  if (typeof locale === 'object' && locale !== null) return locale;
  const code = locale ?? 'it';
  return builtIn[code] ?? builtIn['it'];
}
