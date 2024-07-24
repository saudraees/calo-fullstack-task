import React, { useEffect, useState } from "react";
import { Space, Table, Button } from "antd";
import axios from "axios";

const Job = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const { data } = await axios.get("http://localhost:8080/api/job");
    const newJobs = data.map((job, idx) => ({
      key: `${idx + 1}`,
      id: idx + 1,
      result: job,
    }));
    setJobs(newJobs);
  };

  useEffect(() => {
    fetchJobs();

    const interval = setInterval(fetchJobs, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const columns = [
    {
      title: "Job ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "result",
      render: (url) =>
        url === "pending" ? (
          "Pending"
        ) : (
          <img src={url} alt="unsplash" height="200px" width="200px" />
        ),
    },
  ];

  const handleCreateJob = async () => {
    const { data } = await axios.post("http://localhost:8080/api/job");
    const newJob = {
      key: `${jobs.length + 1}`,
      id: data,
      result: "pending",
    };
    setJobs([...jobs, newJob]);
  };

  return (
    <Space
      direction="vertical"
      style={{
        margin: "10px",
        padding: "5px",
        width: "80%",
        border: "1px solid black",
      }}
    >
      <Space direction="horizontal">
        <Button
          onClick={handleCreateJob}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Create Job
        </Button>
        <Button
          onClick={fetchJobs}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Refresh
        </Button>
      </Space>
      {!jobs.length ? (
        <div>No Jobs Found</div>
      ) : (
        <Table columns={columns} dataSource={jobs} />
      )}
    </Space>
  );
};

export default Job;
