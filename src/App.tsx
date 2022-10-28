import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";

type showType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [show, setShow] = useState<showType[]>([])
    const useShowUp = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setShow(json))
    }

    const clean = () => {
        setShow([])
    }

    return (
        <div className="App">
            <Button name={'show me'} callBack={useShowUp}/>
            <Button name={'clean me'} callBack={clean}/>
            <ul>
                {show.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <span>{`${el.completed}`}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
