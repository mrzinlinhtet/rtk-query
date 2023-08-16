import { Route } from 'react-router-dom';
import { Routes } from "react-router-dom";
import "./App.css";
import Blogs from './Blogs';
import Details from './Details';
import Create from './Create';
import Edit from './Edit';


const App = () => {
  // console.log(blogs);
  // console.log(isFetching);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/blogs/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
