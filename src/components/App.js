import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import history from '../history';
import UsersList from 'components/UsersList';
import Profile from 'components/Profile';
import Work from 'components/Work';
import History from 'components/History'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Router history={history}>
                    <div className="ui borderless main menu">
                        <div className="ui text container">
                            <div className="header item">
                                Forrio
                            </div>
                            <Link to={'/'} className="item">Users</Link>
                            <Link to={'/userandwork/history'} className="item">History</Link>
                        </div>
                    </div>
                    <div className="ui container segment">
                            <Route path="/" exact render={(props) => <UsersList {...props} />} />
                            <Route path="/:user" exact render={(props) => <Profile {...props} />} />
                            <Route path="/works/:id" exact render={(props) => <Work {...props} />} />
                            <Route path="/userandwork/history" exact render={(props) => <History {...props} />} />
                    </div>
                </Router>
            </div>
        );
    }
};

export default App;