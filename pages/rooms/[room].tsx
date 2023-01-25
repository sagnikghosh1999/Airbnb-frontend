import AppCounter from '@/components/atoms/AppCounter';
import AppDateRange from '@/components/atoms/AppDateRange';
import AppFooter from '@/components/atoms/AppFooter';
import AppHead from '@/components/atoms/AppHead';
import AppHostedBy from '@/components/atoms/AppHostedBy';
import AppImageGallery from '@/components/atoms/AppImageGallery';
import AppMap from '@/components/atoms/AppMap';
import AppSearchOptionButton from '@/components/atoms/AppSearchOptionButton';
import AppSearchOptionWrapper from '@/components/atoms/AppSearchOptionWrapper';
import AppThingsToKnow from '@/components/atoms/AppThingsToKnow';
import AppListingDescription from '@/components/molecules/AppListingDescription';
import AppHeader from '@/components/organisms/AppHeader';
import AppImageGalleryMobile from '@/components/organisms/AppImageGalleryMobile';
import { sanityClient } from '../../sanity';

import { HomeIcon, StarIcon } from '@heroicons/react/solid';
import { DATA_ACTION_TYPES } from 'context/actionTypes';
import { useDataContext } from 'hooks/useDataContext';

import Image from 'next/image';

import React, { useState } from 'react';
import { Marker } from 'react-map-gl';
import { formatCheckDate, formatGuests, formatRangeDate } from 'utils';
import { Data } from 'typings';

interface Props {
  data: Data;
}

const Room = ({ data }: Props) => {
  const [dateOpen, setDateOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [{ checkIn, checkOut, guests }, dispatch] = useDataContext();
  const resetDate = () => {
    dispatch({
      type: DATA_ACTION_TYPES.RESET_DATES,
    });
  };

  const dateRangeStyle = 'top-0 right-4 w-[850px]';
  return (
    <div className="flex flex-col min-h-screen">
      <AppHead title={`Airbnb-${data.title}`} />
      <div className="">
        <AppHeader searchPage query={''} />
      </div>
      <main className=" mt-[86px] flex-grow w-full md:mx-6  lg:max-w-7xl  lg:mx-auto">
        <div className="flex flex-col-reverse sm:flex-col">
          {/* top--header */}
          <div className="flex pt-10 flex-col px-6">
            <div className="flex-grow my-2">
              <h1 className="flex-start text-3xl font-medium">{data.title}</h1>
            </div>
            <div className="py-2">
              <div className="flex  space-x-2 font-semibold">
                <StarIcon className="h-6" />
                <span className="text-xs xs:text-sm">{data.ratings} ·</span>
                <span className="underline text-xs xs:text-sm">
                  {data.numOfReviews} Revievs
                </span>
                <p></p>
                {' . '}
                <span className="underline text-xs xs:text-sm">{data.location}</span>
              </div>
              <div></div>
            </div>
          </div>
          <div className="">
            <div className="pb-10 hidden sm:block">
              <AppImageGallery images={data.images} />
            </div>
            <div className=" block sm:hidden">
              <AppImageGalleryMobile images={data.images} />
            </div>
          </div>
        </div>
        {/* description */}
        <div className="flex px-6 lg:p-0 flex-col sm:flex-row border-b border-gray-200">
          <div className="flex-grow w-full sm:w-2/3">
            <AppListingDescription data={data} />
          </div>
          <div className="w-1/3  hidden sm:inline-flex">
            <div className="sticky top-4 right-8 w-full mb-10">
              <div className="sticky top-28  flex flex-col p-2 w-full border border-gray-300 rounded-3xl shadow-lg h-auto">
                <div className="flex justify-between w-full mx-auto py-3 flex-col lg:flex-row space-y-2 items-center">
                  <p className="mx-auto">
                    ₹<span className="font-medium text-xl mx-auto">{data.price}</span>{' '}
                    night
                  </p>
                  <span className="flex items-center mx-auto">
                    {' '}
                    <StarIcon className="h-4 lg:h-6" />
                    <span className="text-base  ">
                      {data.ratings} · {data.numOfReviews} ratings
                    </span>
                  </span>
                </div>
                <div className="relative flex justify-between w-5/6 mx-auto my-3 px-2 py-1  border border-gray-500 rounded-lg flex-col lg:flex-row ">
                  <>
                    {/* check in */}
                    <AppSearchOptionButton
                      title="Check in"
                      placeholder="Add dates"
                      value={formatCheckDate(checkIn)}
                      active={dateOpen}
                      onBlur={() => {
                        setDateOpen((prev) => !prev);
                      }}
                      onClear={resetDate}
                      onFocus={() => {
                        setDateOpen((prev) => !prev);
                      }}
                    >
                      {/* date picker */}
                      <AppSearchOptionWrapper className={dateRangeStyle}>
                        <AppDateRange />
                      </AppSearchOptionWrapper>
                    </AppSearchOptionButton>
                    <div className="hidden lg:flex h-12 w-[1px] bg-gray-400 " />
                    <div className=" my-2 flex lg:hidden h-[1px] bg-gray-400 " />
                    {/* check out */}
                    <AppSearchOptionButton
                      title="Check out"
                      placeholder="Add dates"
                      value={formatCheckDate(checkOut)}
                      active={dateOpen}
                      onBlur={() => {
                        setDateOpen((prev) => !prev);
                      }}
                      onClear={resetDate}
                      onFocus={() => {
                        setDateOpen((prev) => !prev);
                      }}
                    >
                      {/* date picker */}
                      <AppSearchOptionWrapper className={dateRangeStyle}>
                        <AppDateRange />
                      </AppSearchOptionWrapper>
                    </AppSearchOptionButton>
                  </>
                </div>
                <div className="  relative w-5/6 mx-auto  px-2 py-2  border border-gray-500 rounded-lg">
                  <AppSearchOptionButton
                    relative
                    title="Guests"
                    placeholder="Add guests"
                    active={open}
                    value={formatGuests(guests)}
                    onFocus={() => setOpen((prev) => !prev)}
                    onBlur={() => setOpen((prev) => !prev)}
                    onClear={() => {
                      dispatch({ type: DATA_ACTION_TYPES.RESET_GUESTS });
                    }}
                  >
                    <AppSearchOptionWrapper className="right-0 top-14 w-80">
                      <div>
                        <div className="flex py-4 border-b border-gray-200 border-opacity-70">
                          <div className="flex-grow">
                            <h2 className="font-medium">Adults</h2>
                            <p className="text-sm leading-4 text-gray-300">
                              Ages 13 or above
                            </p>
                          </div>
                          <AppCounter
                            value={guests.adults}
                            maxValue={16}
                            onIncrease={() =>
                              dispatch({ type: DATA_ACTION_TYPES.INCREASE_ADULTS })
                            }
                            onDescrease={() =>
                              dispatch({ type: DATA_ACTION_TYPES.DECREASE_ADULTS })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex py-4 border-b border-gray-200 border-opacity-70">
                          <div className="flex-grow">
                            <h2 className="font-medium">Children</h2>
                            <p className="text-sm leading-4 text-gray-300">Ages 2-12</p>
                          </div>
                          <AppCounter
                            value={guests.children}
                            maxValue={5}
                            onIncrease={() =>
                              dispatch({ type: DATA_ACTION_TYPES.INCREASE_CHILDREN })
                            }
                            onDescrease={() =>
                              dispatch({ type: DATA_ACTION_TYPES.DECREASE_CHILDREN })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex py-4">
                          <div className="flex-grow">
                            <h2 className="font-medium">Infants</h2>
                            <p className="text-sm leading-4 text-gray-300">Under 2</p>
                          </div>
                          <AppCounter
                            value={guests.infants}
                            maxValue={5}
                            onIncrease={() =>
                              dispatch({ type: DATA_ACTION_TYPES.INCREASE_INFANTS })
                            }
                            onDescrease={() =>
                              dispatch({ type: DATA_ACTION_TYPES.DECREASE_INFANTS })
                            }
                          />
                        </div>
                      </div>
                    </AppSearchOptionWrapper>
                  </AppSearchOptionButton>
                </div>
                <div className="w-5/6 mx-auto my-4">
                  <button className="w-full p-auto py-3 rounded-xl shadow-md cursor-pointer bg-primary text-white font-bold ">
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed flex items-center justify-between mx-auto bottom-0 z-50 w-4/5 h-16 bg-white border-t border-gray-200 sm:hidden">
            <div className="flex  flex-col my-auto pl-5 tracking-wide">
              <p>
                ₹<span className="font-bold text-lg">{data.price}</span> night
              </p>
              <p>
                <span className="underline text-xs">
                  {formatRangeDate(checkIn, checkOut)}
                </span>
                {!checkIn && (
                  <span className="flex items-center ">
                    {' '}
                    <StarIcon className="h-6" />
                    <span className="text-xs  ">
                      {data.ratings} · {data.numOfReviews} ratings
                    </span>
                  </span>
                )}
              </p>
            </div>
            <div className="">
              <button className="py-2 px-5 rounded-lg shadow-md cursor-pointer bg-primary text-white font-bold ">
                Reserve
              </button>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="lg:py-10 p-6 w-full  mx-auto h-[33rem] lg:h-[50rem]  border-b border-gray-200">
          <div className="py-5 text-2xl font-medium">Where you’ll be</div>
          <div className="py-3 w-full mx-auto h-[25rem] lg:h-[40rem]">
            <AppMap
              center={{ latitude: data.latitude, longitude: data.longitude }}
              zoom={14}
              mapUrl={'mapbox://styles/mapbox/streets-v11'}
            >
              <Marker
                key={data.latitude}
                latitude={data.latitude}
                longitude={data.longitude}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <div className="relative">
                  <button className=" font-bold duration-300 bg-white rounded-full shadow-md cursor-pointer focus:scale-90 peer animate-bounce">
                    {
                      <div className="p-3 rounded-full  bg-red-300 bg-opacity-60 ">
                        <div className="p-2 rounded-full  text-white bg-primary  hover:scale-110 duration-200 transition ease-in">
                          <HomeIcon className="h-5" />
                        </div>
                      </div>
                    }
                  </button>
                  <div className="absolute hidden w-48 p-3 text-left bg-white border border-gray-200 rounded-lg cursor-pointer bottom-9 peer-focus:block">
                    <div className="relative w-full h-24 mb-2">
                      <Image
                        src={data.images[0]}
                        alt={'fjhfjhgfv'}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        placeholder="blur"
                        blurDataURL={data.images[0]}
                      />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold">{data.title}</h2>
                    </div>
                  </div>
                </div>
              </Marker>
            </AppMap>
          </div>
        </div>
        {/* location */}
        <div className="w-5/6 mx-auto border-b border-gray-200 pb-4 lg:pb-6">
          <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col mx-auto lg:mx-0 my-4 lg:my-6 space-y-4 lg:space-y-4 ">
            <p className="text-lg lg:text-xl underline font-medium">{data.location}</p>
            <div className="tracking-wide lg:text-lg space-y-2 ">
              <p className="line-clamp-3">{data.placesOfInterest}</p>
              <span className=" text-lg lg:text-xl font-medium underline cursor-pointer">
                {' '}
                Getting around
              </span>
              <p className="line-clamp-3">{data.gettingAround}</p>
            </div>
          </div>
        </div>
        {/* hostedby */}
        <AppHostedBy host={data.host} />
      </main>
      <section className="w-5/6 mx-auto">
        <AppThingsToKnow />
      </section>
      <AppFooter />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'room' && _id==$room][0]{
    _id,
    title,
    host->{
    name,
    image,
  },
  images,
  description,
  latitude,
  longitude,
  bed,
  bedroom,
  bathroom,
  capacity,
  placesOfInterest,
  gettingAround,
  ratings,
  numOfReviews,
  location,
  price
  }`;

  const data = await sanityClient.fetch(query, { room: params?.room });

  return {
    props: {
      data,
    },
  };
};

export default Room;
