import 'components/WorkItem.css'
import React from 'react';

class WorkItem extends React.Component {
    render() {
        return (
            <div className="work-item">
                <div className="img" style={{'backgroundImage': `url(${this.props.work.thumbnail})`}} >
                </div>
            </div>
        )
    }
}
export default WorkItem;