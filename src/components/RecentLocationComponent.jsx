import { Link } from "react-router-dom";
export default function RecentLocationComponent() {
  return (
    <>
      <Link>
        <div
          className="w-[280px] h-[245px] rounded-3xl relative"
          style={{
            background:
              "url('https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#fff] text-black font-medium inline-block px-4 py-1 rounded-full absolute bottom-4 left-4">
            <p>New York</p>
          </div>
        </div>
      </Link>
    </>
  );
}
