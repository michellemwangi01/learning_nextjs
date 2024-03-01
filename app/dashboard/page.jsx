import React from "react";

const lineChart = () => {
  return (
    <div>
      This is the line chart which will not be auotmatically added unless it is
      manually added.
    </div>
  );
};
const dashboard = () => {
  return (
    <div>
      This is the dashboard page
      <lineChart />
    </div>
  );
};

export default dashboard;
