import { countries, categories } from "./data";
import { useState } from "react";

const Navigation = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCountrySelector = (e) => {
    setSelectedCountry(e.target.value);
    console.log("Selected country:", e.target.value);
  };

  const handleCategorySelector = (e) => {
    setSelectedCategory(e.target.value);
    console.log("Selected category:", e.target.value);
  };

  return (
    <nav className="border-t-[1px] border-b-[1px] border-[#000000] h-[50px] grid place-items-center">
      <div className="w-[700px] flex justify-around items-center">
        <div>
          {" "}
          <select
            name="country"
            id="country"
            className="border-[1px] border-[#000000] text-[#5d686c] font-[500] rounded"
            onChange={handleCountrySelector}
          >
            <option value="">Select Country</option>
            {countries.map((country) => {
              return (
                <option value={country.code} key={country.code}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <select
            name="category"
            id="category"
            className="border-[1px] border-[#000000] text-[#5d686c] font-[500] rounded"
            onChange={handleCategorySelector}
          >
            <option value="">Select Category</option>
            {categories.map((category) => {
              return (
                <option value={category.code} key={category.code}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
