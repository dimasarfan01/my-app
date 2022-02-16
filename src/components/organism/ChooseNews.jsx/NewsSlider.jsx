import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllNewsAPI } from '../../../services/newsAPI';
import { Button } from '../../atoms/Button';
import LoadingPulse from '../../atoms/LoadingPulse';

const NewsSlider = () => {
  const { Slider, CardContainer, CardCategory, CardTitleAndPostedBy } =
    Component;
  const navigate = useNavigate();

  const [dataNews, setDataNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllNewsAPI({ limit: 4 }).then((res) => {
      setDataNews(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingPulse />;
  }

  return (
    <Slider>
      {dataNews.map((news) => (
        <CardContainer
          key={news._id}
          image={news.image}
          onClick={() => navigate(`/news/${news._id}`)}
        >
          <CardCategory data={news.category} />
          <CardTitleAndPostedBy title={news.title} postedBy={news.postedBy} />
        </CardContainer>
      ))}
    </Slider>
  );
};

const Component = {
  Slider: ({ children }) => {
    return (
      <div className="overflow-x-scroll whitespace-nowrap w-full space-x-4 snap-mandatory snap-x px-7 h-full">
        {children}
      </div>
    );
  },
  CardContainer: ({ image, children, onClick }) => {
    return (
      <button
        className="whitespace-normal inline-block snap-center relative text-left"
        onClick={onClick}
        style={{ width: 350 }}
      >
        <img
          src={image}
          alt="content_image"
          className="rounded-2xl object-cover opacity-70"
          style={{ height: 270 }}
        />
        <span
          className="absolute top-0 bg-gradient-to-r from-blue-500 to-white w-full opacity-20 rounded-2xl"
          style={{ height: 270 }}
        />
        {children}
      </button>
    );
  },
  CardCategory: ({ data }) => {
    return (
      <div className="absolute top-4 left-5 flex flex-row space-x-2">
        {data.map((category, index) => (
          <Button.Link
            key={index}
            title={category}
            backgroundColor="transparent"
          />
        ))}
      </div>
    );
  },
  CardTitleAndPostedBy: ({ title, postedBy }) => {
    return (
      <div className="absolute top-36 left-5 flex flex-col space-y-2">
        <p className="break-words text-xl font-semibold w-56">{title}</p>
        <div className="flex flex-row items-center space-x-2">
          <img
            src={postedBy.image}
            alt="profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <p className="text-sm font-medium">{postedBy.userName}</p>
        </div>
      </div>
    );
  },
};

export default NewsSlider;
