import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#0B1D39' }}>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <Link to="/" className="d-flex align-items-center text-decoration-none mb-4">
              <span className="fs-3 fw-bold" style={{ color: '#F4B400' }}>
                SkyWay
              </span>
              <span className="fs-3 fw-bold ms-1" style={{ color: '#fff' }}>
                Travels
              </span>
            </Link>
            <p className="text-white mb-4" style={{ opacity: 0.8 }}>
              Your trusted travel partner for unforgettable journeys. We make your
              travel dreams come true with premium packages and exceptional
              service.
            </p>
            <div className="d-flex gap-3">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center text-decoration-none"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                }}
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center text-decoration-none"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                }}
              >
                <FiTwitter />
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center text-decoration-none"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                }}
              >
                <FiInstagram />
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center text-decoration-none"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                }}
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="col-lg-2">
            <h5 className="text-white mb-4 fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/packages" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Packages
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/bus-booking" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Bus Booking
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/gallery" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Gallery
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5 className="text-white mb-4 fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Flight Booking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Bus Booking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Hotel Booking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Tour Packages
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Visa Assistance
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Travel Insurance
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5 className="text-white mb-4 fw-bold">Contact Us</h5>
            <div className="mb-3">
              <div className="d-flex align-items-center gap-2 text-white" style={{ opacity: 0.8 }}>
                <FiMapPin /> <span>123 Travel Street, Mumbai, India</span>
              </div>
            </div>
            <div className="mb-3">
              <a
                href="tel:+919999999999"
                className="d-flex align-items-center gap-2 text-white text-decoration-none"
                style={{ opacity: 0.8 }}
              >
                <FiPhone /> <span>+91 9999999999</span>
              </a>
            </div>
            <div className="mb-3">
              <a
                href="mailto:info@skywaytravels.com"
                className="d-flex align-items-center gap-2 text-white text-decoration-none"
                style={{ opacity: 0.8 }}
              >
                <FiMail /> <span>info@skywaytravels.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-3 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <p className="mb-0 text-white" style={{ opacity: 0.7 }}>
          © {currentYear} SkyWay Travels. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;