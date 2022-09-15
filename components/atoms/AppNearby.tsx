import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IExploreNearby } from 'typings';

interface IAppNearbyProps {
  data: IExploreNearby;
  isSmall?: boolean;
}

const AppNearby: FC<IAppNearbyProps> = ({ data, isSmall }) => {
  return (
    <Link href={`/search?location=${data.location}`}>
      <a>
        <div
          key={data.location}
          className={`${
            isSmall ? 'items-center' : 'flex-col items-start md:items-center'
          } flex  p-2 duration-300 md:flex-row md:p-3 gap-x-4 hover:shadow-lg hover:scale-105 hover:bg-gray-200 hover:bg-opacity-40 rounded-xl shadow-sm`}
        >
          <Image
            src={data.image}
            alt={data.location}
            width={isSmall ? 48 : 64}
            height={isSmall ? 48 : 64}
            placeholder="blur"
            blurDataURL={data.image}
            className="rounded-lg"
            objectFit="cover"
          />
          <div className={`${isSmall || 'mt-2'} md:mt-0 w-3/4`}>
            <h3
              className={`${
                isSmall ? 'text-sm' : 'text-sm lg:text-base'
              } font-medium text-gray-500`}
            >
              {data.location}
            </h3>
            <span
              className={`${isSmall ? 'text-sm' : 'text-sm lg:text-base'} text-gray-300`}
            >
              {data.description}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AppNearby;
