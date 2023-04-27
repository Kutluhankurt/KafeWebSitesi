import React from "react";
import Title from "../ui/Title";

const Footer = () => {
    return(
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Bize Ulaşın</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">Adres</span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">Arayın +90 5395867787</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">kutluhankurt@outlook.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">Glob</Title>
            <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl augue, gravida pellentesque sodales vel, finibus at nulla. Quisque ornare nisl quam, at hendrerit nibh bibendum ut. Suspendisse rutrum at nulla vel porttitor.            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full "
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Çalışma Saatleri</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Hergün</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 - 23.00</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2023 Kutluhan Kurt taradından geliştirilmiştir. Tüm hakları saklıdır.
        </p>
      </div>
    </div>
    );
};

export default Footer;