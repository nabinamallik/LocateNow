import MapHero from "../components/MapHero";

export default function Dashboard() {
  const userData = {
    name: "User",
  };
  return (
    <main className="bg-[#121212] py-5 px-20 text-white">
      <section>
        <h2 className="mb-5 text-xl font-medium">Welcome {userData.name}</h2>
        <MapHero />
      </section>
    </main>
  );
}
