import facebookIcon from "../assets/Follow Me/Group 3.svg";
import twitterIcon from "../assets/Follow Me/Group 1.svg";
import igIcon from "../assets/Follow Me/Group 2.svg";
import telegramIcon from "../assets/Follow Me/Group 4.svg";
import imgProfileIcon from "../assets/IMG_8564edit.jpg";
import bullet from "../assets/Follow Me/Bullet Points.svg";

function Profile() {
  return (
    <body className="mt-20">
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col">
          <div>
            <p className="text-[24px]">Hi!</p>
            <p className="text-[40px] font-semibold mt-4">
              I'm Kittiwat Choocheep. <br /> a Full Stack Developer.
            </p>
          </div>
          <div className="text-[18px] mt-11">
            <p>
              Frontend developer based in tehran, Iran. <br />
              I am coding with a clean and beautiful problem <br />
              solving in mind.
            </p>
          </div>
          <div className="flex items-center space-x-8 mt-6">
            <p className="text-[18px] text-[#222222] opacity-50">Follow me</p>
            <div className="flex items-center space-x-3">
              <img src={facebookIcon} />
              <img src={twitterIcon} />
              <img src={igIcon} />
              <img src={telegramIcon} />
            </div>
          </div>
          <div className="flex space-x-4 mt-10">
            <button className="bg-[#FF2950] text-white text-[18px] font-medium py-3 px-4 border rounded-lg">
              Send Request
            </button>
            <button className="bg-white text-[#222222] opacity-50 text-[18px] font-medium py-3 px-4 border border-[#FF9B70] rounded-lg">
              Download CV
            </button>
          </div>
        </div>
        <div className="w-[406px] h-[406px] relative">
          <img
            src={imgProfileIcon}
            className="w-[406px] h-[406px] object-cover object-top rounded-full z-50 absolute"
          />
          <img src={bullet} className="absolute top-0 -right-10 z-0" />
          <img src={bullet} className="absolute bottom-0 -left-2 z-20" />
        </div>
      </div>
    </body>
  );
}

export default Profile;