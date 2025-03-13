import React from 'react';
import axios from 'axios';
import ServicePage from '@/pages/Service.page';

const Politic: React.FC = () => {
  const fetchData = async () => {
    const response = await axios.get('https://rss.kermaneno.ir/yournews/politic/');
    return response.data;
  };

  return <ServicePage title="سرویس سیاست" fetchData={fetchData} />;
};

const World: React.FC = () => {
  const fetchData = async () => {
    const response = await axios.get('https://rss.kermaneno.ir/yournews/world/');
    return response.data;
  };

  return <ServicePage title="سرویس جهان" fetchData={fetchData} />;
};

const Culture: React.FC = () => {
  const fetchData = async () => {
    const response = await axios.get('https://rss.kermaneno.ir/yournews/culture/');
    return response.data;
  };

  return <ServicePage title="سرویس فرهنگ" fetchData={fetchData} />;
};

const Sport: React.FC = () => {
  const fetchData = async () => {
    const response = await axios.get('https://rss.kermaneno.ir/yournews/sport/');
    return response.data;
  };

  return <ServicePage title="سرویس ورزش" fetchData={fetchData} />;
};

const Economy: React.FC = () => {
  const fetchData = async () => {
    const response = await axios.get('https://rss.kermaneno.ir/yournews/economy/');
    return response.data;
  };

  return <ServicePage title="سرویس اقتصاد" fetchData={fetchData} />;
};

export { Politic, World, Culture, Sport, Economy };
