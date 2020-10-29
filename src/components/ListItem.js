import React, {Component} from 'react'

export default class ListItem extends Component {
    render() {
        return(
            <div className="item" onClick={this.props.deleteMethod}>
                {this.props.text}
            </div>
        )
    }
}