import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleLinkedin = () => {
    const linkedinProfileUrl =
      "https://linkedin.com/in/durgesh-suryawanshi-056a58230";
    window.open(linkedinProfileUrl, "_blank");
  };

  const handlewhatsapp = () => {
    let number = "9405807468";
    window.open(`https://api.whatsapp.com/send?phone=${number}`);
  };

  const handleTwitter = () => {
    let twitter = "https://twitter.com/Suryadurgesh_18";
    window.open(twitter, "_blank");
  };

  const handleEmail = () => {
    let email = "mailto:suryadurgesh18@gmail.com";
    window.open(email, "_blank");
  };

  return (
    <footer className="h-[200px] w-[100vw] bg-[#ecf0e7] border-t-[1px] border-[#000000] grid place-items-center">
      <div>
        <h1 className=" font-bold tiro-devanagari text-[25px]">
          Contact Developer
        </h1>
        <hr className="w-[220px] border-[#7f868f] h-[1px]" />

        <div className="flex justify-around items-center mt-[20px]">
          <FaLinkedin
            className="text-[30px] cursor-pointer  hover:animate-bounce"
            onClick={() => handleLinkedin()}
          />
          <FaWhatsappSquare
            className="text-[30px] cursor-pointer hover:animate-bounce"
            onClick={() => {
              handlewhatsapp();
            }}
          />
          <FaXTwitter
            className="text-[30px] cursor-pointer hover:animate-bounce"
            onClick={() => {
              handleTwitter();
            }}
          />
          <MdEmail
            className="text-[30px] cursor-pointer hover:animate-bounce"
            onClick={() => handleEmail()}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
