import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlFetch = async () => {
      try {
        const res = await fetch("http://localhost:3000/tasks");
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await res.json();

        setTasks(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    urlFetch();
  }, []);

  return (
    <div className="api">
      {!loading &&
        !error &&
        tasks.length > 0 &&
        tasks.map((task) => {
          <div key={task.id}>
            <h1>{task.title}</h1>
          </div>;
        })}
    </div>
  );
}
export default App();
