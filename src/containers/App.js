import React, {Component, useState, useEffect} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../ErrorBoundary';

function App() {

    const [ robots, setRobots ] = useState([]);
    const [ searchfield, setSearchfield ] = useState('');
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                setRobots(users)
            })
        console.log(count)
    }, [count]);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={ filteredRobots }/>
                </ErrorBoundary>
            </Scroll>
        </div>
    )
};

export default App;