import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import '../../../App.css';
import 'aos/dist/aos.css';

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    organizerName: '',
    organizerContact: '',
    firmName: '',
    firmContact: '',
    description: '',
    qrCode: null,
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.eventName) newErrors.eventName = 'Please enter the event or festival name.';
    if (!formData.organizerName) newErrors.organizerName = 'Please enter the organizer name.';
    if (!formData.organizerContact.match(/^\d{10}$/)) newErrors.organizerContact = 'Enter valid 10-digit contact.';
    if (!formData.firmName) newErrors.firmName = 'Please enter the firm name.';
    if (!formData.firmContact.match(/^\d{10}$/)) newErrors.firmContact = 'Enter valid 10-digit firm contact.';
    if (!formData.description) newErrors.description = 'Please provide a description.';
    if (!formData.agreement) newErrors.agreement = 'You must agree before submitting.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const fieldValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data:', formData);
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="formbody">
      <form onSubmit={handleSubmit} className="registration-form" noValidate>
        <h2>Register Event / Festival</h2>

        <div className="form-group">
          <label>Event / Festival Name</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
          />
          {errors.eventName && <span className="error">{errors.eventName}</span>}
        </div>

        <div className="form-group">
          <label>Organizer Name</label>
          <input
            type="text"
            name="organizerName"
            value={formData.organizerName}
            onChange={handleChange}
          />
          {errors.organizerName && <span className="error">{errors.organizerName}</span>}
        </div>

        <div className="form-group">
          <label>Organizer Contact Number</label>
          <input
            type="tel"
            name="organizerContact"
            value={formData.organizerContact}
            onChange={handleChange}
          />
          {errors.organizerContact && <span className="error">{errors.organizerContact}</span>}
        </div>

        <div className="form-group">
          <label>Firm Name</label>
          <input
            type="text"
            name="firmName"
            value={formData.firmName}
            onChange={handleChange}
          />
          {errors.firmName && <span className="error">{errors.firmName}</span>}
        </div>

        <div className="form-group">
          <label>Firm Contact Number</label>
          <input
            type="tel"
            name="firmContact"
            value={formData.firmContact}
            onChange={handleChange}
          />
          {errors.firmContact && <span className="error">{errors.firmContact}</span>}
        </div>

        <div className="form-group">
          <label>Event / Festival Description</label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label>Upload QR Code for Online Payment (optional)</label>
          <input
            type="file"
            name="qrCode"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
          />
          <label>I agree for registration</label>
          {errors.agreement && <span className="error">{errors.agreement}</span>}
        </div>

        <div className="form-group">
          <button type="submit" className='btn btn-teal'>Submit</button>
        </div>

        {submitted && <div className="success-msg">Form submitted successfully!</div>}
      </form>
    </div>
  );
};

export default EventRegistrationForm;
