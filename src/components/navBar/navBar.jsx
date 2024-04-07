import React from "react";

const NavBar = () => {
  return (
    /* <!--nav section--> */
    <div class="bg-[#404EED] font-ggSans">
      {/* <!-- Navbar --> */}
      <nav
        class="text-[#fff]  max-w-[1200px] mx-auto 
        flex justify-between h-[72px] items-center xl:px-0 px-7"
      >
        {/* <!-- Logo --> */}
        <div>
          <img src="./images/logo.svg" alt="" />
        </div>
        {/* <!-- Nav Options --> */}
        <div class="hidden xl:flex gap-5 font-ggSans font-[600] font-\[16px\]">
          <a href="#" class="capitalize hover:underline">
            download
          </a>
          <a href="#" class="capitalize hover:underline">
            nitro
          </a>
          <a href="#" class="capitalize hover:underline">
            discover
          </a>
          <a href="#" class="capitalize hover:underline">
            safety
          </a>
          <a href="#" class="capitalize hover:underline">
            support
          </a>
          <a href="#" class="capitalize hover:underline">
            blog
          </a>
          <a href="#" class="capitalize hover:underline">
            careers
          </a>
        </div>
        {/* <!-- Open DiscordBtn --> */}
        <div class="hidden xl:flex">
          <a href="#">
            <button
              class="bg-[#fff] px-4 self-center p-2 text-[#2c2f33] 
              rounded-full font-[500] text-[14px]"
            >
              Open Discord
            </button>
          </a>
        </div>

        {/* <!-- Humbarget Option --> */}
        <div class="xl:hidden block">
          <i class="fa-solid fa-bars text-[23px]"></i>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
