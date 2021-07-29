import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Slider({ photos }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = photos.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, photos]);

  return (
    <section className="section">
      <div className="section-center">
        {photos.map((image, personIndex) => {
          const {
            urls: { regular },
            user: { name },
          } = image;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === photos.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={name}>
              <img src={regular} alt={name} className="person-img" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Slider;
