import AppRoot from './components/AppRoot.js';
import FetchUsersButton from './components/FetchUsersButton/FetchUsersButton';
import UsersList from './components/UsersList/UsersList';

export default [
  {
    component: AppRoot,
    routes: [
      {
        path: "/",
        exact: true,
        component: FetchUsersButton
      },
      {
        path: '/users',
        ...UsersList
      }
    ]
  }
];
