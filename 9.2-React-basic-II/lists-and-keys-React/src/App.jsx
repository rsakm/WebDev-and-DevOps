import React from "react";

const App=()=>{

  const todos = [{
    title:"Go to Gym",
    done:false
  },
{
  title:"Solve DSA problem",
  done:true,
},{
  title:"Practice web dev on a project",
  done:false
}];

const todosComponents = todos.map((todo, idx)=> <Todo title = {todo.title} done = {todo.done} key={idx} > </Todo>)


  return (
    <div>
      {todosComponents}
    </div>
  );
};

function Todo({title,done}){

  return <div>
    {title}- {done?"Done!":"Not done!"}
  </div>
}

export default App;