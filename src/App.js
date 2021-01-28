import React, { useEffect, useState } from 'react';
import { Router, Route  } from 'react-router';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter, Switch, Redirect } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import routes from 'routers/basic';
import ScrollToTop from 'routers/withRouter';
import store from 'store';
import renderRoutes from 'routers/renderRoutes';
import routes from 'routers/routerConfig';
import 'lib-flexible'; 

function App() {
  
  return (
    // <Provider store={store}>
    <div className="App">
     <BrowserRouter>
       {renderRoutes(routes)}
     </BrowserRouter>
    </div>
    // </Provider>
  );
}
export default App;

//  <BrowserRouter>
//       <Switch>

//         <ScrollToTop>
//           {renderRoutes(routes)}
//         <div>
//             <Route path="/" exact component={Home} />
//             <Route path="/card" component={Auth} />
            
//             <Redirect to="/" />
//         </div>
//         </ScrollToTop>
//         </Switch>

//       </BrowserRouter> 