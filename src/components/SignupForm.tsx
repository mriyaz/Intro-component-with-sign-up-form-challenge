// src/components/SignupForm.tsx
import React, { useState } from 'react';
import iconError from '../images/icon-error.svg'; // Make sure the path is correct


interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to validate the form
  const validateForm = () => {
    let errors: FormErrors = {};
    let formIsValid = true;

    if (!formData.firstName) {
      errors.firstName = 'First Name cannot be empty';
      formIsValid = false;
    }

    if (!formData.lastName) {
      errors.lastName = 'Last Name cannot be empty';
      formIsValid = false;
    }

    if (!formData.email) {
      errors.email = 'Email cannot be empty';
      formIsValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Looks like this is not an email';
      formIsValid = false;
    }
    if (!formData.password) {
      errors.password = 'Password cannot be empty';
      formIsValid = false;
    }

    setFormErrors(errors);
    return formIsValid;
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log('Form is valid');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <form noValidate onSubmit={handleSubmit} className="space-y-4">
        {/* Input fields with error messages */}

        {/* Input field for first name */}
        <div className="relative">
          <input
            className={`border border-gray-300 w-full p-3 rounded-md  ${formErrors.firstName ? 'border-2 border-red-500' : ''
              }`}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <img src={iconError} alt="Error" />
            </div>
          )}
        </div>
        {formErrors.firstName && (
          <p className="text-red-500 text-xs italic">{formErrors.firstName}</p>
        )}

        {/* Input field for last name */}
        <div className="relative">
          <input type="text" className={`border border-gray-300 w-full p-3 rounded-md ${formErrors.lastName ? 'border-2 border-red-500' : ''} `}
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
          />
          {formErrors.lastName && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <img src={iconError} alt="Error" />
          </div>)}
        </div>
        {formErrors.lastName && (<p className="italic text-red-500 text-xs">
          {formErrors.lastName}
        </p>)}

        {/* Input field for email */}
        <div className="relative">
          <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange} className={`border border-gray-300 w-full p-3 rounded-md ${formErrors.email ? 'border-2 border-red-500' : ''} `} />

          {formErrors.email && (<div className="absolute inset-y-0 right-0 pr-3 flex  items-center"><img src={iconError} alt="Error" /></div>)}
        </div>
        {formErrors.email && (<p className="italic text-red-500 text-xs">{formErrors.email}</p>)}

        {/* Input field for password */}
        <div className="relative">
          <input type="password" name="password" placeholder='Password' value={formData.password} className={`border border-gray-300 w-full p-3 ${formErrors.password ? 'border-2 border-red-500' : ''}`} onChange={handleChange} />
          {formErrors.password && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center"><img src={iconError} alt="Error" /></div>)}
        </div>
        {formErrors.password && (<p className="italic text-xs text-red-500">{formErrors.password}</p>)}


        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition-colors"
        >
          CLAIM YOUR FREE TRIAL
        </button>

      </form>
      <p className="text-xs text-gray-500 mt-4">
        By clicking the button, you are agreeing to our <a href="#" className="font-bold text-primary-red">Terms and Services</a>
      </p>
    </div>

  );
};
