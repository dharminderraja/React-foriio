// import './UserItem.css'
import React from 'react';
import { Link } from 'react-router-dom';

class UserItem extends React.Component {
    render() {
        return (
            <Link to={`/${this.props.user.user.screen_name}`} className="card">
                <div className="image">
                    <img alt="" src={this.props.user.avatar.thumb2x ? this.props.user.avatar.thumb2x : "/default_avatar_v2.png"}/>
                </div>
                <div className="content">
                    <div className="header">{this.props.user.user.screen_name}</div>
                    <div className="meta">
                        <span className="date">{this.props.user.name}</span>
                    </div>
                </div>
            </Link>
        )
    }
}
export default UserItem;