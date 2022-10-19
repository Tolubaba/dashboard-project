import React from "react"; 
import  ReactDOM  from "react-dom";
import { Dashboard } from "./dashboard";
import {Welcome} from './welcome'
import { Hot} from './hot';
import {Sidebar} from './Sidebar'


const App = () => {
        return (
            <div style={{display: 'grid', gridTemplateColumns: '20% 80%'}}>
                
                <Sidebar />
                <div>
                <Dashboard />
                <Welcome />
                <Hot/>
                </div>
            </div>
        )
}

export default App