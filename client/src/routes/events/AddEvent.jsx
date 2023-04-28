import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { add } from "../../api/addEvent";

const AddEvent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState(
    new Date().getFullYear() +
      "-" +
      new Date().getMonth() +
      "-" +
      new Date().getDate(),
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      eventName: name,
      eventDate: date,
      eventContent: { invitees: ["p1", "p2"] },
    };

    toast.promise(add(newEvent), {
      loading: "Adding Event...",
      success: "Event Added Successfully!",
      error: "Error Adding Event!",
    });
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <div className="w-full h-screen center flex-col bg-[#0f0f0f] text-white">
        <ArrowLeftIcon
          className="text-white w-8 h-8 absolute top-3 left-3 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h2 className="my-5 text-2xl">Add User</h2>
        <form className="center flex-col text-black" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Name"
            value={name}
            onChange={(e) => {
              const words = e.target.value.split(" ").map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
              });
              setName(words.join(" "));
            }}
            className="input w-full"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input w-full"
          />
          <button className="btn mt-10" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEvent;
