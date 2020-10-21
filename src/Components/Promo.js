import React, { useState, useRef } from 'react';
import './Promo.css';
// import PromoVideo from './PromoVideo.mp4';
import PromoImg from './PromoImg.jpg';

function Promo({ imgUrl }) {
  // const [play, setPlay] = useState(false);
  // const videoRef = useRef(null);

  // const onVideoPress = () => {
  //   if (play) {
  //     videoRef.current.pause();
  //     setPlay(false);
  //   } else {
  //     videoRef.current.play();
  //     setPlay(true);
  //   }
  // };

  return (
    <div className="promo">
      <img src={imgUrl} alt="" className="promo__img" />
      {/* <p>Zima za pasem, wyposaż się na białe szaleństwo</p>
      <video
        ref={videoRef}
        onClick={onVideoPress}
        loop
        src={PromoVideo}></video> */}
    </div>
  );
}

export default Promo;
