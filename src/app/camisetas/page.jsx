'use client';

import Image from "next/image";
import Marquee from "../componentes/marquee";
import Selection from "../componentes/selection";
import SizeSelector from "../componentes/sizeSelector";
import Footer from "../componentes/footer";
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
            alt="Miniatura"
            fill
            style={{ objectFit: 'cover' }}
          />
          <button className="video-play-button">▶</button>
        </div>
      )}

      <video
        ref={videoRef}
        src="/media/VIDEO_CAMISETA_WAY_NUEVOS_CLIENTES_v5.mp4"
        className="video-element"
        controls
        playsInline
      />
    </div>

          <Marquee />
        </section>
  
        <section className="intro__master">

            <div className="intro__text">
                <h1>¿Qué? ¿Has flipado no?</h1>
                <br></br>
                <div className="rayo__master"><p>Otro año que te llega un regalo nuestro y es…</p></div>
                <h2><span className="txt_red">Otra camiseta.</span></h2>
                <br></br>
                <div className="rayo__master"><p>Y con lo que le gustan a nuestro director general, <br></br>ya te puedes hacer la idea de lo que será el año que viene.</p></div>
                <br></br>
                <h2>Pero bueno,</h2>
                <p>queríamos que volvieses a saber de nosotros<br></br>porque el año pasado, bueno… </p>
                <p><span className="txt_red">tonteamos</span> pero, ahí se quedó la cosa.</p>
                <br></br>
                <p>Y en un año pasan muchas cosas.</p>
                <p>Tanto en nuestra agencia como seguro que en tu marca.</p>
                
            </div>

            <div className="intro__line"></div>

            <Image src="/media/mano_01.png" alt="Mano rockera" width={400} height={574} className="mano__rockera"></Image>

            
        </section>



        <section className="selection__master">

            <Image src="/media/fresh.png" alt="Fresh" width={400} height={403} className="fresh"></Image>

            <div className="selection__text">
                <div className="s__title"><p>Así que</p>
                <h1><span className="txt_red">te damos 5<br></br>buenas razones</span></h1>
                <p>para volvernos a ver o vernos por primera vez…</p>
                <p>Así eliges a tu gusto.</p>
                </div>
                <Selection frase="Me ha molado la cami de este año, os merecéis una quedadita va."></Selection>
            <Selection frase="¿Qué es eso que ha pasado en un año? Cuenta, cuenta."></Selection>
            <Selection frase="Pues oye. Qué bueno saber de vosotros porque me venís como anillo al… bueno, como camiseta al cuerpo."></Selection>
            <Selection frase="Menos mal que lo habéis dicho. Llevaba todo el año pensando en llamaros."></Selection>
            <Selection frase="Ninguna razón es válida. Ya os digo yo una buena."></Selection>
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
                <p>También es verdad que</p>
                <h1 style={{ textAlign: 'left' }}><span className="txt_red">hay cosas que no cambian.</span></h1>
                <p>Y equivocarnos en las tallas, seguramente será una.</p><br></br>

                <p>Pero puedes pedir otra.<br></br>
                Que te quede mejor.<br></br>
                <span className="txt_red">Que tú seguro que aciertas.</span><br></br>
                Con la camiseta y con nosotros.</p>
            </div>


            <Image src="/media/camiseta.png" alt="camiseta" width={1100} height={1022} className="camiseta"></Image>

            <h1>ELIGE LA TALLA QUE NECESITAS...</h1>

            <SizeSelector></SizeSelector>

        </section>

        <footer>
          <Footer></Footer>
        </footer>


      </main>



    );
  }
  