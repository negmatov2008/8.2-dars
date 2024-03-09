import { useRef } from "react";

function Link() {
  const inpEl = useRef();
  const Click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(inpEl.current);
  };
  return (
    <div className="max-w-full p-[24px] mb-[80px] md:mb-[120px] md:px-[64px] rounded-[10px] bg-[url(link1.png)] md:bg-[url(link2.png)] md:py-[52px]">
      <form className="flex flex-col md:flex-row ">
        <input
       
          id="inp"
          className="flex rounded-[5px] md:rounded-[10px] bg-[#FFF] focus-visible:border  placeholder:opacity-[0.5] placeholder:text-[#34313D] placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-[500] placeholder:leading-[36px] py-[6px] pl-[16px] md:py-[14px] md:pl-[32px] md:flex-1"
          placeholder="Shorten a link here..."
          type="text"
        />
        <button
          onClick={(e) => Click(e)}
          className="rounded-[5px] md:rounded-[10px] bg-[#2BD0D0] px-[91px] py-[10px] text-[16px] mt-[15px] md:mt-0 md:px-[40px] md:py-[16px] md:text-[20px] hover:bg-[#9AE3E3] md:ml-[20px] font-bold text-white "
        >
          Shorten It!
        </button>
      </form>
    </div>
  );
}

export default Link;
