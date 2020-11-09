import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import ListItem from "./ListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle, faCheck } from '@fortawesome/free-solid-svg-icons'


class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'item': '',
            'item_list': []
        }


    }
    updateItem(item){
        this.setState({item:item.target.value})
    }

    deleteItem(index){
        let itemsArr = this.state.item_list;
        itemsArr.splice(index, 1)
        this.setState({item_list: itemsArr})
    }
    addItem(){
        let itemsArr = this.state.item_list;
        itemsArr.push(this.state.item)
        this.setState({item_list: itemsArr})
    }
    render(){
        let items = this.state.item_list.map((val, key)=>{
            return (
                <ul>
                    <li> <FontAwesomeIcon icon={faMinusCircle} className="minus" onClick={item=>this.deleteItem(item)}/></li>
                    <li><ListItem
                        key={key}
                        text={val}/></li>
                    <li> <FontAwesomeIcon icon={faCheck} className="check" onClick={item=>this.deleteItem(item)}/> </li>
                </ul>

            )
            }
        );
        return (
            <>
            <div className="form-container">
                <div className="input-group">
                    <input type="text"
                           placeholder="Enter Item"
                           name="add"
                           onChange={item=>this.updateItem(item)}
                    />
                    <FontAwesomeIcon icon={faPlusCircle} className="plus" onClick={this.addItem.bind(this)}/>
                </div>
            </div>
            <hr/>
            <div className="item-container">
                {items}
            </div>
            </>


    )
    };

}

export default AddItem
