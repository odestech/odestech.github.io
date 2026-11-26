import Layout from "./components/Layout";
import { DICTS } from "./content";
import About from "./pages/About";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Sector from "./pages/Sector";
import type { Route } from "./site";

export default function App({ route }: { route: Route }) {
  const { lang, key } = route;
  const t = DICTS[lang];
  const props = { lang, t };
  let page;
  switch (key) {
    case "home":
      page = <Home {...props} />;
      break;
    case "about":
      page = <About {...props} />;
      break;
    case "business":
      page = <Business {...props} />;
      break;
    case "pharma":
    case "energy":
      page = <Sector {...props} sector={key} />;
      break;
    case "contact":
      page = <Contact {...props} />;
      break;
    default:
      page = <NotFound {...props} />;
  }
  return (
    <Layout lang={lang} t={t} page={key}>
      {page}
    </Layout>
  );
}
