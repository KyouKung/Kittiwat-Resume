import Communicative from "../assets/Why/Group.svg";
import Professional from "../assets/Why/Layer_65.svg";
import Collaborative from "../assets/Why/Group 243.svg";
import Client from "../assets/Why/Group 242.svg";

function Why() {
  return (
    <div className="bg-[#FAF4F2]">
      <div className="flex flex-col justify-center items-center pt-20">
        <p className="text-[#222222] text-[48px] font-semibold">Why Hire Me?</p>
      </div>
      <div className="flex flex-row justify-evenly mt-20">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center w-[98px] h-[98px] bg-gray-200 rounded-full">
            <img src={Communicative} />
          </div>
          <p className="text-[24px] font-medium mt-10">Communicative</p>
          <p className="text-[18px] text-[#222222] opacity-50 font-normal">
            Amet minim mollit non <br /> deserunt ullamco est sit <br /> aliqua
            dolor do amet sint.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center w-[98px] h-[98px] bg-gray-200 rounded-full">
            <img src={Professional} />
          </div>
          <p className="text-[24px] font-medium mt-10">Professional</p>
          <p className="text-[18px] text-[#222222] opacity-50 font-normal">
            Amet minim mollit non <br /> deserunt ullamco est sit <br /> aliqua
            dolor do amet sint.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center w-[98px] h-[98px] bg-gray-200 rounded-full">
            <img src={Collaborative} />
          </div>
          <p className="text-[24px] font-medium mt-10">Collaborative</p>
          <p className="text-[18px] text-[#222222] opacity-50 font-normal">
            Amet minim mollit non <br /> deserunt ullamco est sit <br /> aliqua
            dolor do amet sint.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center w-[98px] h-[98px] bg-gray-200 rounded-full">
            <img src={Client} />
          </div>
          <p className="text-[24px] font-medium mt-10">Client's Favourite</p>
          <p className="text-[18px] text-[#222222] opacity-50 font-normal">
            Amet minim mollit non <br /> deserunt ullamco est sit <br /> aliqua
            dolor do amet sint.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
