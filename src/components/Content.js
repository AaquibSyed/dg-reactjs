import React, { useEffect } from "react";
import axios from "axios";
import ContentItem from "./ContentItem";
import uuid from "react-uuid";
import "./Content.css";
import { insertData } from "../Redux/actions";
import { connect } from "react-redux";

function Content({ filteredData, page, insertLoadedData }) {
  useEffect(() => {
    axios
      .get(`./data/CONTENTLISTINGPAGE-${page}.json`)
      .then((res) => res.data)
      .then((data) => {
        insertLoadedData(data.page["content-items"].content);
      });
  }, [page]);

  return (
    <div className="content">
      {filteredData.map((item, idx) => (
        <ContentItem
          id={idx}
          title={item.name}
          key={uuid()}
          poster={item["poster-image"]}
        />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    filteredData: state.filteredData,
    page: state.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertLoadedData: (data) => dispatch(insertData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
