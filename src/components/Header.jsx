import React from "react";

const Header = ({ cartLength, setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <section className="sticky sm:h-20 h-16 top-0 z-10 flex justify-between sm:p-8 p-4 bg-[#343a40]">
      <div className="flex items-center gap-5">
        <img src="/assets/icons/hamburger.svg" alt="hamburger-icon" className="md:hidden cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />

        <h1 className="text-[#dcede6] text-xl font-bold">Ecommerce</h1>
      </div>

      <div className="flex justify-between items-center gap-3">
        <img src="/assets/icons/cart.svg" alt="cart-icon" />

        <p className="text-[#9a9da0]">Cart</p>

        <p className="inline-block px-2 py-0.5 bg-green-400 text-white font-bold text-sm min-w-[24px] text-center rounded-full">
          {cartLength}
        </p>
      </div>
    </section>
  );
};

export default Header;
