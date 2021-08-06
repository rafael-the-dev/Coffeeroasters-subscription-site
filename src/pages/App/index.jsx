import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import '../../assets/css/base.css';
import '../../assets/css/typography.css';
import '../../assets/css/general.css';
import Home from '../Home';

function App() {
    const AboutComponent = loadable(() => import('../About'));
    const SubscriptionComponent = loadable(() => import('../Subscription'));

    return (
        <Router >
            <Switch>
                <Route exact path="/plan" component={SubscriptionComponent} />
                <Route exact path="/about" component={AboutComponent} />
                <Route path="/" component={Home} /> 
            </Switch>
        </Router>
    );
}

export default App;
