import React from "react";
import PropTypes from "prop-types";

function aLERT(props) {
  return (
    <div>
      <div>
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong>
          {props.alert}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default aLERT;
