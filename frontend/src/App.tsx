import { Button, Card, DarkThemeToggle, Flowbite } from 'flowbite-react';
import { useState } from 'react';

export type Task = {
    id: string;
    name: string;
    description: string;
    taskType: string;
};

function App() {
    const taskTypes = ['To Do', 'In Progress', 'Done'];
    const [tasks, setTasks] = useState<Task[]>([]);
    return (
        <Flowbite>
            <DarkThemeToggle />
            <div className="mx-auto">
                <h1 className="text-center text-7xl">Task Manager</h1>
                <Button
                    gradientDuoTone="purpleToBlue"
                    onClick={() => {
                        const task = {
                            id: '1',
                            name: 'Task 1',
                            description: 'This is a task',
                            taskType: 'To Do',
                        };
                        setTasks([...tasks, task]);
                    }}
                >
                    Add Task
                </Button>
                <ul className="flex flex-row">
                    {taskTypes.map((taskType) => (
                        <li className="mx-auto " key={taskType}>
                            <Card className="">
                                <h2 className="text-2xl">{taskType}</h2>
                                <ul>
                                    {tasks &&
                                        tasks.map((task) => (
                                            <li key={task.id}>
                                                <Card className="bg-gray-100">
                                                    <h3 className="text-xl">
                                                        {task.name}
                                                    </h3>
                                                    <p>{task.description}</p>
                                                </Card>
                                            </li>
                                        ))}
                                </ul>
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        </Flowbite>
    );
}

export default App;
