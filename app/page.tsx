import Table from "@/components/table";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex justify-center items-start ">
      <div className="relative max-w-[448px] mx-auto bg-[#F3F2EF]">
        <div className="relative">
          <div className="relative w-[375px] h-[652px]">
            <Image
              className="z-10"
              src="/img/bg-1.png"
              alt="bg-1"
              fill
              objectFit="cover"
            />
          </div>
          <div className="z-20 absolute opacity-50 top-0 w-[375px] h-[300px] bg-gradient-to-b from-[#000]  to-transparent " />
          <div className="z-20 absolute opacity-50 bottom-0 w-[375px] h-[300px] bg-gradient-to-b from-transparent to-[#FFF]" />
          <div className="z-20 absolute bottom-0 w-[375px] h-[100px] blur-3xl bg-[#FFF]" />
        </div>
        <div className="z-20 absolute top-[613px] left-[24px] w-[215px] h-[139px] bg-[#FFF] rounded-[100%] border-1 border-[#000] shadow-xl ">
          <div className="absolute w-[15px] h-[25px] bg-[#FFF] rounded-tl-[100%] top-[-22px] left-[75px] border-t-[1px] border-l-[1px] border-r-[1px] border-[#000]" />
          <textarea className="absolute top-[25px] left-[25px] w-[165px] h-[77px] text-black text-xl outline-none" />
        </div>
        <div className="relative w-[351px] h-[285px] mt-[114px]">
          <Image fill objectFit="cover" src="/img/bg-2.png" alt="bg-2" />
        </div>
        <div className="relative w-[375px] h-[306px] mt-[40px]">
          <Image fill objectFit="cover" src="/img/bg-3.png" alt="bg-3" />
          <div className="z-20 absolute top-[-113px] left-[24px] w-[239px] h-[138.78px] bg-[#FFF] rounded-[100%] border-1 border-[#000] shadow-xl ">
            <div className="absolute w-[15px] h-[25px] bg-[#FFF] rounded-bl-[100%] bottom-[-22px] left-[85px] border-b-[1px] border-l-[1px] border-r-[1px] border-[#000]" />
            <textarea className="absolute top-[30px] left-[27px] w-[185px] h-[77px] text-black text-xl outline-none" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-[40px]">
          <div>
            <h5 className="text-[16px] font-normal text-black text-center">
              김로켓님의 사주
            </h5>
            <h3 className="text-[20px] font-[700] text-black text-center">
              1980년 8월 27일 08:10
            </h3>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}
