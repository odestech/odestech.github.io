import type { Lang } from "../site";
import en, { type Dict } from "./en";
import zh from "./zh";

export const DICTS: Record<Lang, Dict> = { en, zh };
export type { Dict };
