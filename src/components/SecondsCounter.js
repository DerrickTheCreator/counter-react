import React from "react";
import PropTypes from "prop-types";



function SecondsCounter(props){
    
    return(

       <div className="d-flex" id ='derrick'>
          <div>{props.digit6}</div>
          <div>{props.digit5}</div>
          <div>{props.digit4}</div>
          <div>{props.digit3}</div>
          <div>{props.digit2}</div>
          <div>{props.digit1}</div>

        </div>
      );
}
    SecondsCounter.propTypes = {
          digit6: PropTypes.number,
          digit5: PropTypes.number,
          digit4: PropTypes.number,
          digit3: PropTypes.number,
          digit2: PropTypes.number,
          digit1: PropTypes.number,
        };
    
          export default SecondsCounter;
        