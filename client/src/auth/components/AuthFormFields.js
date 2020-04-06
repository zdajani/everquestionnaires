import React from 'react';
import { Field } from 'redux-form';
import renderField from '../../commonComponents/Field';
import { required } from '../validations'

const AuthFormFields = () => (
  <div>
    <Field 
      label="Username:"
      name="username"
      component={ renderField }
      validate={required}
    />
    <Field 
      label="Password:"
      name="password"
      type="password"
      component={ renderField }
      validate={required}
    />
  </div>
) 

export default AuthFormFields;
