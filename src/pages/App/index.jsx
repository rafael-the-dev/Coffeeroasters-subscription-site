import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../assets/css/base.css';
import '../../assets/css/typography.css';
import '../../assets/css/general.css';
import Home from '../Home';
import About from '../About';

function App() {
    //const abountLoadble = loadable()
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/" component={Home} /> 
            </Switch>
        </Router>
    );
}

export default App;
