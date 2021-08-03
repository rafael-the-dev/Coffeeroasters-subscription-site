import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../assets/css/base.css';
import '../../assets/css/typography.css';
import Home from '../Home';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} /> 
            </Switch>
        </Router>
    );
}

export default App;
