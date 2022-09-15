import Image from 'next/image';
import React from 'react';

const THINGS_TO_KNOW = [
  {
    title: 'House rules',
    things: [
      {
        key: 'clock',
        value: 'Check-in: 2:00 pm - 11:00 pm',
      },
      {
        key: 'clock',
        value: 'Check out: 11:00 am',
      },
      {
        key: 'selfcheckin',
        value: 'Self check-in with smart lock',
      },
      {
        key: 'nosmoking',
        value: 'No Smoking',
      },
    ],
  },
  {
    title: 'Health & safety',
    things: [
      {
        key: 'health',
        value: "Airbnb's COVID-19 safety practices apply",
      },
      {
        key: 'warning',
        value: 'No smoke alarm',
      },
    ],
  },
  {
    title: 'Cancellation policy',
    things: [
      {
        value: 'Free cancellation before 2:00 pm on 12 Sep.',
      },
      {
        value:
          'Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.',
      },
    ],
  },
];

const AppThingsToKnow = () => {
  return (
    <div className="w-full lg:w-5/6 mx-auto my-4">
      <div className="text-lg lg:text-xl font-medium my-3">Things To Know</div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {THINGS_TO_KNOW.map(({ title, things }, index) => (
          <div
            key={title}
            className={`${
              index !== 0 && 'border-t border-gray-200 lg:border-none'
            } py-2 md:py-4`}
          >
            <span className="inline-block mb-4 text-lg font-medium">{title}</span>
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-y-3 xl:gap-y-4">
              {things.map((data) => (
                <li key={data.value} className=" text-gray-500 hover:text-gray-400 ">
                  <div className="flex">
                    {data.key && (
                      <div className="relative h-5  w-6 lg:mr-4 ">
                        <Image
                          src={`/assets/features-icons/${data.key}.svg`}
                          alt="Workspace"
                          layout="fill"
                        />
                      </div>
                    )}
                    <p className="text-sm">{data.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium underline cursor-pointer my-4">Know more</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppThingsToKnow;
