import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout.tsx';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<div>Homepage</div>} />
        <Route path='/teachers' element={<div>Teachers</div>} />
        <Route path='/*' element={<div>404</div>} />
      </Routes>
    </Layout>
  );
};

export default App;
