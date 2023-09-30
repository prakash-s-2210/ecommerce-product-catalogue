import React, { useState } from "react";

const Sidebar = ({ onFilterChange, brands, isSidebarOpen }) => {
  const [filterData, setFilterData] = useState({
    brands: [],
    price: "lowToHigh",
  });

  function handleChangeCheckbox(e, brand) {
    const isChecked = e.target.checked;
    let filteredData;
    if (isChecked) {
      filteredData = { ...filterData, brands: [...filterData.brands, brand] };
      setFilterData(filteredData);
    } else {
      filteredData = {
        ...filterData,
        brands: filterData.brands.filter(
          (selectedBrand) => selectedBrand !== brand
        ),
      };
      setFilterData(filteredData);
    }

    onFilterChange(filteredData);
  }

  const handleSortingOptionChange = (option) => {
    let filteredData = {
      ...filterData,
      price: option,
    }
    setFilterData(filteredData);
    onFilterChange(filteredData)
  };
  return (
    <section className={`${isSidebarOpen ? "max-md:hidden" : "max-md:block"} flex flex-col gap-3 max-md:fixed max-md:top-20 max-sm:top-16 max-md:left-0 max-md:h-screen bg-white`}>
      <table className="border-collapse">
        <tr>
          <th className="bg-[#f7f7f7] text-[#24272a] font-semibold text-2xl px-3 py-2 text-left border border-[#eae8e8]">
            Brands
          </th>
        </tr>

        {brands.map((brand) => (
          <tr key={brand.brand}>
            <td className="text-[#656969] px-3 py-2  border border-[#eae8e8] flex items-center gap-2">
              <input
                id={brand.brand}
                name={brand.brand}
                type="checkbox"
                checked={filterData.brands.includes(brand.brand)}
                onChange={(e) => handleChangeCheckbox(e, brand.brand)}
                className="border-2 border-[#656969]"
              />

              <label htmlFor={brand.brand}>
                {brand.brand}{" "}
                ({brand.length})
              </label>
            </td>
          </tr>
        ))}
      </table>

      <table className="border-collapse">
        <tr>
          <th className="bg-[#f7f7f7] text-[#24272a] font-semibold text-2xl px-3 py-2 text-left border border-[#eae8e8]">
            Price
          </th>
        </tr>

        <tr>
          <td className="text-[#656969] px-3 py-2  border border-[#eae8e8] flex items-center gap-2">
            <input
              id="lowToHigh"
              type="radio"
              value="lowToHigh"
              checked={filterData.price === "lowToHigh"}
              onChange={() => handleSortingOptionChange("lowToHigh")}
            />
            <label htmlFor="lowToHigh">Low to High</label>
          </td>
        </tr>

        <tr>
          <td className="text-[#656969] px-3 py-2  border border-[#eae8e8] flex items-center gap-2">
            <input
              id="highToLow"
              type="radio"
              value="highToLow"
              checked={filterData.price === "highToLow"}
              onChange={() => handleSortingOptionChange("highToLow")}
            />
            <label htmlFor="highToLow">High to Low</label>
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Sidebar;
