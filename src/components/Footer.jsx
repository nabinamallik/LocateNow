import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date();

  const footerLinks = [
    "Support",
    "Help Center",
    "Notification",
    "User Manual",
    "Get In Touch",
  ];
  return (
    <footer className="bg-[#282828] text-white py-5 px-20">
      <section className="flex justify-between items-center">
        <div>
          <div className="mb-2">
            <h2 className="text-2xl font-semibold">LocateMe</h2>
            <p>Making tracking easy...</p>
          </div>
          <p>Locate Me &copy; {date.getFullYear()}</p>
        </div>
        <div>
          <ul className="">
            {footerLinks.map((link, index) => (
              <Link key={index}>
                <li>{link}</li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
}
