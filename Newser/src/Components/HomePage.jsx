import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      {data.map((news, index) => {
        const {
          author,
          content,
          description,
          publishedAt,
          title,
          url,
          urlToImage,
        } = news;

        return (
          <div
            key={index}
            style={{
              height: "100vh",
              width: "100vw",
            }}
          >
            <p>{author}</p>
            <p>{content}</p>
            <p>{description} </p>
            <p>{publishedAt} </p>
            <p>{title} </p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              read more
            </a>
            <img
              src={urlToImage}
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
