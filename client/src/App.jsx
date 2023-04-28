import { Route, Routes } from "react-router-dom";

import Events from "./routes/Events";
import Home from "./routes/Home";
import Users from "./routes/Users";
import AddEvent from "./routes/events/AddEvent";
import ViewEvent from "./routes/events/ViewEvent";
import AddUser from "./routes/users/AddUser";
import ViewUser from "./routes/users/ViewUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="users" element={<Users />} />
        <Route path="users/addUser" element={<AddUser />} />
        <Route path="users/viewUser" element={<ViewUser />} />
        <Route path="events" element={<Events />}></Route>
        <Route path="users/addEvent" element={<AddEvent />} />
        <Route path="users/viewEvent" element={<ViewEvent />} />
      </Routes>
    </>
  );
}

export default App;
