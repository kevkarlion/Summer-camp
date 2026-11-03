import { permanentRedirect } from "next/navigation";

/** Legacy route: answers a permanent redirect to the canonical families page. */
export default function GuiaFamiliasRedirect() {
  permanentRedirect("/familias");
}
