import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CustomButton } from '.';

function Navbar() {
  return (
    <header className="w-full z-10 absolute">
      <nav className="max-w-[1440px] flex justify-between items-center mx-auto py-4 sm:px-16 px-6">
        <Link href={'/'} className="flex justify-center items-center">
          <Image
            src={'/logo.svg'}
            alt="carLogo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType={'button'}
          containerStyles="rounded-full text-primary-blue bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}

export default Navbar;
