'use client';

import Image from "next/image";
import Marquee from "./componentes/marquee";
import Selection from "./componentes/selection";
import SizeSelector from "./componentes/sizeSelector";
import Footer from "./componentes/footer";
import { useEffect } from "react";
import { useRef, useState } from 'react';

export default function HomePage() {



  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };





    return (
      <main className="landing__master">

        <section className="hero">

        <div className="video-wrapper"> 
      {!playing && (
        <div className="video-overlay" onClick={handlePlay}>
          <Image
            src="/media/Thumbnail_v2.jpg" // tu imagen de miniatura
            alt="Miniaturas"
            fill
            style={{ objectFit: 'cover' }}
          />
          <button className="video-play-button">▶</button>
        </div>
      )}

      <video
        ref={videoRef}
        src="/media/VIDEO_CAMISETA_WAY_ANTIGUOS_v5.mp4"
        className="video-element"
        controls
        playsInline
      />
    </div>

          <Marquee />
        </section>
  
        <section className="intro__master">

            <div className="intro__text">
                <h2>Bueno, pues ya nos conoces.</h2>
                <div className="rayo__master"><p>Algunas de las caras y también,<br></br>
                como son algunas de nuestras ideas.</p><Image src="/media/rayo.png" alt="Rayo" width={100} height={217} className="rayo"></Image></div>
                <br></br>
                <h2>Pero… podemos</h2>
                <h1><span className="txt_red">conocernos en persona.</span></h1>
                <br></br>
                <p>Que, aunque no lo creas, ganamos.</p>
                <p>Y podemos hablar de muchas cosas.</p>
                <h1>De cosas muy <span className="txt_red">Ways</span></h1>
                <div className="corazon__master"><p>o de lo que sea.</p><Image src="/media/corazon.png" alt="Corazon" width={120} height={106} className="corazon"></Image></div>
                
            </div>

            <div className="intro__line"></div>

            <Image src="/media/mano_01.png" alt="Mano rockera" width={400} height={574} className="mano__rock"></Image>

            
        </section>



        <section className="selection__master">

            <Image src="/media/fresh.png" alt="Fresh" width={400} height={403} className="fresh"></Image>

            <div className="selection__text">
                <div className="s__title"><p>Mira,</p>
                <p>aquí van algunas que seguro que te gustarán.</p>
                <p>Y si no, nos puedes proponer tú ¿eh?</p>
                <h1>ELIGE LA QUE QUIERAS</h1>
                </div>
                <Selection frase="Quiero saber más sobre este proyecto."></Selection>
            <Selection frase="Pues yo quiero hablar de lo de ganar premios juntos. Muchos premios."></Selection>
            <Selection frase="Quiero que me enseñéis esos premios que tan seguros estáis de ganar. Porque entiendo que tendréis ¿no?"></Selection>
            <Selection frase="¿Quiénes sois? ¿Qué queréis? ¿Tenéis café? ¿Es gratis?"></Selection>
            <Selection frase="Lo de Melody en Eurovisión… ¿Qué?"></Selection>
            <Selection frase="Pues yo quiero hablar de… "></Selection>
            </div>




        </section>




        <section className="pirata">

            <div className="pirata__esquina">
              <Image src="/media/calavera.png" alt="Calavera" width={500} height={580} className="calavera"></Image>
            </div>

            <div className="pirata__horizontal">
              <Image src="/media/tijeras.png" alt="Tijeras" width={200} height={153} className="tijeras"></Image>
            </div>

            <Image src="/media/WAY.png" alt="WAY" width={200} height={153} className="WAY"></Image>

        </section>




        <Marquee />



        <section className="lavadora">

            <div className="lavadora__esquina">
              <Image src="/media/lavadora.png" alt="lavadora" width={532} height={100} className="lavadora_img"></Image>
            </div>

            <div className="lavadora__horizontal">
              <Image src="/media/rosa.png" alt="rosa" width={200} height={153} className="rosa"></Image>
            </div>

        </section>




        <section className="camisetas__master">

          
            <div className="camisetas__text">
                <p>Ah, por cierto. Aquí <span className="txt_red">somos de pensar en todo.</span><br></br>
                Por eso, también hemos pensado que igual no hemos dado en el clavo con la talla de la camiseta.<br></br>
                Eso sí. También somos de dejar contento a todos los nuestros.</p><br></br>

                <p>Así que, si no te queda como un pincel, puedes <span className="txt_red">pedirnos que te enviemos otra camiseta.</span><br></br>
                De tu talla, digo.</p>
            </div>


            <Image src="/media/camiseta.png" alt="camiseta" width={1100} height={1022} className="camiseta"></Image>

            <h1>ELIGE LA TALLA QUE NECESITAS</h1>

            <SizeSelector></SizeSelector>

        </section>

        <footer>
          <Footer></Footer>
        </footer>
        

      </main>



    );
  }
  