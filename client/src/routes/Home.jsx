import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-full center bg-[#0f0f0f]">
      <div className="flex flex-col justify-center items-center bg-gray-700 rounded-lg py-20 px-16 shadow-lg shadow-gray-400">
        <Link to="/users">
          <button className="btn">Users</button>
        </Link>
        <Link to="/events">
          <button className="btn">Events</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
