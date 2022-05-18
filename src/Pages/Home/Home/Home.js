import React from 'react';
import Footer from '../../Footer/Footer';
import TaskBord from '../TaskBord/TaskBord';
import TaskField from '../TaskField/TaskField';

const Home = () => {
    return (
        <div className="container mx-auto">
            <TaskField></TaskField>
            <TaskBord></TaskBord>
            <Footer></Footer>
        </div>
    );
};

export default Home;