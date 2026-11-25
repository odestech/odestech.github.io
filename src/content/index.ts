import type { Lang } from "../site";
import en, { type Dict } from "./en";
import es from "./es";
import fr from "./fr";
import pt from "./pt";
import zh from "./zh";

export const DICTS: Record<Lang, Dict> = { en, es, fr, pt, zh };
export type { Dict };
