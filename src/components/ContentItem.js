import React, { useCallback, useRef } from "react";
import "./ContentItem.css";
import { connect } from "react-redux";
import { addPage } from "../Redux/actions";

function ContentItem({ addPage, data, title, poster, id }) {
  const observer = useRef();
  const picError = (e) => {
    e.target.src = "./posters/posterthatismissing.png";
  };
  const lastItem = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        addPage();
        console.log(`visible, ${entries[0]}`);
      }
    });
    if (node) observer.current.observe(node);
    console.log(node);
  }, []);
  if (id + 1 === data.length) {
    return (
      <div className="contentItem" id={id} ref={lastItem}>
        <div className="poster">
          <img
            className="poster__image"
            src={`./posters/${poster}`}
            onError={(e) => picError(e)}
            alt="poster"
          />
        </div>
        <div className="title">
          <p className="title__text">{title}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="contentItem" id={id}>
        <div className="poster">
          <img
            className="poster__image"
            src={`./posters/${poster}`}
            onError={(e) => picError(e)}
            alt="poster"
          />
        </div>
        <div className="title">
          <p className="title__text">{title}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPage: () => dispatch(addPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentItem);
