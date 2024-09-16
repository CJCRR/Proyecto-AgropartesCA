import React, { useEffect, useRef } from 'react';

const CarouselHome = () => {
  const intervalRef = useRef(null);

  useEffect(() => {
    const bannerSwitcher = () => {
      const next = document.querySelector('.sec-1-input:checked')?.nextElementSibling;
      if (next && next.classList.contains('sec-1-input')) {
        next.checked = true;
      } else {
        document.querySelector('.sec-1-input').checked = true;
      }
    };

    const handleControlClick = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(bannerSwitcher, 5000);
    };

    const controls = document.querySelectorAll('nav .controls label');
    controls.forEach((control) => {
      control.addEventListener('click', handleControlClick);
    });

    intervalRef.current = setInterval(bannerSwitcher, 5000);

    return () => {
      clearInterval(intervalRef.current);
      controls.forEach((control) => {
        control.removeEventListener('click', handleControlClick);
      });
    };
  }, []);

  return (
    <div className="content-slider">
            <input type="radio" id="banner1" className="sec-1-input" name="banner" checked/>
            <input type="radio" id="banner2" className="sec-1-input" name="banner"/>
            <input type="radio" id="banner3" className="sec-1-input" name="banner"/>
            <input type="radio" id="banner4" className="sec-1-input" name="banner"/>
            <div className="slider">
                <div id="top-banner-1" className="banner">
                  <div className="banner-inner-wrapper">
                   
                    </div>
                </div>
                <div id="top-banner-2" className="banner">
                    <div className="banner-inner-wrapper">
                    
                    </div>
                </div>
                <div id="top-banner-3" className="banner">
                    <div className="banner-inner-wrapper">
                  
                    </div>
                </div>
                <div id="top-banner-4" className="banner">
                    <div className="banner-inner-wrapper">

                    </div>
                </div>
            </div>
            <nav>
                <div className="controls">
                    <label for="banner1"><span className="progressbar"><span
                                className="progressbar-fill"></span></span><span>01</span> Intro</label>
                    <label for="banner2"><span className="progressbar"><span
                                className="progressbar-fill"></span></span><span>02</span> Envios</label>
                    <label for="banner3"><span className="progressbar"><span
                                className="progressbar-fill"></span></span><span>03</span> Mas</label>
                    <label for="banner4"><span className="progressbar"><span
                                className="progressbar-fill"></span></span><span>04</span> Horarios</label>
                </div>
            </nav>
        </div>
  );
};

export default CarouselHome;
