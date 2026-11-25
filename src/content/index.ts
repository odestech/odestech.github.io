import type { Lang } from "../site";
import en, { type Dict } from "./en";
import es from "./es";
import zh from "./zh";

export const DICTS: Record<Lang, Dict> = { en, zh, es };
export type { Dict };
