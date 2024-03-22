import axios from "axios";
import { useEffect, useState } from "react";
import Newscard from "./Newscard";

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
          <Newscard
            key={index}
            content={content}
            description={description}
            publishedAt={publishedAt}
            title={title}
            url={url}
            urlToImage={urlToImage}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
