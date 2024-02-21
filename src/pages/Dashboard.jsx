import MapHero from "../components/MapHero";
import { Link } from "react-router-dom";
import RecentLocationComponent from "../components/RecentLocationComponent";
import NewsLetterComponent from "../components/NewsLetterComponent";

export default function Dashboard() {
  const userData = {
    name: "User",
  };
  return (
    <main className="bg-[#121212] py-5 px-20 text-white">
      <section className="">
        <h2 className="mb-5 text-xl font-medium">Welcome {userData.name}</h2>
        {/* We can make this map in the hero section to even display the current location of the user. Also, on click of the map here should take them to the dedicated map page. What do you guys think? */}
        <MapHero />
      </section>
      <section className="mb-10 ">
        <div className="text-xl font-medium flex justify-between mb-10">
          <p>Recent Locations</p>
          <Link className="text-[#8E2BE2]">
            <p>View all history</p>
          </Link>
        </div>
        <div className="flex justify-between gap-4">
          <RecentLocationComponent />
          <RecentLocationComponent />
          <RecentLocationComponent />
          <RecentLocationComponent />
        </div>
      </section>
      <section className="bg-[#282828] rounded-3xl p-5 flex items-center justify-between mb-10">
        <NewsLetterComponent />
      </section>
    </main>
  );
}
