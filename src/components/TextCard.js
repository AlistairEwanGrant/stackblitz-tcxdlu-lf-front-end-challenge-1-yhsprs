import React from 'react';
import './TextCard.css';

const TextCard = () => {
  return (
    <div className="textCard">
          <h1>Vehicles</h1>
          <div className="splitText">
            <div className="horoLine">
              <hr />
            </div>
            <div>
              <p>
                Welcome to Prestige, a beacon of luxury and dynamism in the
                automotive world. As the authorised Porsche dealers, we are
                proud to uphold a 25-year legacy of guiding discerning
                enthusiasts to the pinnacle of German engineering.
              </p>
              <p>
                At Prestige Porsche, we don't just sell cards; we deliver the
                Porsche promise of exhilarating driving pleasure, underpinned by
                a heritage of trust and an unwavering dedication to excellence.
              </p>
            </div>
          </div>
        </div>
  );
}

export default TextCard