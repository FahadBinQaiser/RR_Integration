import { useEffect, useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const urlFetch = async () => {
      try {
        const res = await fetch("http://localhost:3000/tasks");
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.log("Failed fetching", error);
      }
    };

    urlFetch();
  }, []);
}
