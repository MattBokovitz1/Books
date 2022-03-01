import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, PageHeader } from "antd";

export default function BooksPotential() {
  const [potential, setPotential] = useState([]);
  const getBooksPotential = () => {
    axios
      .get("http://localhost:5002/potential/")
      .then((res) => {
        setPotential(res.data.data);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBooksPotential();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      filterMode: "tree",
      // render: (text) => <a>{text}</a>,
      filterSearch: true,
      onFilter: (value, record) => record.title.includes(value),
      width: "40%",
    },
    {
      title: "Author",
      dataIndex: "author",
      filters: [
        {
          text: "CS Lewis",
          value: "CS Lewis",
        },
      ],
      onFilter: (value, record) => record.author.startsWith(value),
      filterSearch: true,
      width: "30%",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      onFilter: (value, record) => record.topic.startsWith(value),
      filterSearch: true,
      width: "20%",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      sorter: (a, b) => a.rating - b.rating,
    },
  ];

  return (
    <>
      <div className="Table">
        <PageHeader title="Books that I want to read" />
        <Table dataSource={potential} columns={columns} />
      </div>
    </>
  );
}
