import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import DashboardPage from '../components/DashboardPage';
import AddTimelinePage from '../components/timeline/AddTimelinePage';
import EditTimelinePage from '../components/timeline/EditTimelinePage';
import ViewTimelinePage from '../components/timeline/ViewTimelinePage';
import AddMemoryPage from '../components/memory/AddMemoryPage';
import EditMemoryPage from '../components/memory/EditMemoryPage';
import ViewMemoryPage from '../components/memory/ViewMemoryPage';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/add_timeline" component={AddTimelinePage} />
        <Route path="/edit_timeline/:id" component={EditTimelinePage} />
        <Route path="/view_timeline/:id" component={ViewTimelinePage} />
        <Route path="/add_memory" component={AddMemoryPage} />
        <Route path="/edit_memory/:id" component={EditMemoryPage} />
        <Route path="/view_memory/:id" component={ViewMemoryPage} />
        <Route path="/sign_in" component={SignIn} />
        <Route path="/sign_up" component={SignUp} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;