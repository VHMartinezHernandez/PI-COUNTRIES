import React from "react";
import "../paginate/Paginate.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";

export default function Paginate({ cantPages }) {
  const { numPage } = useSelector((state) => state);
  const dispatch = useDispatch();
  function next() {
    dispatch(nextPage());
  }
  function prev() {
    dispatch(prevPage());
  }

  return (
    <div className={"page"}>
      {numPage > 1 ? (
        <div className="prev-page">
          <button className="button-pag" onClick={prev}>PREV</button>
          <p>{numPage - 1}</p>
        </div>
      ) : null}
  
      <h3 className="current-page">{numPage}</h3>
  
      {numPage < cantPages ? (
        <div className="next-page">
          <p>{numPage + 1}</p>
          <button className="button-pag" onClick={next}>NEXT</button>
        </div>
      ) : null}
    </div>
  );
}
