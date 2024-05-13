import Image from 'next/image';
import { useState } from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

type ImagePopupProps = {
  imageUrl: string;
  onClose?: () => void;
};

const ImagePopup = (props: ImagePopupProps) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <button onClick={props.onClose} className="close-btn">
          关闭
        </button>
        <Image
          src="/assets/images/qrCode.png"
          alt="My Image"
          width={500}
          height={300}
        />
        <div className="image-text">使用微信扫一扫添加好友</div>
      </div>
    </div>
  );
};

const Base = () => {
  const [showPopup, setShowPopup] = useState(false);

  function showQrCode() {
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero handleButtonClick={() => showQrCode()} />
      <VerticalFeatures />
      <Banner handleButtonClick={() => showQrCode()} />
      <Footer />
      {showPopup && (
        <ImagePopup
          imageUrl="https://cdn.gdjgysy.com/file/17034940564021703494056422"
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export { Base };
