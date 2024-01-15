"use client";
import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

interface TripButtonProps {
	hotelId: string;
	hotelName: string;
}

const TripButton: React.FC<TripButtonProps> = ({ hotelId, hotelName }) => {
	const [addedHotels, setAddedHotels] = useState<Record<string, boolean>>(
		() => {
			if (typeof window !== "undefined") {
				const savedHotels = localStorage.getItem("addedHotels");
				return savedHotels ? JSON.parse(savedHotels) : {};
			}
			return {};
		}
	);

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("addedHotels", JSON.stringify(addedHotels));
		}
	}, [addedHotels]);

	const handleTripAction = () => {
		const newAddedHotels = { ...addedHotels };
		if (newAddedHotels[hotelId]) {
			delete newAddedHotels[hotelId];
			toast.error(`Removed from trip`);
		} else {
			newAddedHotels[hotelId] = true;
			toast.success(`${hotelName} added to trip!`);
		}
		setAddedHotels(newAddedHotels);
	};

	return (
		<div>
			<button
				onClick={handleTripAction}
				className="w-full mt-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-white hover:text-red-500 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
			>
				{addedHotels[hotelId] ? "Remove from Trip" : "Add to Trip"}
			</button>
			<Toaster />
		</div>
	);
};

export default TripButton;
