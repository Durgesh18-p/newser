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
    <div className="w-[430px] border-2 p-4 relative rounded-lg transition-all ease-in-out hover:border-black h-auto md:h-[550px]">
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <img
          src={urlToImage || imageNotFound}
          className="w-full h-48 md:h-60 lg:h-64 border mb-4 object-cover"
        />
      </Link>

      <p className="text-blue-500 hover:text-blue-700 text-lg w-full md:w-96 font-bold mt-2">
        {title}.{" "}
      </p>

      <p className="mt-2 mb-1 font-semibold text-[18px] text-gray-800">
        {content && content.slice(0, 80)}...
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          read more
        </a>
      </p>
      <p className="mt-3 mb-1 text-[16px] font-semibold text-gray-800">
        {description && description.slice(0, 100)}{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          ...read more
        </a>
      </p>
      <p className="absolute right-5 bottom-3 text-sm mt-8">
        {publishedAt.slice(0, 10)}{" "}
      </p>
    </div>
  );
};

export default Newscard;
