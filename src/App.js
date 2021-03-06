import React, { useState, useEffect } from "react";
import "./App.scss";
import Todolist from "./Components/Todolist/index";
import TodoForm from "./Components/TodoForm/index";
import PostList from "./Components/PostList/index";
import Clock from "./Components/Clock/index";
import BetterClock from "./Components/BetterClock/index";
import MagicColor from "./Components/MagicColor/index";

import ReactMemo from "./Test/ReactMemo/index";

function App() {
  // const [jobs, setJobs] = useState([
  //   { id: 1, title: "play soccer" },
  //   { id: 2, title: "coding...." },
  //   { id: 3, title: "play game" },
  //   { id: 4, title: "read book" },
  // ]);

  // function onTodoClick(item) {
  //   const index = jobs.findIndex((value) => value.id === item.id);
  //   if (index < 0) {
  //     return;
  //   }
  //   let new_jobs = [...jobs];
  //   new_jobs.splice(index, 1);
  //   setJobs(new_jobs);
  // }

  // function onHandleSubmit(item) {
  //   console.log(item);
  //   const job = { id: jobs.length + 1, ...item };
  //   let new_jobs = [...jobs];
  //   new_jobs.push(job);
  //   setJobs(new_jobs);
  // }

  const [posts, setPosts] = useState([]);
  const [statusClock, setStatusClock] = useState(true);

  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const responseParse = await response.json();
        setPosts(responseParse);
      } catch (err) {
        alert(err.message);
      }
    }

    fetchPostList();
  }, []);

  return (
    <div className="app">
      <h1>Welcome to Ha Noi</h1>
      {/* <TodoForm onHandleSubmit={onHandleSubmit}></TodoForm>
      <Todolist
        todos={jobs}
        onTodoClick={onTodoClick}
      ></Todolist>
      <PostList posts={posts} /> */}
      {/* {statusClock && <Clock />} */}
      {/* <button onClick={() => setStatusClock(false)}>Ẩn đồng hồ</button> */}
      {/* <BetterClock /> */}

      {/* <MagicColor /> */}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <ReactMemo name="Dương Văn Chiến" />
    </div>
  );
}

export default App;
