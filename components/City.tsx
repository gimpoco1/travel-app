'use client'
import Image from "next/image";
import  CityCard  from "./CityCard";
import { useRouter } from "next/navigation";

const City = () => {
  const router = useRouter()
 
  return (
    <section className="max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
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

     
    </section>
  )
}

export default City