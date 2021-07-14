import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Page404 } from '../pages/Error404';

import { Home } from '../pages/Home';
import { Create } from '../pages/Patients/Create';
import { Details } from '../pages/Patients/Details';
import { List } from '../pages/Patients/List';
import { SearchPage } from '../pages/Patients/Search';
import { Update } from '../pages/Patients/Update';

export function Routes(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/patients/create" exact component={Create} />
                <Route path="/patients/update/:id" exact component={Update} />
                <Route path="/patients/search" exact component={SearchPage} />
                <Route path="/patients/list" exact component={List} />
                <Route path="/patients/details/:id" exact component={Details} />
                <Route path="*" exact component={Page404} />
            </Switch>
        </BrowserRouter>
    );
}
