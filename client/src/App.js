import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './containers/List/List';
import Add from './containers/Add/Add';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/add" exact component={Add} />
        <Route path="/" exact component={List} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
