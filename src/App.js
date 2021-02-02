import 'antd/dist/antd.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import renderRoutes from 'routers/renderRoutes';
import routes from 'routers/routerConfig';
import 'lib-flexible'; 

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;

