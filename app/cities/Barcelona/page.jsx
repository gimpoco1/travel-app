"use client";

import hotelsData from "@/data/accomodations.json";
import CityCard from "@/components/CityCard";
import Image from "next/image";
import Slider from "react-slick";
import { toast, Toaster } from "react-hot-toast";
import TripButton from "@/components/AddToTrip";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Map from "@/components/Map";
import { useState } from "react";

const Barcelona = () => {
	const [isMapModalOpen, setIsMapModalOpen] = useState(false);

	// Slick settings
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
				<h1 className="bold-52 lg:bold-88">Barcelona, Catalunya</h1>
				<p className="regular-16 mt-6 mb-10 text-gray-30 xl:max-w-[700px] text-center">
					A city on the northeastern coast of Spain. It is the capital and
					largest city of the autonomous community of Catalonia, as well as the
					second-most populous municipality of Spain. <br />
					Has a rich cultural heritage and is today an important cultural centre
					and a major tourist destination. Particularly renowned are the
					architectural works of Antoni Gaudí and Lluís Domènech i Montaner,
					which have been designated UNESCO World Heritage Sites.{" "}
				</p>
				{/* CityCard Section */}
				<div className="flex h-[640px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[640px] xl:h-[640px]">
					<CityCard backgroundImage="bg-bg-img-9" />
				</div>

				{/* Hotels Section */}
				<h1 className="text-4xl font-bold mb-8 mt-20">
					Accommodations in Barcelona
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{hotelsData
						.filter((hotel) => hotel.location === "BARCELONA")
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

				{/* Toast Notifications */}
				<Toaster />
			</div>
		</section>
	);
};

export default Barcelona;
