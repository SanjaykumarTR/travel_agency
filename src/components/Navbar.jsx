import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Bus Booking', path: '/bus-booking' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: 'rgba(11, 29, 57, 0.95)',
          padding: '10px 0',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <span
              className="fw-bold fs-3"
              style={{
                color: '#F4B400',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              SkyWay
            </span>
            <span
              className="fw-bold fs-3 ms-1"
              style={{
                color: '#fff',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Travels
            </span>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsOpen(true)}
            style={{ color: '#fff' }}
          >
            <FiMenu size={28} />
          </button>

          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link text-decoration-none fw-medium ${
                        isActive ? 'active-link' : 'text-white'
                      }`
                    }
                    to={link.path}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/bus-booking"
              className="btn btn-gradient ms-lg-3"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`sidebar-overlay ${isOpen ? 'show' : ''}`}
        onClick={closeSidebar}
      />

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeSidebar}>
            <span
              className="fw-bold fs-4"
              style={{
                color: '#F4B400',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              SkyWay
            </span>
            <span
              className="fw-bold fs-4 ms-1"
              style={{
                color: '#fff',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Travels
            </span>
          </Link>
          <button
            className="border-0 bg-transparent"
            onClick={closeSidebar}
            style={{ color: '#fff' }}
          >
            <FiX size={28} />
          </button>
        </div>
        <ul className="navbar-nav p-3">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.name}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-decoration-none fw-medium ${
                    isActive ? 'active-link' : 'text-white'
                  }`
                }
                to={link.path}
                onClick={closeSidebar}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="p-3">
          <Link
            to="/bus-booking"
            className="btn btn-gradient w-100"
            onClick={closeSidebar}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;