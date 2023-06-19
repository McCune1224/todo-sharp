import { Button, Card, DarkThemeToggle, Flowbite } from 'flowbite-react';
import { useState } from 'react';

export type Task = {
    id: string;
    name: string;
    description: string;
    taskType: string;
};

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <Flowbite>
            <DarkThemeToggle />
            <div className="mx-auto">
                <h1 className="text-center text-7xl">Task Manager</h1>
            </div>
        </Flowbite>
    );
}

export default App;
