import React, { Component } from 'react';
import getCurrentDate from './components/Date'
import './App.css';
import AddItem from "./components/AddItem";

class App extends Component {
    render(){
        return (
            <div className="container">
                <h1>{getCurrentDate()}</h1>
                <div className="App">

                    <AddItem/>
                </div>
            </div>
        );
    }
}

export default App;
