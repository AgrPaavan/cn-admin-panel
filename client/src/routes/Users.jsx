import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen center flex-col bg-[#0f0f0f]">
        <ArrowLeftIcon
          className="text-white w-8 h-8 absolute top-3 left-3 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <Link to="/users/addUser">
          <button className="btn">Add Users</button>
        </Link>{" "}
        <Link to="/users/viewUser">
          <button className="btn">View User</button>
        </Link>{" "}
      </div>
    </>
  );
};

export default Users;
