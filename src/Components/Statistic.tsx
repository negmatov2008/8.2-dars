import Card from "./Card";

function Statistic() {
  return (
    <div className="flex flex-col mb-[80px] relative md:mb-[120px] gap-[92px] md:gap-[100px] ">
      <div className="flex flex-col md:items-center gap-[16px]">
        <h3 className="text-[28px]  md:text-[40px] text-center text-[#34313D] font-bold leading-[40px]">
          Advanced Statistics
        </h3>
        <p className="text-[#9E9AA8] md:max-w-[540px] text-[16px] text-center font-[500] md:text-[18px] leading-[28px] md:leading-[32px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[92px] md:gap-[32px]">
        <div className="w-[8px] h-[1014px] absolute -z-10 bg-[#2BD0D0] md:w-[90%] left-[50%] md:h-[8px] md:top-[334px] md:left-0 "></div>
        <Card
          img="img1.svg"
          title="Brand Recognition"
          res={true}
          nechi={1}
          p="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        />
        <Card
          img="img2.svg"
          title="Detailed Records"
          res={true}
          nechi={2}
          p="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <Card
          img="img3.svg"
          title="Fully Customizable"
          res={true}
          nechi={3}
          p="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </div>
  );
}

export default Statistic;
