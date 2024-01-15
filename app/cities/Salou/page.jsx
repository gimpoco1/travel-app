"use client";
import hotelsData from "@/data/accomodations.json";
import CityCard from "@/components/CityCard";
import Image from "next/image";
import Slider from "react-slick";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TripButton from "@/components/AddToTrip";
import { useState } from "react";

const SalouPage = () => {
	const [isMapModalOpen, setIsMapModalOpen] = useState(false);

	// Slider Settings
	const settings = {
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

  const closeMapModal = () => {
		setIsMapModalOpen(false);
	};
	const toggleMapModal = () => {
		setIsMapModalOpen((prevState) => !prevState);
	};

	return (
		<section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
			{isMapModalOpen && <Map closeModal={closeMapModal} />}
			<div className="flex flex-col items-center justify-center min-h-screen py-8">
				<div
					className="rounded-full bg-red-500 p-4 mb-10 cursor-pointer "
					onClick={toggleMapModal}
				>
					<Image src="/folded-map.svg" alt="map" width={28} height={28} />
				</div>
				<h1 className="bold-52 lg:bold-88">Salou, Tarragona</h1>
				<p className="regular-16 mt-6 mb-10 text-gray-30 xl:max-w-[700px] text-center">
					This coastal town was a notable commercial port during medieval and
					modern ages. Throughout the 20th century, Salou became an important
					European tourist attraction. Aside from its string of beaches
					interrupted by rocky coves, and its landscaped promenade, one of its
					main attractions is the PortAventura World resort. The Dutch movie
					Costa! and the television series with the same title were both filmed
					in Salou.
				</p>
				{/* CityCard Section */}
				<div className="flex h-[640px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[640px] xl:h-[640px] ">
					<CityCard backgroundImage="bg-bg-img-3" />
				</div>

				{/* Hotels Section */}
				<h1 className="text-4xl font-bold mb-8 mt-20 ">
					Accommodations in Salou
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{hotelsData
						.filter((hotel) => hotel.location === "SALOU")
						.map((hotel) => (
							<div
								key={hotel.id}
								className="w-full max-w-md p-6 border rounded-md shadow-md bg-white"
							>
								{/* Image Slider */}
								<Slider {...settings} className="mb-4">
									{hotel.photos.split(", ").map((photo, index) => (
										<div key={index} className="cursor-pointer">
											<div style={{ height: "200px" }}>
												{" "}
												<Image
													src={photo}
													width={500}
													height={200}
													alt={hotel.name}
													className="rounded-t-md"
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

				<Toaster />
			</div>
		</section>
	);
};

export default SalouPage;
