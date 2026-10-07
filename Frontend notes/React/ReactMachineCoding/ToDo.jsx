// import React, { useState } from 'react';

// const TodoApp = () => {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState('');
//     const [editIndex, setEditIndex] = useState(null);
//     const [editTask, setEditTask] = useState('');

//     const addTask = () => {
//         if (newTask.trim() !== '') {
//             setTasks([...tasks, { text: newTask, completed: false }]);
//             setNewTask('');
//         }
//     };

//     const deleteTask = (index) => {
//         const newTasks = tasks.filter((_, i) => i !== index);
//         setTasks(newTasks);
//     };

//     const editTaskHandler = (index) => {
//         setEditIndex(index);
//         setEditTask(tasks[index].text);
//     };

//     const saveEditedTask = () => {
//         if (editTask.trim() !== '') {
//             const newTasks = tasks.map((task, index) =>
//                 index === editIndex ? { ...task, text: editTask } : task
//             );
//             setTasks(newTasks);
//             setEditIndex(null);
//             setEditTask('');
//         }
//     };

//     return (
//         <div>
//             <h1>To-Do App</h1>
//             <input
//                 type="text"
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//                 placeholder="Add a new task"
//             />
//             <button onClick={addTask}>Add Task</button>
//             <ul>
//                 {tasks.map((task, index) => (
//                     <li key={index}>
//                         {editIndex === index ? (
//                             <>
//                                 <input
//                                     type="text"
//                                     value={editTask}
//                                     onChange={(e) => setEditTask(e.target.value)}
//                                 />
//                                 <button onClick={saveEditedTask}>Save</button>
//                             </>
//                         ) : (
//                             <>
//                                 {task.text}
//                                 <button onClick={() => editTaskHandler(index)}>Edit</button>
//                                 <button onClick={() => deleteTask(index)}>Delete</button>
//                             </>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodoApp;


import React, { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState('');
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const handleAdd = () => {
        if (tasks.trim() !== '') {
            setTodos([...todos, tasks]);
            setTasks('');
        }
    };

    const handleDelete = (index) => {
        const updatedData = todos.filter((_, i) => i !== index);
        setTodos(updatedData);
        if (editIndex === index) {
            setEditIndex(null);
            setEditText('');
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditText(todos[index]);
    };

    const handleUpdate = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = editText;
        setTodos(updatedTodos);
        setEditIndex(null);
        setEditText('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Todo App (Inline Edit)</h1>

            <input
                type="text"
                placeholder="Enter task"
                value={tasks}
                onChange={(e) => setTasks(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>

            <div style={{ marginTop: '20px' }}>
                {todos.map((todo, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => handleUpdate(index)}>Save</button>
                                <button onClick={() => setEditIndex(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {todo}
                                <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>
                                    Delete
                                </button>
                                <button onClick={() => handleEdit(index)} style={{ marginLeft: '5px' }}>
                                    Edit
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
