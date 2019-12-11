import 'components/Works.css'
import React from 'react';
import { connect } from 'react-redux';
import { fetchWorks } from '../actions';
import {Link} from "react-router-dom";
import WorkItem from 'components/WorkItem'

class Works extends React.Component {
    componentDidMount(){
        this.props.fetchWorks(this.props.screenName);
    }

    renderList(){
        return this.props.works.map(work => {
            return (
                <div key={work.id}>
                     <Link to={`/works/${work.id}`} key={work.id}>    
                        <WorkItem work={work}/>
                    </Link>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="works">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { works:state.works }
}

export default connect(mapStateToProps, {fetchWorks})(Works);