import * as React from "react";
import {
  Admin,
  Resource,
  combineDataProviders,
  fetchUtils,
  CustomRoutes
} from 'react-admin';

import { Route } from 'react-router-dom';
import authProvider from "./authProvider";
import simpleRestProvider from 'ra-data-simple-rest';

import { UserList } from './users';
import UserIcon from '@mui/icons-material/People';

import { Dashboard } from './Dashboard';
import { UserProfile } from './user';
import { ContractCreate } from './NewContract';
import { createBrowserHistory } from 'history';


const fetchJson = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set( 'Access-Control-Expose-Headers', 'Content-Range');
  options.headers.set(
    'Access-Control-Expose-Headers', 'X-Custom-Header', 
    'Content-Range', 'users 0-10/10',
    );
  return fetchUtils.fetchJson(url, options);
}

// json placeholder data provider
// const dataProvider1 = jsonServerProvider('https://jsonplaceholder.typicode.com');

// db.json local server data provider
const dataProvider2 = simpleRestProvider('http://localhost:5000', fetchJson, 'X-Total-Count', 'Content-Range', 'users 0-10/10')

const history = createBrowserHistory();


/*
<Admin> component creates an application with its own state, routing, and controller logic. 
<Admin> requires only a dataProvider prop, and at least one child <Resource> to work
<Admin> children can be <Resource> and <CustomRoutes> elements.

<Resource> components define the CRUD routes of a react-admin application.
*/

const App = () => (
      <Admin
        dashboard={Dashboard}
        /* dataProvider={dataProvider1} */
        dataProvider={dataProvider2}
        authProvider={authProvider}
        requireAuth
        basename="/admin" // make all routes and links relative to a “base” portion of the URL pathname 
        history={history} 
      >
        <Resource
          name="users"
          list={UserList}
          icon={UserIcon}
          show={UserProfile}
          create={ContractCreate}
          /* create={PostCreate} edit={PostEdit}  */
        />
        {/* <Resource name="contracts" create={ContractCreate} /> */}
        <CustomRoutes>
            <Route path="/new-contract" element={<ContractCreate />} />
        </CustomRoutes>
    </Admin>
);

export default App;
