import { Route, Switch } from 'react-router';
import BarabomPage from './pages/BarabomPage';
import CallbackPage from './pages/CallbackPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route path="/" component={BarabomPage} exact />
      <Route path="/auth" component={CallbackPage} exact />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
