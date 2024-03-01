import React from "react";

const privateRoute = () => {
  return (
    <div>
      This cannot be viewed in the browser because it is in a private directory
      which is identifies by the _ (underscore) before the name of the folder.
      <p>Why would we need this</p>
      <p>for separating UI logic from routing logic</p>
      <p>for consistently organizing internal files accross a project</p>
      <p>for soring a grouping files in the code editor</p>
      <p>for avoiding potential naming conflicts with file conventionsA</p>
    </div>
  );
};

export default page;
