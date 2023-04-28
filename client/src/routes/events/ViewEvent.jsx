import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { view } from "../../api/viewEvents";

const ViewEvent = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const getEvents = async () => {
    const event = await view();
    setEvents(event);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="w-full h-screen center flex-col bg-[#0f0f0f]">
      <ArrowLeftIcon
        className="text-white w-8 h-8 absolute top-3 left-3 cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <div className="flex justify-center flex-col w-60 bg-white rounded-lg items-start">
        {events.map((event, i) => (
          <p className="bg-transparent text-black my-1 mx-2" key={i}>
            {event.eventDate}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ViewEvent;
