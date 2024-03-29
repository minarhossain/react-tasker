import React, { useState } from 'react';
import SearchTask from './SearchTask';
import TaskActions from './TaskActions';
import TaskList from './TaskList';


const defaultTask = {
    "id": crypto.randomUUID(),
    "title": "Learn React Native",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ad.",
    "tags": ["web", "react", "web"],
    "priority": "High",
    "isFavorite": true,
}
const TaskBoard = () => {

    const [tasks, setTasks] = useState([defaultTask]);

    return (
        <section className="mb-20" id="tasks">
            <div className="container">

                <div className="p-2 flex justify-end">
                    <SearchTask />
                </div>

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions />
                    <TaskList tasks={tasks} />
                </div>

            </div>
        </section>
    );
};

export default TaskBoard;