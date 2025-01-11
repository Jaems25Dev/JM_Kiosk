import Image from 'next/image';
import Link from 'next/link';
import mainPage_tablet from '@public/mainPage_tablet.jpeg';

export default function Home() {
  return (
    <picture className="relative h-screen w-secreen max-w-[2560px] flex justify-center items-center">
      <source media="(min-width: 768px)" srcSet="mainPage_tablet.jpeg" />
      <source media="(min-width: 360px)" srcSet="mainPage_mobile.jpg" />

      <Image alt="Main Image" src={mainPage_tablet} priority fill />

      <Link
        href="/product"
        className="absolute bottom-[15%] px-[3rem] py-[1.5rem] bg-blue-500 text-white text-[2rem] rounded-full hover:bg-blue-600">
        주문 하기
      </Link>
    </picture>
  );
}
