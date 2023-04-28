import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { viewDomain } from "../../api/viewUser";

import { domains } from "../../utils/getDomains";
const domainOptions = domains.map((domain) => {
  return {
    value: domain,
    label: domain,
  };
});

const ViewUser = () => {
  const [domain, setDomain] = useState("Select Domain");
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setDomain(e);

    const users = await viewDomain(e.value);
    setUserList(users);
  };

  return (
    <div className="w-full h-screen center flex-col bg-[#0f0f0f]">
      <ArrowLeftIcon
        className="text-white w-8 h-8 absolute top-3 left-3 cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <Select
        options={domainOptions}
        className="w-40 mb-16"
        value={domain}
        onChange={handleChange}
      />
      <div className="flex justify-center flex-col w-60 bg-white rounded-lg items-start">
        {userList.map((user, i) => (
          <p className="bg-transparent text-black my-1 mx-2" key={i}>
            {user.userName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ViewUser;
