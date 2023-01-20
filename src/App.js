import { StudentList } from "./components";
import { Navbar } from "./components";
import { CreateForm } from "./components";
import { Route, Routes } from "react-router-dom";
import './App.css';

export const App = () => {
  return (
    <div>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/create-student" element={<CreateForm />} />
          <Route path="/edit-student/:Id/:name/:parc" element={<CreateForm />} />
        </Routes>
      </div>
    </div>
  );
};
