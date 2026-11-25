import type { Lang } from "../site";
import en, { type Dict } from "./en";
import es from "./es";
import fr from "./fr";
import pt from "./pt";
import zh from "./zh";

export const DICTS: Record<Lang, Dict> = { en, es, fr, pt, zh };

/** Alt text for the shared port photo (home hero background and About page). */
export const HERO_ALT: Record<Lang, string> = {
  en: "Container cranes at a port at dusk with an aircraft overhead",
  es: "Grúas portacontenedores en un puerto al atardecer con un avión en vuelo",
  fr: "Portiques à conteneurs dans un port au crépuscule, avec un avion en vol",
  pt: "Guindastes de contêineres em um porto ao entardecer, com um avião no céu",
  zh: "黄昏时分的港口集装箱起重机与上空的飞机",
};
export type { Dict };
