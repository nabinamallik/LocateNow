import MapDetails from "./MapDetails";
import map from "../assets/map.png";
import { FaArrowRight } from "react-icons/fa";

export default function MapHero() {
  return (
    <>
      <div className="h-[290px] overflow-hidden rounded-2xl">
        <img className="w-full h-full object-cover" src={map} alt="map" />
      </div>
      <div className="w-[947px] bg-[#282828] text-white py-5 px-3 rounded-full flex items-center justify-between mx-auto -translate-y-16">
        <div className="flex items-center justify-evenly w-full">
          <MapDetails
            main="Find Out Your Current Location"
            text="Where are you now?"
          />
          <div className="bg-white h-[70px] w-[1px]"></div>
          <MapDetails main="Users Tracking" text="4000 Users" />
          <div className="bg-white h-[70px] w-[1px]"></div>
          <MapDetails main="Time Spent" text="00:00:00" />
        </div>
        <div className="bg-[#8E2BE2] p-4 rounded-full cursor-pointer hover:-translate-y-[1px] active:translate-y-[1px] transition-all duration-100 ease">
          <FaArrowRight size={35} />
        </div>
      </div>
    </>
  );
}
