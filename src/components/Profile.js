import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { fetchUserProfile } from '../actions';
import Works from 'components/Works';
import NotFound from 'components/NotFound';

class Profile extends React.Component {
    componentDidMount(){
        this.props.fetchUserProfile(this.props.match.params.user);
    }

    renderLocation(location)
    {
        if (location){
            return (
                <div className="ui item right floated">
                    <i className="location arrow icon"></i>
                    {this.props.profile.location}
                </div>
            );
        }

        return "";
        
    }

    render() {
        if(!this.props.profile){
            return <div>No user</div>;
        } else if (this.props.profile === 'error'){
            return <NotFound />;
        }

        return (
            <div>
                <div className="ui centered card">
                    <div className="image">
                        <img alt="" src={this.props.profile.avatar.thumb2x ? this.props.profile.avatar.thumb2x : "default_avatar_v2.png"}/>
                    </div>
                    <div className="content">
                        <div className="header">{this.props.profile.user.screen_name}</div>
                        <div className="meta">
                            <span className="date">{this.props.profile.name}</span>
                        </div>
                        <div className="description">
                            {this.props.profile.bio}
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui item left floated">
                            <i className="user icon"></i>
                            {this.props.profile.profession.length > 10 ? this.props.profile.profession.substring(0, 10) + "..." : this.props.profile.profession}
                        </div>
                        {this.renderLocation(this.props.profile.location)}
                    </div>
                </div>
                <div className="ui segment">
                    <Works screenName={this.props.match.params.user}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { profile:state.profile }
}

export default connect(mapStateToProps, {fetchUserProfile})(withRouter(Profile));