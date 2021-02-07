import React, { useState, Fragment } from 'react';

function ExampleTemplate(props) {
    const [ htmlVal, setHtmlVal ] = useState(props.html);
    const [ cssVal, setCssVal ] = useState(props.css);

    const handleChange = event => {
      const type = event.target.getAttribute('data-type');
      if (type === 'css') {
        setCssVal(event.target.value);
      } else {
        setHtmlVal(event.target.value);
      }
    }
    
    return (
      <Fragment>
        <style>
          {cssVal}
        </style>
        <div className="example">
          <h2 className="example__title">{props.title}</h2>

          <textarea className="example__input example__input--html" data-type="html" defaultValue={props.html} onChange={handleChange} spellcheck="false" />
          <textarea className="example__input example__input--css" data-type="css" defaultValue={props.css} onChange={handleChange} spellcheck="false" />

          <div className="example__output" dangerouslySetInnerHTML={{ __html: htmlVal }} />
        </div>
      </Fragment>
    );
  }
  
  export default ExampleTemplate;
  