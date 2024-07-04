import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { indexIncrement, isAuthenticated } from "./newsReducer";
import { slogans } from "./data";

const Header = () => {
  const index = useSelector((state) => state.news.index);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logged out");
    dispatch(isAuthenticated(false));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(indexIncrement());
    }, 4000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="w-full min-h-[200px] bg-[#f5f5f5] grid place-items-center py-4">
      <div className="flex justify-between items-center w-full px-4 md:px-8 lg:px-16">
        <button
          onClick={handleLogout}
          className="p-2 border border-black rounded font-medium bg-white hover:bg-gray-200 transition duration-200"
        >
          LogOut
        </button>
      </div>
      <h1 className="tiro-devanagari text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        N
        <span className="tiro-devanagari text-center font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mr-1">
          orth
        </span>
        E
        <span className="tiro-devanagari text-center font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          ast
        </span>
        W
        <span className="tiro-devanagari text-center font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mr-1">
          est
        </span>
        S
        <span className="tiro-devanagari text-center font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mr-1">
          outh
        </span>
        E
        <span className="tiro-devanagari text-center font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mr-1">
          very
        </span>
        N
        <span className="tiro-devanagari text-center font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mr-1">
          ews
        </span>
      </h1>

      <div className="text-center mt-8 px-4">
        <p className="tiro-devanagari text-medium sm:text-lg md:text-xl lg:text-xl xl:text-3xl">
          {slogans[index].quote}
        </p>
        <span className="edu-tas text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          {slogans[index].author}
        </span>
      </div>
    </div>
  );
};

export default Header;
