import React, { useState } from 'react';
const TaskList = ({ tasks = [] }) => {
  const [taskList, setTaskList] = useState(tasks);
  return (
    <ul>
      {taskList.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
};
export default TaskList;

/*import React, { useState } from 'react';
const TaskList = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);
  const [newTask, setNewTask] = useState('');
  const addTask = (task) => {
    if (task.trim() === '') return; 
    setTaskList((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: task, completed: false },
    ]);
    setNewTask(''); 
  };
  const removeTask = (taskId) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  const toggleTaskCompletion = (taskId) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div>
      <input
        type="text"
        value={newTask}
        placeholder="Add a new task"
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') addTask(newTask);
        }}
      />
      <ul>
        {taskList.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.text}
            <button onClick={() => toggleTaskCompletion(task.id)}>Toggle</button>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;*/


