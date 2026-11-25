import { describe, expect, it } from 'vitest';
import { resolveLocale } from '../src/i18n';

describe('resolveLocale', () => {
  it('returns the built-in English locale for "en"', () => {
    expect(resolveLocale('en').modal.title).toBe('Select defect');
  });

  it('returns the built-in Italian locale for "it"', () => {
    expect(resolveLocale('it').modal.cancel).toBe('Annulla');
  });

  it('defaults to Italian when no locale is given', () => {
    expect(resolveLocale().modal.title).toBe('Seleziona difetto');
  });

  it('returns a custom locale object unchanged', () => {
    const custom = { modal: { title: 'T', partLabel: 'P', cancel: 'C' } };
    expect(resolveLocale(custom)).toBe(custom);
  });
});
