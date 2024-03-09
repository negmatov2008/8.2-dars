function Card(props: {
  img: string;
  title: string;
  p: string;
  res: boolean;
  nechi: number;
}) {
  return (
    <div
      className={`max-w-[327px] ${
        props.res && props.nechi == 2 ? "md:mt-[44px]" : ""
      }  ${
        props.res && props.nechi == 3 ? "md:mt-[88px]" : ""
      } bg-[#EFF1F7] rounded-[5px] flex flex-col h-[284px] md:h-[267px] md:items-start items-center  px-[32px] pb-[41px] `}
    >
      <img className="w-[88px] translate-y-[-50%] " src={props.img} alt="" />
      <h3 className="text-[#34313D] text-[22px] mb-[12px] font-bold">
        {props.title}
      </h3>
      <p className="text-[#9E9AA8] text-center md:text-start text-[15px] font-[500] leading-[26px]">
        {props.p}
      </p>
    </div>
  );
}

export default Card;
