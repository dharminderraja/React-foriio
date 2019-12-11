import 'components/UserList.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import {Link} from "react-router-dom";
import { Pagination } from 'semantic-ui-react';
import WorkItem from 'components/WorkItem';

const UsersList = ({users, fetchUsers}) => {
    const [activePage, setActivePage] = useState(1);
    const [itemToDisplay] = useState(10);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const renderWorkItem = (works) => {
        return works.map(work => {
            return (
            <Link to={`/works/${work.id}`} key={work.id}>    
                <WorkItem work={work}/>
            </Link>
            );
        })
    }

    const onChange = (data) => {
        setActivePage(data.activePage);
    }

    const indexOfLastPost = activePage * itemToDisplay;
    const indexOfFirstPost = indexOfLastPost - itemToDisplay;
    const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

    const renderList = () =>{
        return currentUsers.map(user => {
            return (
                <div key={user.id} className="row item">
                    <div className="four wide column">
                        <Link to={`/${user.screen_name}`}>
                            <div className="ui card">
                                <div className="image">
                                    <img alt={user.screen_name} src={user.avatar ? user.avatar : "default_avatar_v2.png"}/>
                                </div>
                                <div className="content">
                                    <div className="header">{user.screen_name}</div>
                                    <div className="meta">
                                        <span className="date">{user.profession}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="twelve wide column">
                        <div className="ui small images">{renderWorkItem(user.works)}</div>
                    </div>
                </div>
                
            )
        })
    }

    if(!users){
        return <div>No user</div>;
    }

    return (
        <div className="users-list ui grid">
            {renderList()}
            <div className="paging">
                <Pagination 
                            activePage={activePage}
                            onPageChange={(e,data) => onChange(data)}
                            totalPages={users.length/itemToDisplay}
                            ellipsisItem={null}
                        />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { users:state.users }
}

export default connect(mapStateToProps, {fetchUsers})(UsersList);