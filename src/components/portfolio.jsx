import Portfolio1 from "../assets/portfolio/Image.svg";
import Portfolio2 from "../assets/portfolio/Image (1).svg";
import Portfolio3 from "../assets/portfolio/Image (2).svg";
import Portfolio4 from "../assets/portfolio/Image (3).svg";
import Portfolio5 from "../assets/portfolio/Image (4).svg";
import Portfolio6 from "../assets/portfolio/Image (5).svg";

function Portfolio() {
  return (
    <div className="bg-[#FAF4F2] pt-32">
      <div className="font-poppins flex justify-around items-center">
        <p className="font-semibold text-[48px]">Portfolio</p>
        <p className="font-normal text-[20px] text-[#222222] opacity-50">
          See More →
        </p>
      </div>
      <div className="flex flex-row justify-center items-center space-x-8 mt-20">
        <img src={Portfolio1} />
        <img src={Portfolio2} />
        <img src={Portfolio3} />
      </div>
      <div className="flex flex-row justify-center items-center space-x-8 mt-8 pb-20">
        <img src={Portfolio4} />
        <img src={Portfolio5} />
        <img src={Portfolio6} />
      </div>
    </div>
  );
}

export default Portfolio;
