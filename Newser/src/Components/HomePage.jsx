import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Newscard from "./Newscard";
import SkeletnLoading from "./SkeletnLoading";
const HomePage = () => {
  let country = false;
  let category = false;
  country = useSelector((state) => state.news.country);
  category = useSelector((state) => state.news.category);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9f134be0ed224a269de69186ec1358e1&pageSize=20"

          // "https://newsapi.org/v2/top-headlines?country=in&apiKey=9f134be0ed224a269de69186ec1358e1"
        );
        
        setData(response.data.articles);
        setLoading(false);
      } catch (error) {
        if (error.response.status === 429) {
          setTimeout(fetchData, 5000);
          setLoading(false);
        } else {
          setError(error);
        }
      }
    };

    // Simulate loading for 2 seconds
    const loadingTimeout = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (category && country) {
      return;
    } else if (country) {
      const fetchData = async (country) => {
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=9f134be0ed224a269de69186ec1358e1`
          );
          setData(response.data.articles);
          setLoading(false);
        } catch (error) {
          if (error.response.status === 429) {
            setTimeout(fetchData, 5000);
            setLoading(false);
          } else {
            setError(error);
          }
        }
      };

      // Simulate loading for 2 seconds
      const loadingTimeout = setTimeout(() => {
        fetchData(country);
      }, 2000);

      return () => clearTimeout(loadingTimeout);
    }
  }, [country]);

  useEffect(() => {
    if (category && country) {
      return;
    } else if (category) {
      const fetchData = async (category) => {
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=9f134be0ed224a269de69186ec1358e1`
          );
          setData(response.data.articles);
          setLoading(false);
        } catch (error) {
          if (error.response.status === 429) {
            setTimeout(fetchData, 5000);
            setLoading(false);
          } else {
            setError(error);
          }
        }
      };

      // Simulate loading for 2 seconds
      const loadingTimeout = setTimeout(() => {
        fetchData(category);
      }, 2000);

      return () => clearTimeout(loadingTimeout);
    }
  }, [category]);

  useEffect(() => {
    if (category && country) {
      const fetchData = async (category, country) => {
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9f134be0ed224a269de69186ec1358e1`
          );
          setData(response.data.articles);
          setLoading(false);
        } catch (error) {
          if (error.response.status === 429) {
            setTimeout(fetchData, 5000);
            setLoading(false);
          } else {
            setError(error);
          }
        }
      };

      fetchData(category, country); // Call fetchData directly here, not inside setTimeout

      return () => {}; // No cleanup needed
    }
  }, [category, country]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    // Render skeleton loading components
    return (
      <div className="grid grid-cols-3 gap-4 p-[10px]">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <SkeletnLoading key={index} />
          ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-[10px]">
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
