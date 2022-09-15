import AppImages from './AppImages';

const AppImageGallery = ({ images }) => {
  return (
    <>
      <div className="flex items-center space-x-1 rounded-lg overflow-hidden">
        <div className="relative h-80 w-1/2 ">
          <AppImages mainImage src={images[0]} priority={true} />
        </div>
        <div className="flex-grow   ">
          <div className="flex flex-wrap ">
            {images.slice(1, 5).map((item) => (
              <AppImages src={item} key={item} priority={false} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppImageGallery;
