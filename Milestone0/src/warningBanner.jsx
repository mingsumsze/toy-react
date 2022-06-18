import React from "react";


function WarningBanner(props) {
  // Return null to prevent component from rendering
  // Lifecycle methods will still fire
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}


export default WarningBanner;