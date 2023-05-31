import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/aboutFaqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";


function AppRoutingOne () {
    return (
        <Router>
            <div>
                <aside>
                    <Link to='/'>| HOME |</Link>
                    <Link to='/about'>| ABOUT |</Link>
                    <Link to='/faqs'>| FAQS |</Link>
                    <Link to='/404'>| Ruta inexistente |</Link>
                </aside>
                <main>
                    <Switch>
                        <Route exact path='/' component={ HomePage }></Route>
                        <Route path='/(about|faqs)' component={ AboutPage }></Route>
                        <Route path='/profile' component={ ProfilePage }></Route>
                        <Route path='/tasks' component={ TasksPage }></Route>
                        <Route path='/task/:id' component={ TaskDetailPage }></Route>

                        {/* 404 - Page Not Found */}
                        <Route component={ NotFoundPage }></Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}


export default AppRoutingOne;