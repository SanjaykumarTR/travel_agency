import { packages } from '../data/packages';
import { Link } from 'react-router-dom';
import { FiStar, FiClock, FiMapPin } from 'react-icons/fi';

const Packages = () => {
  const popularPackages = packages.slice(0, 6);

  return (
    <section className="py-5" style={{ background: '#fff' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6
            className="text-uppercase fw-bold mb-3"
            style={{ color: '#F4B400', letterSpacing: '2px' }}
          >
            Popular Packages
          </h6>
          <h2
            className="display-5 fw-bold mb-3"
            style={{ color: '#0B1D39', fontFamily: "'Poppins', sans-serif" }}
          >
            Explore Top Destinations
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Discover breathtaking destinations with our specially curated travel
            packages
          </p>
        </div>

        <div className="row g-4">
          {popularPackages.map((pkg) => (
            <div className="col-md-6 col-lg-4" key={pkg.id}>
              <div className="package-card card-hover h-100">
                <div className="position-relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="package-image"
                  />
                  <div
                    className="position-absolute top-0 end-0 m-3 px-2 py-1 rounded-pill"
                    style={{ background: '#F4B400', color: '#0B1D39' }}
                  >
                    <small className="fw-bold">{pkg.category}</small>
                  </div>
                </div>
                <div className="p-4">
                  <h4
                    className="fw-bold mb-2"
                    style={{ color: '#0B1D39' }}
                  >
                    {pkg.name}
                  </h4>
                  <div className="d-flex align-items-center gap-2 text-muted mb-3">
                    <FiMapPin /> <small>{pkg.location}</small>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-1">
                      <FiStar style={{ color: '#F4B400' }} />
                      <span className="fw-bold">{pkg.rating}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1 text-muted">
                      <FiClock />
                      <small>{pkg.duration}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <span
                        className="fs-4 fw-bold"
                        style={{ color: '#0B1D39' }}
                      >
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="text-muted">/person</span>
                    </div>
                    <Link
                      to="/packages"
                      className="btn btn-gradient btn-sm px-3 py-2"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/packages" className="btn btn-gradient btn-lg px-5 py-3">
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;