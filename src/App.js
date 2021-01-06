import { Router, Route,  } from 'react-router';
import { HashRouter, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { renderRoutes} from 'react-router-config';
import routes from './routers/basic';
import ScrollToTop from './routers/withRouter';
import Auth from './components/auth';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ScrollToTop> */}
          {renderRoutes(routes)}
        {/* <div>
            <Route path="/" exact component={Home} />
            <Route path="/card" component={Auth} />
            
            <Redirect to="/" />
        </div> */}
        {/* </ScrollToTop> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
