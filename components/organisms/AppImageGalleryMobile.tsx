import AppImagesMobile from '../atoms/AppImagesMobile';

const AppImageGalleryMobile = ({ images }) => {
  return (
    <div className="relative">
      <div className="relative flex w-full overflow-x-scroll snap-x ">
        {images.map((item: string, id: number) => (
          <AppImagesMobile key={item} src={item} priority={id === 0} />
        ))}
      </div>
    </div>
  );
};

export default AppImageGalleryMobile;
