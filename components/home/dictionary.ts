import type { Dictionary, Language } from "./dictionary-types";
import { en } from "./dictionary.en";
import { es } from "./dictionary.es";

export type {
  Dictionary,
  ExperienceColumn,
  Fact,
  GuideGroup,
  Language,
  NavGroup,
  NavItem,
  PackingCard,
} from "./dictionary-types";

export const dictionary: Record<Language, Dictionary> = { en, es };
export const defaultLanguage: Language = "en";
