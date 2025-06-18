'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
     

      <div className="footer__content">
        <div className="footer__social">
          <a href="https://www.instagram.com/estoesway/" target="_blank" rel="noopener noreferrer">
            <Image src="/media/insta.png" alt="Instagram" width={40} height={40} />
          </a>
          <a href="https://www.linkedin.com/company/10567883/admin/" target="_blank" rel="noopener noreferrer">
            <Image src="/media/linkedin.png" alt="LinkedIn" width={40} height={40} />
          </a>
        </div>

        <div className="footer__text">
          <p>
            Y si quieres pasarte por la agencia,<br />
            estamos en Valencia, en la calle<br />
            Papa Alejandro VI, nº 7 bajo
          </p>
          <p>
            <a href="mailto:INFO@AGENCIAWAY.ES" className="footer__email">
              INFO@AGENCIAWAY.ES
            </a>
          </p>
          <p className="footer__legal">
            <a href="https://estonoesunregalo.agenciaway.es/politica-de-cookies/" target="_blank" rel="noopener noreferrer">LAS COOKIES</a> /
            <a href="https://estonoesunregalo.agenciaway.es/aviso-legal/" target="_blank" rel="noopener noreferrer"> AVISO LEGAL</a> /
            <a href="https://estonoesunregalo.agenciaway.es/politica-de-privacidad/" target="_blank" rel="noopener noreferrer"> PRIVACIDAD</a>
            &nbsp; @2025 WAY
          </p>
          
        </div>
        
      </div>
      <a className="foo" href="https://www.ermo.es">Ermo Estudio</a>
    </footer>
  );
}
