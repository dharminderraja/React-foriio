import 'components/Work.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchWork } from '../actions';
import {Link} from "react-router-dom";
import NotFound from 'components/NotFound';

class Work extends React.Component {
    componentDidMount(){
        this.props.fetchWork(this.props.match.params.id);
    }

    renderWork(){
        if (this.props.work.type === 'image'){
            return this.props.work.images.map((image) => {
                return (
                <div className="work-images" key={image.id}>
                    <img alt={image.id} src={image.urls.detail}/>
                </div>
                );
            });
        }

        else if (this.props.work.type === 'video'){
            return this.props.work.videos.map((video) => {
                return (
                <div className="work-images" key={video.id}>
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                        <img alt={video.title} src={video.picture_url}/>
                    </a>
                </div>
                );
            });
        }
        
    }

    renderCollaborators(){
        return this.props.work.credits.map((collab, i) => {
            return (
                <div className="item" key={i}>
                    <div className="ui tiny image">
                    <Link to={`/${collab.user.screen_name}`}>
                        <img alt={collab.user.screen_name} src={collab.user.avatar.thumb ? collab.user.avatar.thumb : "/default_avatar_v2.png"}/>
                    </Link>
                    </div>
                    <div className="content">
                    <Link to={`/${collab.user.screen_name}`} className="header">
                        {collab.user.name}
                    </Link>
                    <div className="description">
                        {collab.creative_roles.map((role) => <p key={role.id} className="tag">{role.name}</p>)}
                    </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        if(!this.props.work){
            return <div>No work</div>
        } else if (this.props.work === 'error'){
            return <NotFound/>;
        }

        return (
            <div className="work">
                <div className="left-side-content">
                    <div className="header">
                        <div className="ui small comments">
                            <Link to={`/${this.props.work.author.screen_name}`}>
                                <div className="comment">
                                    <div className="avatar">
                                    <img alt={this.props.work.author.screen_name} src={this.props.work.author.profile.avatar.thumb ? this.props.work.author.profile.avatar.thumb : "/default_avatar_v2.png"}/>
                                    </div>
                                    <div className="content">
                                    <div className="author">{this.props.work.author.screen_name}</div>
                                    <div className="text">
                                        {this.props.work.author.profile.profession}
                                    </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="ui">
                        {this.renderWork()}
                    </div>
                </div>
                <div className="right-side-content">
                    <div className="ui link items">
                        <div className="item">
                            <div className="middle aligned content">
                                <div className="header">{this.props.work.title}</div>
                                <p>{this.props.work.description}</p>
                            </div>
                        </div>
                        <div className="item pt60">
                            <i className="users icon"/>
                            <div className="middle aligned content">
                            <div className="header">Collaborators</div>
                            </div>
                        </div>
                        {this.renderCollaborators()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { work:state.work }
}

export default connect(mapStateToProps, {fetchWork})(Work);