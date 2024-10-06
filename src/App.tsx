import { Route, Routes } from 'react-router-dom';

import Layout from './layout/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import TeachersPage from './pages/TeachersPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/teachers' element={<TeachersPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
