/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Newscard = ({
  url,
  urlToImage,
  title,
  content,
  description,
  publishedAt,
}) => {
  return (
    <Link to={url}>
      <div className=" border-[2px] p-[10px] relative h-[485px] rounded-lg hover:border-[#000000] ">
        <img src={urlToImage} alt="" className="w-[100%] h-[250px]" />

        <p className=" text-[#249598] hover:text-[#4338ca] text-[18px] w-[400px] tiro-devanagari font-normal mt-[5px]">
          {title}.{" "}
        </p>

        <p className="mt-[5px] mb-[2px] roboto-slab text-[16px] text-[#202224]">
          {content.slice(0, 80)}...
          <Link
            to={url}
            target="_blank"
            rel="noopener noreferrer "
            className="edu-tas hover:text-[blue]"
          >
            read more
          </Link>
        </p>
        <p className="mt-[12px] mb-[2px] roboto-slab text-[14px] text-[#202224]">
          {description.slice(0, 200)}{" "}
          <Link
            to={url}
            target="_blank"
            rel="noopener noreferrer"
            className="edu-tas hover:text-[blue]"
          >
            ...read more
          </Link>
        </p>
        <p className=" absolute right-[20px] bottom-[5px] roboto-slab text-[14px]">
          {publishedAt.slice(0, 10)}{" "}
        </p>
      </div>
    </Link>
  );
};

export default Newscard;
