import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (tasks.length === 0) return;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        //new const task
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        setTasks(tasks);
    }, []);


    function addTask(name) {
        setTasks(prev => {
            return [...prev, { name: name, done: false }];
        });
    }

    function removeTask(taskIndexRemove) {
        setTasks(prev => {
            return prev.filter((taskObject, index) => index !== taskIndexRemove);
        });
    }

    function updateTaskDone(taskIndex, newDone) {
        setTasks(prev => {
            const newTasks = [...prev];
            newTasks[taskIndex].done = newDone;
            return newTasks;
        });
    }

    const numberComplete = tasks.filter(t => t.done).length;
    const numberTotal = tasks.length;

    function getMessage() {
        const percentage = numberComplete / numberTotal * 100;
        if (percentage === 0) {
            return 'Lets start!';
        }
        if (percentage === 100) {
            return 'Nice job for today 🍅';
        }
        if (percentage >= 75) {
            return 'Almost done 🥁'
        }
        return 'Keep it going...';
    }

    return (
        <div className="todo-list">
            <h1>{numberComplete}/{numberTotal} Complete</h1>
            <h2>{getMessage()}</h2>
            <TaskForm onAdd={addTask} />
            {tasks.map((task, index) => (
                <Task {...task}
                    onTrash={() => removeTask(index)}
                    onToggle={done => updateTaskDone(index, done)}
                />
            ))}
        </div>
    )
};

export default TodoList;