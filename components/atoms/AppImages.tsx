import Image from 'next/image';
import React from 'react';

interface Props {
  mainImage?: boolean;
  src: string;
  priority: boolean;
}
const AppImages = ({ mainImage, src, priority }: Props) => {
  return (
    <>
      <div
        className={`${
          mainImage ? 'relative h-80 w-full' : 'relative h-40 w-[48%]'
        } m-[0.125rem] flex-row cursor-pointer rounded-lg overflow-hidden`}
      >
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority={priority}
        />
        <div className="absolute bg-black w-full h-full opacity-0 transition-opacity duration-500 hover:opacity-20" />
      </div>
    </>
  );
};

export default AppImages;
