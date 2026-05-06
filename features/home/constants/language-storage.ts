import type { AppLanguage } from "@/features/home/types/home.types";

export const APP_LANGUAGE_STORAGE_KEY = "agromistral-language";

export function parseStoredLanguage(value: string | null): AppLanguage | null {
  if (value === "en" || value === "hi") {
    return value;
  }
  return null;
}
