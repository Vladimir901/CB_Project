import React from "react";
import "./addTask.css"
import {Overlay} from 'react-native-elements';

const AddTask = ({isVisible}) => {


    return (
        <>
        <Overlay isVisible={true}>
        <div className="overlay">
            Привет
        </div>
        </Overlay>
        </>
    )
}

export default AddTask