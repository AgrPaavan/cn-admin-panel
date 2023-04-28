import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { add } from "../../api/addUser";

import { domains } from "../../utils/getDomains";
const domainOptions = domains.map((domain) => {
  return {
    value: domain,
    label: domain,
  };
});

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [domain, setDomain] = useState("Select Domain");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userName: username,
      userDomain: domain.value,
    };

    toast.promise(add(newUser), {
      loading: "Adding User...",
      success: "User Added Successfully!",
      error: "Error Adding User!",
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
            placeholder="Username"
            value={username}
            onChange={(e) => {
              const words = e.target.value.split(" ").map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
              });
              setUsername(words.join(" "));
            }}
            className="input w-full"
          />
          <Select
            isSearchable
            loadingMessage={"Loading..."}
            onChange={(e) => {
              setDomain(e);
            }}
            value={domain}
            options={domainOptions}
            className="w-full"
          />
          <button className="btn mt-10" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
