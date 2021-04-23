import * as pages from '@pages';
import { RouteProps as ReactDOMRouterProps } from 'react-router-dom';

interface RouteProps extends ReactDOMRouterProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
  title: string;
}

export const privateRouteList: RouteProps[] = [];

export const publicRouteList: RouteProps[] = [
  {
    path: '/login',
    component: pages.Login,
    exact: true,
    title: 'Login',
  },
  {
    path: '/essay', // FIXME: deve ser /essay/${id}
    component: pages.EssayDetails,
    exact: true,
    title: 'Redação em Detalhes',
  },
  {
    path: '/essayRating', // FIXME: deve ser /essay/${id}
    component: pages.EssayRating,
    exact: true,
    title: 'Redação em Detalhes',
  },
  {
    path: '/register',
    component: pages.Register,
    exact: true,
    title: 'Cadastro',
  },
];
