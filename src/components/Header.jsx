import { MdOutlineSearch } from "react-icons/md";

export default function Header() {
  return (
    <nav className="bg-[#282828] text-white py-5 px-20">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MdOutlineSearch size={30} />
          <div>
            <input
              type="text"
              placeholder="Search location"
              className="bg-transparent border-b border-white w-[157px] outline-none placeholder:text-[#ffffffb0]"
            />
          </div>
        </div>
        <p className="font-semibold uppercase text-2xl">LocateMe</p>
        <div className="w-[55px] h-[55px] rounded-full overflow-hidden">
          <img
            className="w-full h-full"
            src="https://xsgames.co/randomusers/assets/avatars/pixel/36.jpg"
            alt=""
          />
        </div>
      </section>
    </nav>
  );
}
