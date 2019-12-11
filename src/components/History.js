import 'components/History.css'
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WorkItem from 'components/WorkItem';
import UserItem from 'components/UserItem';

class History extends React.Component {

    renderUsers(){
        if (this.props.history.users.length === 0){
            return <h5 className="mt60">You havent looked at any users yet... please got to users page and check out some new content</h5>
        }
        return this.props.history.users.map((user) => {
            return (
                    <UserItem user={user} key={user.id}/>
            );
        })
    }


    renderWorks(){
        if (this.props.history.works.length === 0){
            return <h5>You havent looked at any work yet... please got to users page and check out some new content</h5>
        }
        return this.props.history.works.map((work) => {
            return (
                <Link to={`/works/${work.id}`} key={work.id}>
                    <WorkItem work={work} key={work.id}/>
                </Link>
            );
        });
    }



    render(){
        return (
            <div className="history">
                <h2>History</h2>
                <div className="users-history">
                    <h4>Users</h4>
                    <div className="ui link cards">
                        {this.renderUsers()}
                    </div>
                </div>
                <div className="works-history">
                    <h4>Works</h4>
                    {this.renderWorks()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { history:state.history }
}

export default connect(mapStateToProps)(History);