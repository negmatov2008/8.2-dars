function DesktopHeader() {
  return (
    <div className="hidden md:flex justify-between items-center ">
      <div className="flex gap-[45px] items-center">
        <img src="Shortly.svg" alt="" />
        <div className="flex gap-[30px]">
          <span className="text-[#9E9AA8] cursor-pointer text-[15px] font-bold hover:text-[#34313D] ">
            Features
          </span>
          <span className="text-[#9E9AA8] cursor-pointer text-[15px] font-bold hover:text-[#34313D] ">
            Pricing
          </span>
          <span className="text-[#9E9AA8] cursor-pointer text-[15px] font-bold hover:text-[#34313D] ">
            Resources
          </span>
        </div>
      </div>
      <div className="flex items-center gap-[37px]">
        <span className="text-[#9E9AA8] cursor-pointer text-[15px] font-bold hover:text-[#34313D] ">
          Login
        </span>
        <button className="rounded-[28px] bg-[#2BD0D0] hover:bg-[#9AE3E3] py-[8px] px-[24px] text-white font-bold">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default DesktopHeader;
