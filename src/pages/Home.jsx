import Hero from '../components/Hero';
import Services from '../components/Services';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import { whyChooseUs } from '../data/services';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <Hero />

      <Services />

      <Packages />

      <section className="py-5" style={{ background: '#0B1D39' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6
              className="text-uppercase fw-bold mb-3"
              style={{ color: '#F4B400', letterSpacing: '2px' }}
            >
              Why Choose Us
            </h6>
            <h2
              className="display-5 fw-bold text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Experience the Difference
            </h2>
          </div>

          <div className="row g-4">
            {whyChooseUs.map((item) => (
              <div className="col-md-6 col-lg-3" key={item.id}>
                <div className="counter-card h-100">
                  <h2
                    className="display-4 fw-bold mb-2"
                    style={{ color: '#F4B400' }}
                  >
                    {item.value}
                  </h2>
                  <h5 className="text-white mb-2 fw-bold">{item.title}</h5>
                  <p
                    className="mb-0"
                    style={{ opacity: 0.8, color: '#fff' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <Gallery />

      <section className="py-5" style={{ background: '#F8FAFC' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <h6
                className="text-uppercase fw-bold mb-3"
                style={{ color: '#F4B400', letterSpacing: '2px' }}
              >
                Contact Us
              </h6>
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: '#0B1D39' }}
              >
                Get in Touch
              </h2>
              <p className="text-muted mb-4">
                Have questions? We'd love to hear from you. Send us a message and we'll
                respond as soon as possible.
              </p>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control py-3"
                    placeholder="Your Name"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control py-3"
                    placeholder="Your Email"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control py-3"
                    rows="4"
                    placeholder="Your Message"
                    style={{ borderRadius: '10px' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-gradient btn-lg w-100 py-3">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="bg-white rounded-4 p-4 h-100">
                <h4 className="fw-bold mb-4" style={{ color: '#0B1D39' }}>
                  Contact Information
                </h4>
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center"
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
                    className="d-flex align-items-center justify-content-center"
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
                    className="d-flex align-items-center justify-content-center"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;