import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">Glob Hakkında</Title>
          <p className="my-5 flex flex-col items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ipsum mattis, accumsan nulla non, tempor turpis. Morbi euismod eget augue in dictum. Proin imperdiet quam eget diam pretium vulputate. Aenean non quam lectus. Etiam elementum neque id rhoncus ultricies. Duis eros justo, accumsan sed lectus non, auctor rhoncus metus. Curabitur et mauris sit amet urna semper tempor et ut enim. Donec finibus nisi eu rutrum volutpat.
          </p>
          <button className="btn-primary">Daha Fazlası...</button>
        </div>
      </div>
    </div>
  );
};

export default About;