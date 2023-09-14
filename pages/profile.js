import Image from 'next/image';
import Script from 'next/script';

const Profile = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={200} // Desired size with correct aspect ratio
    width={200} // Desired size with correct aspect ratio
    alt="Lali Bibilashvili"
  />
);
