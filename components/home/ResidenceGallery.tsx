import Image from "next/image";

const images = [
  {
    src: "/camp-media/residencia-y-parque.png",
    alt: "Residencia de piedra y madera junto a un área abierta de referencia editorial",
    caption: "La residencia y su parque",
    className: "home-gallery__item--wide",
  },
  {
    src: "/camp-media/residencia-de-piedra-y-madera.png",
    alt: "Construcción de piedra y madera integrada en un entorno boscoso de referencia editorial",
    caption: "Piedra, madera y bosque",
    className: "",
  },
  {
    src: "/camp-media/lago-al-atardecer.png",
    alt: "Lago al atardecer con montañas de Patagonia al fondo",
    caption: "El lago al atardecer",
    className: "",
  },
];

export function ResidenceGallery() {
  return (
    <figure className="home-gallery home-wrap">
      <div className="home-gallery__grid">
        {images.map((image) => (
          <div key={image.src} className={`home-gallery__item ${image.className}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 42vw"
              className="home-gallery__image"
            />
            <figcaption>{image.caption}</figcaption>
          </div>
        ))}
      </div>
      <p className="home-gallery__disclaimer">
        Imágenes editoriales de referencia para ilustrar la experiencia envisioned; no muestran la residencia real.
      </p>
    </figure>
  );
}
