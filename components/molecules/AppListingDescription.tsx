import Image from 'next/image';
import React from 'react';
import { format } from 'date-fns';
import AppDateRange from '../atoms/AppDateRange';
import { useDataContext } from 'hooks/useDataContext';
import { formatGuests, formatRangeDate } from 'utils';
import { DATA_ACTION_TYPES } from 'context/actionTypes';

const AppListingDescription = ({ data }) => {
  const [{ checkIn, checkOut, guests }, dispatch] = useDataContext();
  return (
    <div className=" flex flex-col w-full overflow-hidden">
      {/* header--desc */}
      <div className="flex   pb-5 border-gray-200 border-b md:mr-10">
        <div className="flex flex-col flex-grow max-w-[75%]">
          <p className="flex-start text-lg md:text-2xl font-medium ">{data.title}</p>
          <p className="flex-start text-base font-normal">
            {formatGuests(guests) || data.capacity + ' guests'} · {data.bedroom} bedroom ·{' '}
            {data.bed} bed · {data.bathroom} private bathroom
          </p>
        </div>
        <div className="relative h-16 w-16 rounded-full overflow-hidden md:mr-14 mx-auto">
          <Image
            src={data.host.image}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      {/* specs */}
      <div className="pb-5 border-b border-gray-200 md:mr-10">
        <div className="flex space-x-4 py-3 lg:pt-8 lg:pb-6">
          <div className="relative h-8 w-8 mr-2 ">
            <Image
              src="/assets/features-icons/workspace.svg"
              alt="Workspace"
              layout="fill"
            />
          </div>
          <div className="flex flex-col border-l px-5 border-gray-200">
            <p className="font-medium">Dedicated workspace</p>
            <p>A private room with wifi that’s well suited for working.</p>
          </div>
        </div>
        <div className="flex space-x-4 py-3 lg:pt-8 lg:pb-6">
          <div className="relative h-8 sm:w-8 mr-2 w-6">
            <Image
              src="/assets/features-icons/selfcheckin.svg"
              alt="Workspace"
              layout="fill"
            />
          </div>
          <div className="flex flex-col border-l px-5 border-gray-200">
            <p className="font-medium">Self check-in</p>
            <p>Check yourself in with the smartlock.</p>
          </div>
        </div>
        <div className="flex space-x-4 py-3 lg:pt-8 lg:pb-6">
          <div className="relative h-8 sm:w-8 mr-2 w-6 ">
            <Image
              src="/assets/features-icons/calender.svg"
              alt="Workspace"
              layout="fill"
            />
          </div>
          <div className="flex flex-col border-l px-5 border-gray-200">
            <p className="font-medium">
              Free cancellation before{' '}
              {format(new Date().setDate(new Date().getDate() + 5), 'dd-MMMM')}
            </p>
          </div>
        </div>
      </div>
      {/* aircover */}
      <div className="flex flex-col py-3 sm:py-6 items-start md:mr-10 border-b border-gray-200">
        <div className="relative h-10 md:w-1/6 w-1/4 ">
          <Image src="/assets/aircover.png" layout="fill" objectFit="contain" />
        </div>
        <div className="py-2 sm:py-6">
          <p>
            Every booking includes free protection from Host cancellations, listing
            inaccuracies, and other issues like trouble checking in.
          </p>
        </div>
        <p className="underline font-medium cursor-pointer">Learn more</p>
      </div>
      {/* description */}
      <div className="pb-5 border-b border-gray-200 md:mr-10">
        <div className="py-4 sm:py-8">
          <p className="line-clamp-4">{data.description}</p>
        </div>
        <p className="underline font-medium cursor-pointer">Learn more</p>
      </div>

      {/* amenities */}
      <div className="flex flex-col  py-3 sm:py-6 border-b border-gray-200  md:mr-10">
        <p className="text-2xl font-medium pb-5">What this place offers</p>
        <div className="flex flex-col sm:flex-wrap sm:flex-row w-full py-4">
          <div className="flex space-x-4 items-center py-2 sm:w-1/2">
            <div className="relative h-8 w-8 ">
              <Image
                src="/assets/features-icons/tv.svg"
                alt="tv"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-lg">TV</p>
          </div>
          <div className="flex space-x-4 items-center py-2 sm:w-1/2">
            <div className="relative h-8 w-8 ">
              <Image
                src="/assets/features-icons/wifi.svg"
                alt="wifi"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-lg">Wifi</p>
          </div>
          <div className="flex space-x-4 items-center py-2 sm:w-1/2">
            <div className="relative h-8 w-8 ">
              <Image
                src="/assets/features-icons/carParking.svg"
                alt="car"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-lg">Free on-street parking</p>
          </div>
          <div className="flex space-x-4 items-center py-2 sm:w-1/2">
            <div className="relative h-8 w-8 ">
              <Image
                src="/assets/features-icons/lift.svg"
                alt="Lift"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-lg">Lift</p>
          </div>
          <div className="flex space-x-4 items-center py-2 sm:w-1/2">
            <div className="relative h-8 w-8 ">
              <Image
                src="/assets/features-icons/frost.svg"
                alt="tv"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-lg">Air conditioning</p>
          </div>
          <div className="flex space-x-4 items-center py-2 sm:w-1/2">
            <div className="relative h-8 w-8 ">
              <Image
                src="/assets/features-icons/calender.svg"
                alt="calender"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-lg">Long term stays allowed</p>
          </div>
        </div>

        <div className="p-3 rounded-lg border-gray-500 border w-full sm:w-1/2 flex items-center justify-center hover:bg-gray-200 transition duration-150 ease-in-out mb-4">
          Show All 17 amenities
        </div>
      </div>

      {/* calender */}
      <div className="flex flex-col relative py-6  md:mr-10  lg:h-[37rem]">
        <div className="text-2xl font-medium py-2">Select check-in date</div>
        <p>
          {formatRangeDate(checkIn, checkOut) ||
            'Add your travel dates for exact pricing'}{' '}
        </p>
        <div className=" absolute left-0 top-20 w-[800px] hidden lg:block ">
          <AppDateRange />
        </div>
        <div className=" w-full mx-auto  lg:hidden overflow-x-scroll">
          <AppDateRange months={1} />
        </div>
        {checkIn && (
          <div
            className="underline font-medium cursor-pointer absolute bottom-0 md:bottom-4 right-4 md:right-10  px-3 py-2 rounded-full hover:bg-gray-200 transition duration-150 ease-in"
            onClick={() => {
              dispatch({
                type: DATA_ACTION_TYPES.RESET_DATES,
              });
            }}
          >
            Clear Dates
          </div>
        )}
      </div>
    </div>
  );
};

export default AppListingDescription;
