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

  const handleCategorySelector = (e) => {
    const categoryName = e.target.value;
    dispatch(setSelectedCategory(categoryName));
  };

  return (
    <nav className="border-t-[1px] border-b-[1px] border-[#000000] h-[50px] grid place-items-center w-[100vw] ">
      <div className="w-[70%] flex justify-around items-center md:w-[100%]">
        <div>
          {" "}
          <select
            name="country"
            id="country"
            className="border-[1px] border-[#000000] text-[#485155] font-[500] rounded cursor-pointer "
            onChange={handleCountrySelector}
          >
            <option value="">Country</option>
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
            className="border-[1px] border-[#000000] text-[#485155] font-[500] rounded w-[240px] cursor-pointer "
            onChange={handleCategorySelector}
          >
            <option value="">Category</option>
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
