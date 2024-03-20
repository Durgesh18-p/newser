import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { indexIncrement } from "./newsReducer";
import { slogans } from "./data";

const Header = () => {
  const index = useSelector((state) => state.news.index);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(indexIncrement());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100vw] h-[200px] bg-[#ecf0e7] grid place-items-center">
      <h1 className="tiro-devanagari text-center fw-[700] text-[50px] ">
        N
        <span className="tiro-devanagari text-center fw-[400] text-[18px] mr-[5px]">
          orth
        </span>
        E
        <span className="tiro-devanagari text-center fw-[400] text-[18px]">
          ast
        </span>
        W
        <span className="tiro-devanagari text-center fw-[400] text-[18px] mr-[5px]">
          est
        </span>
        S
        <span className="tiro-devanagari text-center fw-[400] text-[18px] mr-[5px]">
          outh
        </span>
        E
        <span className="tiro-devanagari text-center fw-[400] text-[18px] mr-[5px]">
          very
        </span>
        N
        <span className="tiro-devanagari text-center fw-[400] text-[18px] mr-[5px]">
          ews
        </span>
      </h1>

      <div className="text-center">
        <p className="tiro-devanagari text-center fw-[400] text-[18px]">
          {slogans[index].quote}
        </p>
        <span className="edu-tas text-center fw-[300] text-[14px]">
          {slogans[index].author}
        </span>
      </div>
    </div>
  );
};

export default Header;
