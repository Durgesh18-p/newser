import { countries, categories } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory, setSelectedCountry } from "./newsReducer";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.news.isAuthenticated);
  const selectedCategory = useSelector((state) => state.news.selectedCategory);
  const [isSticky, setIsSticky] = useState(false); // State to manage sticky behavior

  const handleCountrySelector = (e) => {
    const countryname = e.target.value;
    dispatch(setSelectedCountry(countryname));
  };

  const handleCategorySelector = (category) => {
    if (!isAuthenticated) {
      return <Navigate to="/" />;
    } else {
      dispatch(setSelectedCategory(category.code));
    }
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true); // If scrolled, set sticky to true
    } else {
      setIsSticky(false); // If not scrolled, set sticky to false
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove event listener when component unmounts
    };
  }, []);

  return (
    <nav
      className={`border-t border-b border-black h-12 grid place-items-center w-full ${
        isSticky ? "sticky top-0 bg-white z-10" : ""
      }`}
    >
      <div className="w-11/12 flex flex-col md:flex-row justify-between items-center md:w-full px-4 md:px-8 lg:px-16">
        <div className="w-full md:w-auto mb-2 md:mb-0">
          <select
            name="country"
            id="country"
            className="border border-black text-blue-700 font-bold rounded cursor-pointer p-2 w-full md:w-auto dropdown"
            onChange={handleCountrySelector}
          >
            <option value="" className="text-gray-600">
              Country
            </option>
            {countries.map((country) => {
              return (
                <option
                  value={country.code}
                  key={country.code}
                  className="ml-2 border-black text-gray-600"
                >
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full md:w-auto bg-white p-2">
          <ul className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8">
            {categories.map((category) => {
              return (
                <li
                  key={category.code}
                  className={`font-bold text-gray-600 border-b-2 md:border-b-0 md:border-r-2 md:pr-4 border-black cursor-pointer hover:text-black active:text-blue-700 ${
                    selectedCategory === category.code
                      ? "text-blue-700 border-blue-700"
                      : ""
                  }`}
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
