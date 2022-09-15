import { ShieldCheckIcon, StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

interface Props {
  host: Host;
}

type Host = {
  name: string;
  image: string;
};

const AppHostedBy = ({ host: { image, name } }: Props) => {
  return (
    <section className="w-5/6 mx-auto  py-4 lg:py-8 border-b border-gray-200">
      <div className="w-full lg:w-1/2 md:w-2/3 flex flex-col">
        <div className="flex items-center flex-row-reverse lg:flex-row">
          <div className="relative h-16 w-16  rounded-full overflow-hidden mr-4 mx-auto">
            <Image src={image} layout="fill" objectFit="cover" className="rounded-full" />
          </div>
          <div className="flex-grow flex flex-col justify-start">
            <p className="text-lg font-medium lg:text-xl tracking-wider">
              Hosted by {name}
            </p>
            <p className="font-light">Joined in January 2016</p>
          </div>
        </div>
        <div className="flex flex-wrap py-4 space-y-2 items-center">
          <div className="w-full md:w-1/2 flex items-center">
            <StarIcon className=" h-6 mr-2" />

            <div className="flex flex-col">
              <p className="">425 Reviews</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <ShieldCheckIcon className="h-6 mr-2" />
            <div className="flex flex-col">
              <p className="">Verified Host</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="relative h-5  w-6 ">
              <Image
                src="/assets/features-icons/airbnbSupporter.svg"
                alt="Workspace"
                layout="fill"
              />
            </div>
            <p className="font-light pl-2">Airbnb.Org.Supporter</p>
          </div>
        </div>
        <div className="space-y-2 flex flex-col my-4">
          <p className="font-medium">During your stay</p>
          <p className="font-light ">i am a call or text away.</p>
          <p className="font-light ">Response rate: 99%</p>
          <p className="font-light ">Response time: within an hour</p>
        </div>
        <div className=" my-4">
          <div className="p-3 rounded-lg border-gray-500 border w-full sm:w-1/2 flex items-center justify-center hover:bg-gray-200 transition duration-150 ease-in-out  cursor-pointer">
            Contact Host
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full  flex justify-between flex-row-reverse md:flex-row">
            <div className="relative h-5  w-6  ">
              <Image
                src="/assets/features-icons/airbnbsafe.svg"
                alt="Workspace"
                layout="fill"
              />
            </div>
            <p className="font-light w-3/4 text-xs lg:flex-grow">
              To protect your payment, never transfer money or communicate outside of the
              Airbnb website or app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHostedBy;
