import image from "../Assets/image1.jpg";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";

const Login = () => {
  const [closeeye, setCloseeye] = useState(true);

  const handleCloseEye = () => {
    setCloseeye(!closeeye);
  };

  return (
    <div className="w-[100vw] h-[100vh] ">
      <img
        src={image}
        alt=""
        className="h-[850px] w-[2000px] object-cover z-1 bg-cover"
      />
      <div className="h-[130px] w-[1175px] bg-[#ecf0e7] border-[#000000]  absolute top-[13px] left-[120px] flex justify-center items-center">
        <h1 className="tiro-devanagari text-center fw-[700] text-[100px] ">
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
      </div>

      <div className="bg-[#ecf0e7] w-[1210px] absolute top-[170px] left-[82px] h-[34px]  flex justify-between items-center">
        <h2 className="roboto-slab mb-[4px] font-bold text-[20px]">
          No. 49,425
        </h2>
        <h2 className="roboto-slab mb-[4px] font-bold text-[20px]">
          THE BEST SELLING NEWSPAPER IN THE WORLD.
        </h2>
        <h2 className="roboto-slab mb-[4px] font-bold text-[20px]">
          Today's Edition
        </h2>
      </div>
      <div className="w-[1209px] h-[46px] bg-[#22d3ee] absolute top-[204px] left-[80px] border-[#000000] border-t-[1px] border-b-[1px]">
        <ul className="flex justify-evenly items-center">
          <li className="list-none">
            <h2 className="roboto-slab mb-[4px] font-bold text-[30px] text-[#ffffff]">
              National
            </h2>
          </li>
          <li className="list-none">
            <h2 className="roboto-slab mb-[4px] font-bold text-[30px] text-[#ffffff]">
              world
            </h2>
          </li>
          <li className="list-none">
            <h2 className="roboto-slab mb-[4px] font-bold text-[30px] text-[#ffffff]">
              Business
            </h2>
          </li>
          <li className="list-none">
            <h2 className="roboto-slab mb-[4px] font-bold text-[30px] text-[#ffffff]">
              Lifestyle
            </h2>
          </li>
          <li className="list-none">
            <h2 className="roboto-slab mb-[4px] font-bold text-[30px] text-[#ffffff]">
              Travet
            </h2>
          </li>
          <li className="list-none">
            <h2 className="roboto-slab mb-[4px] font-bold text-[30px] text-[#ffffff]">
              Technology
            </h2>
          </li>
          <li className="list-none">
            <h2 className="roboto-slab mb-[4px] font-bold text-[30px] text-[#ffffff]">
              Sport
            </h2>
          </li>
          <li className="list-none">
            <h2 className="roboto-slab mb-[4px] font-bold text-[30px] text-[#ffffff]">
              Weather
            </h2>
          </li>
        </ul>
      </div>
      <form
        action=""
        className="form-control absolute top-[280px] right-[340px] rounded text-center "
      >
        <h1 className="text-[25px] tiro-devanagari mt-[5px]">
          To stay updated in this fast changing world LogIn to{" "}
          <span className="text-[#4338ca]">NEWSEN</span>
        </h1>
        <p className="edu-tas text-[20px] text-[#485155] mt-[20px]">
          “Ink spills truth, headlines roar.”
        </p>

        <div className="flex flex-col gap-2 items-center mt-[30px]">
          <input
            type="email"
            placeholder="Email...."
            required
            className="w-[200px] border-[#000000] border-[1px] p-[5px] rounded "
          />
          <input
            type={closeeye ? "password" : "text"}
            placeholder="Password...."
            required
            className="w-[200px] border-[#000000] border-[1px] p-[5px] rounded "
          />
          {closeeye ? (
            <FaEyeSlash
              className="text-[22px] absolute top-[175px] right-[255px] cursor-pointer"
              onClick={() => {
                handleCloseEye();
              }}
            />
          ) : (
            <IoMdEye
              className="text-[22px] absolute top-[175px] right-[255px] cursor-pointer"
              onClick={() => {
                handleCloseEye();
              }}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
