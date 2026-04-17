import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const openWhatsApp = () => {
    const phoneNumber = '919999999999';
    const message = 'Hello SkyWay Travels, I need help with: ';
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6
            className="text-uppercase fw-bold mb-3"
            style={{ color: '#F4B400', letterSpacing: '2px' }}
          >
            Contact Us
          </h6>
          <h2
            className="display-4 fw-bold mb-3"
            style={{ color: '#0B1D39', fontFamily: "'Poppins', sans-serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Have a question or need help planning your trip? We'd love to hear from
            you. Fill out the form below or reach us directly.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-7">
            <div className="bg-white rounded-4 p-5" style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control py-3"
                      style={{ borderRadius: '10px' }}
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control py-3"
                      style={{ borderRadius: '10px' }}
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control py-3"
                      style={{ borderRadius: '10px' }}
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      className="form-control py-3"
                      rows="5"
                      style={{ borderRadius: '10px' }}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-gradient btn-lg w-100 py-3">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="bg-white rounded-4 p-5 mb-4" style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <h4 className="fw-bold mb-4" style={{ color: '#0B1D39' }}>
                Contact Information
              </h4>
              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '10px',
                    background: '#F8FAFC',
                    color: '#F4B400',
                  }}
                >
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold" style={{ color: '#0B1D39' }}>
                    Address
                  </h6>
                  <p className="mb-0 text-muted">
                    123 Travel Street, Mumbai, India
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '10px',
                    background: '#F8FAFC',
                    color: '#F4B400',
                  }}
                >
                  <FiPhone size={24} />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold" style={{ color: '#0B1D39' }}>
                    Phone
                  </h6>
                  <p className="mb-0 text-muted">+91 9999999999</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '10px',
                    background: '#F8FAFC',
                    color: '#F4B400',
                  }}
                >
                  <FiMail size={24} />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold" style={{ color: '#0B1D39' }}>
                    Email
                  </h6>
                  <p className="mb-0 text-muted">info@skywaytravels.com</p>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3">
              <button
                className="btn btn-lg flex-fill py-3 d-flex align-items-center justify-content-center gap-2"
                style={{
                  background: '#25D366',
                  color: '#fff',
                  borderRadius: '10px',
                }}
                onClick={openWhatsApp}
              >
                <FiMessageCircle size={24} />
                WhatsApp
              </button>
              <a
                href="tel:+919999999999"
                className="btn btn-lg flex-fill py-3 d-flex align-items-center justify-content-center gap-2"
                style={{
                  background: '#0B1D39',
                  color: '#fff',
                  borderRadius: '10px',
                  textDecoration: 'none',
                }}
              >
                <FiPhone size={24} />
                Call
              </a>
            </div>

            <div className="mt-4 rounded-4 overflow-hidden" style={{ height: '250px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5063153182765!2d72.82656731490146!3d19.022396987129753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec9b1f14a67%3A0x1e4f4c8e2d8c6c5c!2sMarine%20Drive!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast">
          <span>Message sent successfully!</span>
        </div>
      )}
    </div>
  );
};

export default Contact;