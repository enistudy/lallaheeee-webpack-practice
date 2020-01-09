import React from 'react';
import { Header } from 'semantic-ui-react';
import image from '../img/screen1.png'

import Layout from './Layout';

const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">Dynamic Page</Header>
      <img src={image} alt="이미지 테스트"/>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default DynamicPage;
