import { useState } from 'react';

const BusBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    passengers: '1',
    busType: '',
    notes: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '919999999999';
    const message = `Hello SkyWay Travels, I want to book a bus.
Name: ${formData.name}
Phone: ${formData.phone}
Pickup: ${formData.pickup}
Drop: ${formData.drop}
Date: ${formData.date}
Passengers: ${formData.passengers}
Bus Type: ${formData.busType}
Notes: ${formData.notes}`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(rgba(11, 29, 57, 0.9), rgba(11, 29, 57, 0.7)), url(https://picsum.photos/1920/1080?random=50)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '50px',
      }}
    >
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6
            className="text-uppercase fw-bold mb-3"
            style={{ color: '#F4B400', letterSpacing: '2px' }}
          >
            Bus Booking
          </h6>
          <h2
            className="display-4 fw-bold text-white mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Book Your Bus
          </h2>
          <p className="text-white" style={{ opacity: 0.8 }}>
            Fill the form below and we'll get back to you on WhatsApp
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="bg-white rounded-4 p-5"
              style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control py-3"
                      style={{ borderRadius: '10px' }}
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control py-3"
                      style={{ borderRadius: '10px' }}
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      name="pickup"
                      className="form-control py-3"
                      style={{ borderRadius: '10px' }}
                      placeholder="Enter pickup location"
                      value={formData.pickup}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Drop Location *
                    </label>
                    <input
                      type="text"
                      name="drop"
                      className="form-control py-3"
                      style={{ borderRadius: '10px' }}
                      placeholder="Enter drop location"
                      value={formData.drop}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="form-control py-3"
                      style={{ borderRadius: '10px' }}
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Number of Passengers *
                    </label>
                    <select
                      name="passengers"
                      className="form-select py-3"
                      style={{ borderRadius: '10px' }}
                      value={formData.passengers}
                      onChange={handleChange}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} Passenger{i > 0 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Bus Type *
                    </label>
                    <select
                      name="busType"
                      className="form-select py-3"
                      style={{ borderRadius: '10px' }}
                      value={formData.busType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select bus type</option>
                      <option value="AC">AC Bus</option>
                      <option value="Non-AC">Non-AC Bus</option>
                      <option value="Sleeper">Sleeper Bus</option>
                      <option value="Semi-Sleeper">Semi-Sleeper Bus</option>
                      <option value="Volvo">Volvo AC</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold" style={{ color: '#0B1D39' }}>
                      Additional Notes
                    </label>
                    <input
                      type="text"
                      name="notes"
                      className="form-control py-3"
                      style={{ borderRadius: '10px' }}
                      placeholder="Any special requirements"
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-gradient btn-lg w-100 py-3"
                    >
                      Book Bus via WhatsApp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast">
          <span>Booking details sent to WhatsApp!</span>
        </div>
      )}
    </div>
  );
};

export default BusBooking;