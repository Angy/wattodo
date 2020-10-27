import React, { Component } from 'react';


class AddItem extends Component {
    render(){
        return (
            <div>
                <form method="post">
                    <input type="text" placeholder="Enter Item" name="add"/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    };

}

export default AddItem
