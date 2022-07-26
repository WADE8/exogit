import React from 'react';
import { Routes, Route } from 'react-router-dom';
import rootRoutes from './routes';

const App = () => {
  return (
    <Routes>
      {rootRoutes.map((item, index) => {
        return (
          <Route
            path={item.path}
            element={item.element}
            key={index}
            caseSensitive
          />
        );
      })}
    </Routes>
  );
};

export default App;
