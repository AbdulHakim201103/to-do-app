import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Pages/Home/Navbar/Navbar";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/home' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
