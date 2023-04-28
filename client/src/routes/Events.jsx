import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen center flex-col bg-[#0f0f0f]">
        <ArrowLeftIcon
          className="text-white w-8 h-8 absolute top-3 left-3 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <Link to="/users/addEvent">
          <button className="btn">Add Events</button>
        </Link>{" "}
        <Link to="/users/viewEvent">
          <button className="btn">View Events</button>
        </Link>{" "}
      </div>
    </>
  );
};

export default Events;
