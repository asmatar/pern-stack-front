import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { RestaurantContextProvider } from './context/restaurantContext';
import Home from './routes/Home';
import RestaurantDetail from './routes/RestaurantDetail';
import UpdatePage from './routes/UpdatePage';

function App() {
  return (
    <RestaurantContextProvider>
      <div className='container'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/restaurants/:id/update'>
              <UpdatePage />
            </Route>
            <Route exact path='/restaurants/:id'>
              <RestaurantDetail />
            </Route>
          </Switch>
        </Router>
      </div>
    </RestaurantContextProvider>
  );
}

export default App;
