import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AppTravel = ({ data }) => {
  return (
    <Link href={`/rooms/${data._id}`}>
      <div className="p-2 duration-300 lg:p-3 gap-y-4 hover:scale-105  hover:bg-opacity-40 rounded-lg hover:shadow-lg shadow">
        <div className="relative w-full h-32 mb-2 md:h-44 lg:h-56">
          <Image
            src={data.images}
            alt={data.title}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={data.images}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="font-medium leading-5 text-gray-500 text-md md:text-lg w-3/4 line-clamp-1">
              {data.title}
            </h3>
            <div className="flex items-center px-2 text-primary">
              <StarIcon className="h-3 mr-1" />
              <span className="text-sm">{data?.ratings}</span>
            </div>
          </div>
          <p className="leading-5 text-gray-500 text-sm md:text-base line-clamp-1">
            {data?.location}
          </p>
          <p className=" leading-5 text-primary text-sm font-light">
            {'₹ ' + data?.price + ' night'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AppTravel;
