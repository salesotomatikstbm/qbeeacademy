import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactNumber: '', // Add contact number to state
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }
    if (!formData.contactNumber) {
      errors.contactNumber = 'Contact number is required';
    } else if (!/^\d+$/.test(formData.contactNumber)) {
      errors.contactNumber = 'Contact number is invalid';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      const serviceId = 'service_7lbyu4o'; // replace with your EmailJS service ID
      const templateId = 'template_aceobbs'; // replace with your EmailJS template ID
      const userId = 'DyMCR87vQnJ_VZwQA'; // replace with your EmailJS user ID

      const templateParams = {
        from_name: formData.name,          // template parameter for sender's name
        from_email: formData.email,        // template parameter for sender's email
        to_email: 'arungwork63@gmail.com', // template parameter for receiver's email
        message: formData.message,         // template parameter for the message
        contact_number: formData.contactNumber, // template parameter for contact number
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000); // Hide success message after 5 seconds
        setFormData({
          name: '',
          email: '',
          message: '',
          contactNumber: '',
        });
      }, (error) => {
        console.log('FAILED...', error);
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <hr></hr>
      <h2 className="text-5xl font-bold text-center mb-4 text-blue-600">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="contactNumber">Contact Number <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="contactNumber"
            id="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </form>
      {submitted && (
        <p className="mt-4 text-green-500 text-center">
          Your message has been sent successfully to QBee Academy!
        </p>
      )}
    </div>
  );
};

export default ContactForm;
