'use client'
import Image from "next/image";
import  CityCard  from "./CityCard";
import { useRouter } from "next/navigation";

const City = () => {
  const router = useRouter()
 
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <h2 className="bold-40 lg:bold-60 m-10">Most Visited Destinations</h2>
      <div className="hide-scrollbar flex h-[640px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[640px] xl:h-[640px] cursor-pointer">
      <CityCard 
          backgroundImage="bg-bg-img-9"
          title="Barcelona"
          subtitle="Catalunia, Spain"
          peopleJoined="50+ Recommended"
          onClick={() => {
            router.push('/cities/Barcelona')
          }}
          isMainPage
        />
      <CityCard 
          backgroundImage="bg-bg-img-3"
          title="Salou"
          subtitle="Tarragona, Spain"
          peopleJoined="50+ Recommended"
          onClick={() => {
            router.push('/cities/Salou')
          }}
          isMainPage
        />
        <CityCard 
          backgroundImage="bg-bg-img-4"
          title="Santander"
          subtitle="Cantabria, Spain"
          peopleJoined="70+ Recommended"
          onClick={() => {
            router.push('/cities/Santander')
          }}
          isMainPage
        />
        <CityCard 
          backgroundImage="bg-bg-img-5"
          title="Zaragoza"
          subtitle="Aragon, Spain"
          peopleJoined="100+ Recommended"
          onClick={() => {
            router.push('/cities/Zaragoza')
          }}
          isMainPage
        />
          <CityCard 
          backgroundImage="bg-bg-img-6"
          title="Seville"
          subtitle="Andalusia, Spain"
          peopleJoined="100+ Recommended"
          className="text-black"
          onClick={() => {
            router.push('/cities/Seville')
          }}
          isMainPage
        />
           <CityCard 
          backgroundImage="bg-bg-img-7"
          title="Benidorm"
          subtitle="Alicante, Spain"
          peopleJoined="100+ Recommended"
          onClick={() => {
            router.push('/cities/Benidorm')
          }}
          isMainPage
        />
      
      </div>

      {/* <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-red-500 p-8 lg:max-w-[400px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div> */}
    </section>
  )
}

export default City