import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
  
  return(
    <div className= {className}>
      <label>{label}</label>

        <input {...input} placeholder={label} type="text" className="form-control" />
        <div className='text-help'>
          { touched ? error : ''}
        {/* {touched && error && <span>{error}</span>} */}
      </div>
    </div>
  );
}


export default renderField;