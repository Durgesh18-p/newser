import { countries, categories } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory, setSelectedCountry } from "./newsReducer";

const Navigation = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.news.country);
  const category = useSelector((state) => state.news.category);
  console.log(city);
  console.log(category);

  const handleCountrySelector = (e) => {
    const countryname = e.target.value;
    dispatch(setSelectedCountry(countryname));
  };

  const handleCategorySelector = (category) => {
    console.log(category.code);
    dispatch(setSelectedCategory(category.code));
  };

  return (
    <nav className="border-t-[1px] border-b-[1px] border-[#000000] h-[50px] grid place-items-center w-[100vw] ">
      <div className="w-[70%] flex justify-around items-center md:w-[100%]">
        <div>
          {" "}
          <select
            name="country"
            id="country"
            className="border-[1px] border-[#000000] text-[#4338ca] font-bold rounded cursor-pointer p-[3px] "
            onChange={handleCountrySelector}
            style={{ maxHeight: "100px" }}
          >
            <option value="" className="text-[#485155]">
              Country
            </option>
            {countries.map((country) => {
              return (
                <option
                  value={country.code}
                  key={country.code}
                  className="ml-[55px] border-[#000000] text-[#485155]"
                >
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <ul
            className="flex
          justify-evenly items-center gap-[25px]
          "
          >
            {categories.map((category) => {
              return (
                <li
                  key={category.code}
                  className="font-bold text-[#485155] border-r-[1px] pr-[15px] border-[#000000] cursor-pointer hover:text-[#000000] active:text-[#4338ca]"
                  onClick={() => handleCategorySelector(category)}
                >
                  {category.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
