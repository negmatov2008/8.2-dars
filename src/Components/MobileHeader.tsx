import { useState } from "react";

function MobileHeader() {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => {
    setShow(!show);
    const menyuEl = document.getElementById("menyu");
    if (!show) {
      setTimeout(() => {
        menyuEl?.classList.remove("hidden");
      }, 100);
    }
    if (show) {
      setTimeout(() => {
        menyuEl?.classList.add("hidden");
      }, 150);
    }
  };
  return (
    <div className="flex relative md:hidden justify-between items-center">
      <img className="w-[120px] h-[32px]" src="Shortly.svg" alt="" />
      <button className="transition-all " onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="21"
          viewBox="0 0 24 21"
          fill="none"
        >
          <rect width="24" height="3" fill="#9E9AA8" />
          <rect y="9" width="24" height="3" fill="#9E9AA8" />
          <rect y="18" width="24" height="3" fill="#9E9AA8" />
        </svg>
      </button>
      <div
        id="menyu"
        className="absolute hidden  top-[44px] transition-all text-[18px] font-bold text-white z-40 right-0 w-[327px] flex items-center flex-col gap-[30px] py-[40px] rounded-[10px] bg-[#3A3054]"
      >
        <span>Features</span>
        <span>Pricing</span>
        <span>Resources</span>
        <div className="w-[279px] h-[1px] bg-[#9E9AA8] opacity-[0.25]"></div>
        <span>Login</span>
        <button className="w-[279px]  flex pt-[12px] pb-[9px] justify-center items-center text-inherit font-bold rounded-[28px] bg-[#2BD0D0] hover:bg-[#9AE3E3] ">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default MobileHeader;
