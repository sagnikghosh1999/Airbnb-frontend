import Image from 'next/image';

interface Props {
  src: string;
  priority: boolean;
}
const AppImagesMobile = ({ src, priority }: Props) => {
  return (
    <div className="relative h-60 w-full  snap-start  shrink-0">
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        className="w-full  "
        priority={priority}
      />
    </div>
  );
};

export default AppImagesMobile;
