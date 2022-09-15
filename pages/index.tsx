import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// components
import AppHead from '../components/atoms/AppHead';
import AppHeader from '../components/organisms/AppHeader';
import AppHero from '../components/atoms/AppHero';
import AppSection from '../components/atoms/AppSection';
import AppBanner from '../components/atoms/AppBanner';
import AppFooter from '../components/atoms/AppFooter';
import AppNearby from '../components/atoms/AppNearby';
import AppHostingBanner from '../components/atoms/AppHostingBanner';
// typings
import { IExploreNearby, ILiveAnywhere } from 'typings';
import AppBannerHero from '@/components/atoms/AppBannerHero';
import AppTravel from '@/components/atoms/AppTravel';
import { sanityClient } from '../sanity';

interface IHomeDataProps {
  exploreNearby: IExploreNearby[];
  liveAnywhere: ILiveAnywhere[];
  popularPlaces: any;
}

const Home: FC<IHomeDataProps> = ({ exploreNearby, liveAnywhere, popularPlaces }) => {
  return (
    <>
      <AppHead />
      <AppHeader exploreNearby={exploreNearby} />
      <main>
        {/* hero */}
        <AppHero />
        <div className="max-w-7xl mx-auto mt-10 px-2 lg:p-0">
          {/* explore nearby section */}
          <AppSection
            title="Explore Nearby"
            className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 sm:grid-cols-3 lg:grid-cols-4"
          >
            {exploreNearby.map((data, index) => (
              <AppNearby key={index} data={data} />
            ))}
          </AppSection>
          <AppBannerHero />

          {/* live anywhere section */}
          <AppSection
            title="Live Anywhere"
            className=" grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 lg:grid-cols-4"
          >
            {liveAnywhere.map((data, index) => (
              <Link key={index} href={`/search?location=${data.location}`}>
                <a>
                  <div className="p-2 duration-300 lg:p-3 gap-y-4 hover:scale-105 hover:bg-gray-100 hover:bg-opacity-40 rounded-xl hover:shadow-lg">
                    <div className="relative w-full h-40 mb-2 md:h-60 lg:h-72">
                      <Image
                        src={data.image}
                        alt={data.title}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={data.image}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium leading-5 text-gray-500 text-md md:text-xl">
                        {data.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </AppSection>
          {/* hosting */}
          <AppHostingBanner />
          {/* popular places */}
          <AppSection
            title="Popular Places"
            className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 sm:grid-cols-3 lg:grid-cols-4"
          >
            {popularPlaces.map((data, index) => (
              <AppTravel key={index} data={data.place} />
            ))}
          </AppSection>

          {/* bottom banner */}
          <AppBanner />
        </div>
      </main>
      {/* footer */}
      <AppFooter />
    </>
  );
};

export const getStaticProps = async () => {
  // const exploreNearby = [
  //   {
  //     image:
  //       'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     location: 'London',
  //     description: '  Vibrant, multicultural and cosmopolitan City',
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/1663376/pexels-photo-1663376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     location: 'Norway',
  //     description: 'Northern Lights over the Norwegian fjords',
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     location: 'New York city',
  //     description: 'City of diversity and dynamism',
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     location: 'Paris',
  //     description: 'City of Lights, Fashion & Love',
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     location: 'Rome',
  //     description: 'A sprawling metropolis of Classical architecture',
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/442579/pexels-photo-442579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     location: 'Dubai',
  //     description: 'Luxury shopping, modern architecture',
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     location: 'Agra',
  //     description: 'One of the wonders of the world',
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/161275/santorini-travel-holidays-vacation-161275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     location: 'Greece',
  //     description: 'Ancient history and magnificent temples',
  //   },
  // ];

  const query = `*[_type == 'explore']{
    _id,
    location,
    description,
    image
  }`;
  const exploreNearby = await sanityClient.fetch(query);
  const query2 = `*[_type=="liveAnywhere"]{
    _id,
    image,
    title,
    location
  }`;

  const liveAnywhere = await sanityClient.fetch(query2);

  const query1 = `*[_type == 'popular']{
    _id,
  place ->{
    _id,
    title,
    images[0],
    location,
    price,
    ratings
  }
}`;

  const popularPlaces = await sanityClient.fetch(query1);

  if (!exploreNearby) {
    return { notFound: true };
  }

  return {
    props: {
      exploreNearby,
      liveAnywhere,
      popularPlaces,
    },
  };
};

export default Home;
