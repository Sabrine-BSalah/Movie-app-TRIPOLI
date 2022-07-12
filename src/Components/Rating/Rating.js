import React from "react";
import { Rate } from "antd";

const Rating = ({ rating, isFilter, rateValue, setRateValue }) => {
    
  return isFilter ? (
    <Rate defaultValue={1} onChange={setRateValue} value={rateValue} />
  ) : (
    <Rate defaultValue={rating} disabled />
  );
};
export default Rating;
