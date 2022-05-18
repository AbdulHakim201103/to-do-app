import React from 'react';
import TaskBord from '../TaskBord/TaskBord';
import TaskField from '../TaskField/TaskField';

const Home = () => {
    return (
        <div className="container mx-auto">
            <TaskField></TaskField>
            <TaskBord></TaskBord>
        </div>
    );
};

export default Home;