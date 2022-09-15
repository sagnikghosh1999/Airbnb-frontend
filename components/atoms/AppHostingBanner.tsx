import Image from 'next/image';
import Link from 'next/link';

const AppBanner = () => {
  return (
    <section className="my-12 mb-20">
      <div className="container relative">
        <Link href="/">
          <a className="relative block">
            <div className="hidden md:block h-[400px] lg:h-[400px] object-cover rounded-3xl">
              <Image
                src="/assets/host.jpg"
                alt="banner"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                placeholder="blur"
                quality={50}
                blurDataURL="/assets/host.jpg"
              />
            </div>
            <div className="block md:hidden h-[700px] w-full object-cover rounded-3xl">
              <Image
                src="/assets/host-sm.jpg"
                alt="banner"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                placeholder="blur"
                quality={50}
                blurDataURL="/assets/host.jpg"
              />
            </div>

            <div className="absolute z-10 left-0 top-0 w-full h-1/2 md:w-1/2 md:h-full space-y-4 lg:space-y-8 pt-16  lg:pt-24 px-16">
              <h2 className="text-white text-2xl font-semibold lg:font-bold lg:text-3xl leading-5 tracking-wider">
                Try hosting
              </h2>
              <p className="text-white text-lg lg:text-xl font-medium">
                Earn extra income and unlock new oppurtunities by sharing your space.
              </p>
              <button className="py-4 px-10 rounded-xl bg-white text-black hover:bg-gray-100 cursor-pointer shadow-md text-xl font-medium">
                Learn More
              </button>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default AppBanner;
