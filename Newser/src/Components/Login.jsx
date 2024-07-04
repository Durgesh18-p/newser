import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import app from "./firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { isAuthenticated } from "./newsReducer";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [closeeye, setCloseeye] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignin = () => {
    try {
      dispatch(isAuthenticated(true));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      data && dispatch(isAuthenticated(true));
    });
  };

  const handleCloseEye = () => {
    setCloseeye(!closeeye);
  };

  const words = [
    "National",
    "World",
    "Business",
    "Lifestyle",
    "Travel",
    "Technology",
    "Sport",
    "Weather",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ecf0e7] p-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="tiro-devanagari font-bold text-5xl md:text-7xl lg:text-8xl text-center ml-2">
          N
          <span className="tiro-devanagari text-lg md:text-xl lg:text-2xl mr-1">
            orth
          </span>
          E
          <span className="tiro-devanagari text-lg md:text-xl lg:text-2xl">
            ast
          </span>
          W
          <span className="tiro-devanagari text-lg md:text-xl lg:text-2xl mr-1">
            est
          </span>
          S
          <span className="tiro-devanagari text-lg md:text-xl lg:text-2xl mr-1">
            outh
          </span>
          E
          <span className="tiro-devanagari text-lg md:text-xl lg:text-2xl mr-1">
            very
          </span>
          N
          <span className="tiro-devanagari text-lg md:text-xl lg:text-2xl mr-3">
            ews
          </span>
        </h1>
        <h2 className="roboto-slab font-medium text-lg md:text-xl lg:text-xl mt-4">
          EST - 2023
        </h2>
        <h2 className="roboto-slab font-semibold text-lg md:text-xl lg:text-2xl mb-1">
          THE BEST SELLING NEWSPAPER IN THE WORLD.
        </h2>
        <h2 className="roboto-slab font-medium text-lg md:text-xl lg:text-xl">
          Today's Edition
        </h2>
      </div>
      <div className="w-full bg-[#22d3ee] py-2 border-t border-b border-black overflow-hidden">
        <motion.div
          className="flex justify-around items-center"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {words.map((word, index) => (
            <motion.h2
              key={index}
              className="roboto-slab text-xl md:text-2xl lg:text-3xl text-white"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
                delay: index * 1, // delay each word by 1 second
              }}
            >
              {word}
            </motion.h2>
          ))}
        </motion.div>
      </div>
      <form className="form-control mt-8 flex flex-col items-center w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-center mb-4">
          To stay updated in this fast changing world LogIn to{" "}
          <span className="text-[#4338ca]">NEWSEN</span>
        </h1>
        <p className="edu-tas text-lg md:text-xl lg:text-2xl text-[#485155] mb-6 text-center">
          “Ink spills truth, headlines roar.”
        </p>
        <div className="w-full flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="Email...."
            required
            className="w-full border border-black p-2 rounded"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="w-full relative">
            <input
              type={closeeye ? "password" : "text"}
              placeholder="Password...."
              required
              className="w-full border border-black p-2 rounded"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {closeeye ? (
              <FaEyeSlash
                className="text-xl absolute top-2 right-2 cursor-pointer"
                onClick={handleCloseEye}
              />
            ) : (
              <IoMdEye
                className="text-xl absolute top-2 right-2 cursor-pointer"
                onClick={handleCloseEye}
              />
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={handleSignin}
          className="mt-4 w-full bg-[#4338ca] text-white font-bold py-2 rounded hover:bg-[#6366f1]"
        >
          LogIn
        </button>
        <div className="mt-4 flex items-center justify-center w-full border border-[#4338ca] py-2 rounded-full hover:bg-[#93c5fd] cursor-pointer">
          <FaGoogle className="mr-2" />
          <button
            type="button"
            onClick={handleLoginWithGoogle}
            className="font-bold text-[#4338ca]"
          >
            LogIn with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
