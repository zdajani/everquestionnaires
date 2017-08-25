import React from 'react';
import './styles/Field.css'

const renderField = ({ input, label, type, meta: { touched, error }, isTextArea }) => {
  const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
  return(
    <div className={className}>
      {label &&  <label className="form-control-label">{label}</label>}
      
      {isTextArea ?
         <textArea {...input} placeholder={label} type="text" className="form-control"/> : 
         <input {...input} placeholder={label} type="text" className="form-control" />}
      
      <div className='text-help'>
        {touched && error && <span className="form-error">{error}</span>}
      </div>
    </div>
  );
}


export default renderField;