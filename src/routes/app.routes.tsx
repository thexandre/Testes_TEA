// app.routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Forms_tea from '../pages/Forms_tea';
import Forms_tea_2 from '../pages/Forms_tea_2';
import Forms_tea_3 from '../pages/Forms_tea_3';

const AppRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/RAADS-R" element={<Forms_tea />} />
      <Route path="/Forms_tea_2" element={<Forms_tea_2 />} />
      <Route path="/Forms_tea_3" element={<Forms_tea_3 />} />
      
    </Routes>
  </Layout>
);

export default AppRoutes;