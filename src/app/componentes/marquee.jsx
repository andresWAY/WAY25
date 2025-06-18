import Image from 'next/image';

export default function Marquee() {
  return (

    <div className="marquee__master">
      <div className="marquee__contenedor">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="marquee__item" key={i}>
            <span className="marquee__name">ESTO ES UN PRODUCTO WAY</span>
            <Image
              src="/media/llama.png"
              alt="Fuego"
              width={40}
              height={40}
              className="marquee__img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
