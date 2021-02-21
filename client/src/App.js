import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './containers/List/List';
import Add from './containers/Add/Add';
import Create from './containers/Create/Create';
import Done from './containers/Done/Done';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/Create' component={Create} />
        <Route path='/add' component={Add} />
        <Route path='/done' component={Done} />
        <Route path='/' exact component={List} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
