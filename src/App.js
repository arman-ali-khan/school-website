
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Error from "./components/Error";
import Home from "./components/Home";
import School from "./components/School";
import Teachers from "./components/Teachers";
import Root from "./Root";

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Root></Root>, 
    errorElement: <Error />,
    children:[
      {path:'/', element:<Home></Home>},
      {path:'school', element:<School/>,loader:()=> fetch('school.json')},
      {path:'teachers',loader:()=> fetch('teachers.json'), element:<Teachers/>},
      {path:'about', element:<About/>}
    ]}
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
