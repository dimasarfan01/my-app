import React from 'react';
import profile from '../../../assets/profile1.png';
import home1 from '../../../assets/home1.jpeg';
import home2 from '../../../assets/home2.jpeg';
import home3 from '../../../assets/home3.jpeg';
import { Button } from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';

const NewsSlider = () => {
  const { Slider, CardContainer, CardCategory, CardTitleAndPostedBy } =
    Component;
  const navigate = useNavigate();
  return (
    <Slider>
      <CardContainer image={home1} onClick={() => navigate('/1')}>
        <CardCategory data={['Life Improvment', 'Knowledge']} />
        <CardTitleAndPostedBy
          title="Minimal: Things You Should Know"
          postedBy={{ image: profile, userName: 'Life At' }}
        />
      </CardContainer>
      <CardContainer image={home2} onClick={() => navigate('/2')}>
        <CardCategory data={['Future', 'Invest']} />
        <CardTitleAndPostedBy
          title="Living Tribunal: How to Invest in Your Future"
          postedBy={{ image: profile, userName: 'Life At' }}
        />
      </CardContainer>
      <CardContainer image={home3} onClick={() => navigate('/3')}>
        <CardCategory data={['Courage']} />
        <CardTitleAndPostedBy
          title="Minimal: Things You Should Know"
          postedBy={{ image: profile, userName: 'Life At' }}
        />
      </CardContainer>
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
          className="absolute top-0 bg-gradient-to-r from-cyan-500 to-white w-full opacity-20 rounded-2xl"
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
            href="/"
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
          <img src={postedBy.image} alt="profile" className="h-8 w-8" />
          <p className="text-sm font-medium">{postedBy.userName}</p>
        </div>
      </div>
    );
  },
};

export default NewsSlider;
