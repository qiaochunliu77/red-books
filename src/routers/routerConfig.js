import { Redirect } from 'react-router';
import Home  from 'components/home';
import Auth  from 'components/auth';
import News from 'components/news';
import Layout from './BlankLayout';

const routes =  [
  {
    component: Layout,
    routes: [
      { 
        path: '/',
        exact: true,
        // eslint-disable-next-line react/react-in-jsx-scope
        render: () => <Redirect to='/home' />,
      },
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/auth',
        component: Auth,
        routes: [
          {
            path: '/auth',
            component: Auth,
          },
        ],
      },
      {
        path: '/news',
        component: News,
        routes: [
          {
            path: '/news/:id',
            component: News,
          },
        ],
      },
    ],
  },
];

export default routes;