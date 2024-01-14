'use client'
import hotelsData from "@/data/accomodations.json";
import CityCard from "@/components/CityCard";
import Image from "next/image";
import Slider from "react-slick";
import { toast, Toaster } from 'react-hot-toast';
import TripButton from "@/components/AddToTrip";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ZaragozaPage = () => {
  // Slick settings 
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section  className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">

    <div className="flex flex-col items-center justify-center min-h-screen py-8">
    <div className="rounded-full bg-red-500 p-4 mb-10">
              <Image
                src="/folded-map.svg"
                alt="map"
                width={28}
                height={28}
              />
            </div>
      			<h1 className="text-5xl font-semibold mb-20">Explore Zaragoza</h1>
{/* CityCard Section */}
      <div className="flex h-[640px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[640px] xl:h-[640px]">
        <CityCard backgroundImage="bg-bg-img-5" />
      </div>

      {/* Hotels Section */}
      <h1 className="text-4xl font-bold mb-8 mt-10">Accommodations in Zaragoza</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotelsData
          .filter((hotel) => hotel.location === "ZARAGOZA")
          .map((hotel) => (
            <div key={hotel.id} className="w-full max-w-md p-6 border rounded-md shadow-md bg-white">
              {/* Image Slider */}
              <Slider {...settings} className="mb-4">
                {hotel.photos.split(', ').map((photo, index) => (
                  <div key={index} className="cursor-pointer">
                    <div style={{ height: "200px" }}>
											{" "}
											<Image
												src={photo}
												width={500}
												height={200}
												alt={hotel.name}
												className="rounded-lg"
											/>
										</div>
                  </div>
                ))}
              </Slider>

              {/* Hotel Details */}
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
                <p className="text-gray-600 mb-2">{hotel.address}</p>
                
                {/* Add to Trip Button */}
                <TripButton hotelId={hotel.id} hotelName={hotel.name} />

              </div>
            </div>
          ))}
      </div>

      {/* Toast Notifications */}
      <Toaster />
    </div>
    </section>
  );
};

export default ZaragozaPage;
