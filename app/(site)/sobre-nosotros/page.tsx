import { permanentRedirect } from "next/navigation";

/** Legacy route: answers a permanent redirect to the canonical about page. */
export default function SobreNosotrosRedirect() {
  permanentRedirect("/nosotros");
}
