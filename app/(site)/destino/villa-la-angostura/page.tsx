import { permanentRedirect } from "next/navigation";

/** Legacy route: answers a permanent redirect to the canonical residence page. */
export default function DestinoRedirect() {
  permanentRedirect("/residencia");
}
