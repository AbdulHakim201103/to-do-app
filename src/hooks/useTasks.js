import { useEffect, useState } from "react"

const useTasks = () =>{
    const [tasks, setTasks] = useState ([]);
    useEffect(()=>{
        const url = "https://fast-savannah-48663.herokuapp.com/tasks"
        fetch (url)
        .then (res => res.json())
        .then (data => setTasks(data));
    },[tasks]);
    return [tasks, setTasks];
}
export default useTasks;