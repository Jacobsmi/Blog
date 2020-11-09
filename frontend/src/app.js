import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Blog from './components/blog/Blog';

const app = () =>{
    return (
        <div className='app'>
            <Router>
                <Switch>
                    <Route exact path ='/'>
                        <Blog />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default app;