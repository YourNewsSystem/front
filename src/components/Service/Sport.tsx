// src/components/ServicePage/Sport.tsx
import React from 'react';
import axios from 'axios';
import ServicePage from '@/pages/Service.page';

const Sport: React.FC = () => {
  const fetchData = async () => {
    const response = await axios.get('https://rss.kermaneno.ir/yournews/sport/');
    return response.data;
  };

  return <ServicePage title="سرویس ورزش" fetchData={fetchData} />;
};

export default Sport;
