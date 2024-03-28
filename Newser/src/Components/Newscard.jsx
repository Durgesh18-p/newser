/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import imageNotFound from "../Assets/imagenotfound.png";

const Newscard = ({
  url,
  urlToImage,
  title,
  content,
  description,
  publishedAt,
}) => {
  return (
    <div className="border-[2px] p-[10px] relative h-[485px] rounded-lg transition-all ease-in-out hover:border-[#000000]">
      {urlToImage ? (
        <Link to={url} target="_blank" rel="noopener noreferrer">
          <img src={urlToImage} className="w-[100%] h-[250px] border-[1px]" />
        </Link>
      ) : (
        <Link to={url} target="_blank" rel="noopener noreferrer">
          <img
            src={imageNotFound}
            className="w-[100%] h-[250px] border-[1px]"
          />
        </Link>
      )}

      <p className="text-[#249598] hover:text-[#4338ca] text-[18px] w-[400px] tiro-devanagari font-normal mt-[5px]">
        {title}.{" "}
      </p>

      <p className="mt-[5px] mb-[2px] roboto-slab text-[16px] text-[#202224]">
        {content && content.slice(0, 80)}...
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="edu-tas text-[blue]"
        >
          read more
        </a>
      </p>
      <p className="mt-[12px] mb-[2px] roboto-slab text-[14px] text-[#202224]">
        {description && description.slice(0, 100)}{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="edu-tas text-[blue]"
        >
          ...read more
        </a>
      </p>
      <p className="absolute right-[20px] bottom-[5px] roboto-slab text-[14px]">
        {publishedAt.slice(0, 10)}{" "}
      </p>
    </div>
  );
};

export default Newscard;
