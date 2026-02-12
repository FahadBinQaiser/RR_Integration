import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlFetch = async () => {
      try {
        const res = await fetch("http://localhost:3000/tasks");
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data: Task[] = await res.json();

        setTasks(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    urlFetch();
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="api">
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
        </div>
      ))}
    </div>
  );
}
export default TaskList;
