import email from "../assets/Footer/Squircle.png";
import ig from "../assets/Footer/Group 2.svg";
import tele from "../assets/Footer/Group 4.svg";

function Footer() {
  return (
    <footer className="bg-[#F1F1F1] h-[170px] flex flex-row items-center justify-evenly">
      <div className="flex flex-row space-x-3 w-[400px] justify-center">
        <img src={email} className="h-[24px] w-[22px]" />
        <p className="text-[18px] font-normal font-poppins">
          Kittiwat.Choocheep@gmail.com
        </p>
      </div>
      <div className="w-[400px] flex justify-center">
        <p className="text-[18px] font-medium font-poppins">
          © Copyright 2023 | Kittiwat
        </p>
      </div>
      <div className="flex flex-row space-x-3 w-[400px] justify-end items-center pr-12">
        <a href="https://www.instagram.com/">
          <img src={ig} className="h-[16px] w-[16px]" />
        </a>
        <img src={tele} className="h-[16px] w-[16px]" />
      </div>
    </footer>
  );
}

export default Footer;
