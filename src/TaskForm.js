import { useState } from "react";

function TaskForm({ onAdd }) {
    const [taskName, setTaskName] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        onAdd(taskName);
        setTaskName('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button className="todo-btn">+</button>
                <input type="text"
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                    placeholder="My new task..." />
            </form>
        </div>
    )
};

export default TaskForm;