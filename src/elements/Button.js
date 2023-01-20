import React, { Component } from 'react'
import propTypes from 'prop-types'

// import React from 'react'

export default function Button(props) {
    const className = ["button"];
    if(props.isSubmit) className.push("au-btn--submit");
    if(props.isIcon) className.push("au-btn-icon");
    if(props.isBlue) className.push("au-btn--blue");
    return <button className={className.join(" ")}>{props.children}
    </button>;
}

    Button.propTypes = {
        isSubmit: propTypes.bool,
        isIcon: propTypes.bool,
        isBlue: propTypes.bool,
      
}


