import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Message from './components/Message';
import FetchData from './components/FetchData';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/message' component={Message} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
  </Layout>
);
