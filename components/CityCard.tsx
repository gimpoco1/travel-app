
import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

interface CityCardProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined?: string;
  onClick: () => void;
  className?: string;
  isMainPage: boolean; // new prop

}

const CityCard = ({ backgroundImage, title, subtitle, peopleJoined, onClick, isMainPage }: CityCardProps) => {
  return (
    <div className={` h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    onClick={onClick}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-10 lg:py-10 ">
     {isMainPage && (
          <div className="flexCenter gap-2 bg-neutral-50 bg-opacity-70 rounded-full p-3 pt-1 pb-1 pr-5">
            <div className="rounded-full bg-red-500 p-4">
              <Image
                src="/folded-map.svg"
                alt="map"
                width={28}
                height={28}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="regular-24 text-slate-900">{title}</h4>
              <p className="regular-18 text-slate-700">{subtitle}</p>
            </div>
          </div>

    
        )}
        <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

export default CityCard;