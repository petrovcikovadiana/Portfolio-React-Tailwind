import React from "react";

function CarouselBrand() {
  return (
    <div className="w-full h-24 bg-gradient-to-r from-violetGradient to bg-pinkGradient flex items-center justify-center">
      <div className="flex flex-row gap-10 md:gap-24 items-center">
        <div>
          <h1 className="md:text-3xl text-xl">CloudyLake.io</h1>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/assets/netmate-logo.png"}
          alt="netmate"
          className="md:h-16 h-12"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/svg/hitflora-white-red.svg"}
          alt="hitflora"
          className="md:h-16 h-12"
        />
      </div>
    </div>
  );
}

export default CarouselBrand;
