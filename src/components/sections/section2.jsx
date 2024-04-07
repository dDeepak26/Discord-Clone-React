import React from "react";

const Section2 = () => {
  return (
    <div class="bg-[#f6f6f6]">
      <div
        class="flex container max-w-[1200px] mx-auto items-center
     py-14 md:py-36 flex-col md:flex-row px-7 md:px-0"
      >
        <div class="block md:hidden md:w-[50%]">
          <img src="./images/section2Image.svg" alt="" />
        </div>

        <div class="md:w-[50%]">
          <div class="w-[95%] xl:w-[60%] mx-auto">
            <h1
              class="font-[700] text-[20px] sm:text-[28px] md:text-[48px] 
            font-['ggSans'] leading-[24px] md:leading-[57.6px] mt-5 md:mt-0"
            >
              Where hanging out is easy
            </h1>
            <p class="font-['ggSans'] text-[16px] sm:text-[20px] font-[400] mt-[24px]">
              Grab a seat in a voice channel when you&apos;re free. Friends in
              your server can see you&apos;re around and instantly pop in to
              talk without having to call.
            </p>
          </div>
        </div>
        <div class="md:w-[50%] md:block hidden">
          <img src="./images/section2Image.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
