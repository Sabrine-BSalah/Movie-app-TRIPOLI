import React from "react";
import { Form } from "react-bootstrap";
import Rating from "../Rating/Rating";

import "./Filter.css";

const FilterByName = ({ title, setTitle, rateValue, setRateValue }) => {
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="filterPart">
      <Form.Control
        type="text"
        placeholder="Filter by movie title ..."
        className="inputFilter"
        onChange={handleChange}
        value={title}
      />
      <Rating
        isFilter={true}
        rateValue={rateValue}
        setRateValue={setRateValue}
      />
    </div>
  );
};

export default FilterByName;
