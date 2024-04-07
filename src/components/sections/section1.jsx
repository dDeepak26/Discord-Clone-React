import React from "react";

const Section1 = () => {
  return (
    <div
      class="flex container max-w-[1200px] mx-auto 
    items-center py-14 md:py-36 flex-col md:flex-row px-7 md:px-0"
    >
      {/* <!--left section --> */}
      <div class="md:w-[50%]">
        <img src="./images/section1Image.svg" alt="" />
      </div>

      {/* <!-- right section --> */}
      <div class="md:w-[50%]">
        <div class="w-[95%] xl:w-[60%] mx-auto">
          <h1
            class="font-[700] text-[20px] sm:text-[28px]
               md:text-[48px] font-['ggSans'] leading-[24px]
                md:leading-[57.6px] mt-5 md:mt-0"
          >
            Create an invite-only place where you belong
          </h1>
          <p class="font-['ggSans'] text-[16px] sm:text-[20px] font-[400] mt-[24px]">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
