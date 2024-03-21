import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9f134be0ed224a269de69186ec1358e1"
        );
        setData(response.data.articles);
      } catch (error) {
        if (error.response.status === 429) {
          // Retry after a certain period of time (e.g., 5 seconds)
          setTimeout(fetchData, 5000);
        } else {
          setError(error);
        }
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-[10px] ">
      {data.map((news, index) => {
        const { content, description, publishedAt, title, url, urlToImage } =
          news;

        return (
          <Link key={index} to={url}>
            <div className=" border-[2px] p-[10px] relative h-[485px]">
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
      })}
    </div>
  );
};

export default HomePage;
