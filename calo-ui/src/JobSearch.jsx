import React, { useEffect, useState } from "react";
import { Space, Input, Button } from "antd";
import axios from "axios";

const JobSearch = () => {
  const [job, setJob] = useState(null);
  const [input, setInput] = useState("");

  const fetchJob = async () => {
    const { data } = await axios.get(`http://localhost:8080/api/job/${input}`);
    setJob(data);
  };

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <>
      <Space
        style={{
          width: "80%",
          justifyContent: "center",
          marginBottom: "5px",
        }}
      >
        <Input
          placeholder="Search by Job ID"
          value={input}
          onChange={handleInputChange}
        />
        <Button type="primary" onClick={fetchJob}>
          Search
        </Button>
      </Space>
      {job && (
        <>
          {job === "pending" && <span>Pending...</span>}
          {job.error && <span>Error: {job.error}</span>}
          {!job.error && job !== "pending" && (
            <img src={job} alt="Unsplash" height="200px" width="200px" />
          )}
        </>
      )}
    </>
  );
};

export default JobSearch;
