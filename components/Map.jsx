import React, { useEffect } from "react";
import { useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
const Map = () => {
	const mapRef = useRef(null);

	useEffect(() => {
		const initMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
				version: "weekly",
			});
			const { Map } = await loader.importLibrary("maps");
			const { Marker } = await loader.importLibrary("marker");
			const position = { lat: 41.3851, lng: 2.1734 };
			const mapOptions = {
				center: position,
				zoom: 8,
			};
			const map = new Map(mapRef.current, mapOptions);

			const marker = new Marker({
				map: map,
				position: position,
			});
		};
		initMap();
	}, []);

	// setup map
	return <div className=" h-[600px] rounded-5xl" ref={mapRef} />;
};

export default Map;
