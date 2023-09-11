'use client';

import Image from 'next/image';
import { CustomButton } from './';

function Hero() {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 py-36 padding-x">
        <h1 className="hero__title">
          Find , Book , Rent A Car — Quickly And Easily!
        </h1>
        <p className=" capitalize hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={'/hero.png'}
            alt="heroImage"
            className="object-contain"
            fill
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default Hero;
