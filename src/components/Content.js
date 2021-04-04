import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentItem from "./ContentItem";
import uuid from "react-uuid";
import "./Content.css";

function Content() {
  const [data, setdata] = useState({});
  useEffect(() => {
    axios
      .get("./data/CONTENTLISTINGPAGE-PAGE1.json")
      .then((res) => res.data)
      .then((data) => {
        console.log(data.page["content-items"].content);
        setdata(data.page["content-items"]);
      });
    console.log(data);
  }, []);

  return (
    <div className="content">
      {data?.content?.map((item) => (
        <ContentItem
          title={item.name}
          key={uuid()}
          poster={item["poster-image"]}
        />
      ))}
    </div>
  );
}

export default Content;
