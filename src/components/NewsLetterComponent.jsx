import hand from "../assets/hand.svg";
export default function NewsLetterComponent() {
  return (
    <>
      <div className="flex items-center">
        <div className="w-[90px] h-[90px]">
          <img className="w-full h-full" src={hand} alt="hand icon" />
        </div>
        <div>
          <p className="font-semibold text-xl">Exclusive deals for you!</p>
          <p className="font-extralight">
            Stay updated with the latest tracking features and alerts. <br />
            Sign up now for personalized notifications!
          </p>
        </div>
      </div>
      <div>
        <button className="bg-white text-black rounded-xl p-4 font-semibold">
          <p>Sign Up for Newsletter</p>
        </button>
      </div>
    </>
  );
}
