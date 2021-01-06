import { Redirect } from 'react-router';
// import Root fro
import Home  from '../components/home';
import Auth  from '../components/auth';
import News from '../components/news';

// eslint-disable-next-line import/no-anonymous-default-export
const routes =  [
  {
    component: Home,
    routes: [
      { 
        path: '/',
        component: Home,
        exact: true,
      },
      {
        path: '/auth',
        component: Auth,
        routes: [
          {
            path: '/auth/message',
            component: Auth,
          }
        ]
      },
      {
        path: '/news',
        component: News,
        routes: [
          {
            path: '/news/:id',
            component: News,
          }
        ]
      }
    ]
  }
]

export default routes;