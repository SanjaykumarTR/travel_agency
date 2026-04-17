import { useState } from 'react';
import { packages, filterCategories } from '../data/packages';
import { FiStar, FiClock, FiMapPin } from 'react-icons/fi';

const PackagesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState('');

  const filteredPackages = packages.filter((pkg) => {
    if (selectedCategory === 'All') return true;
    return pkg.category === selectedCategory;
  });

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (priceFilter === 'low') return a.price - b.price;
    if (priceFilter === 'high') return b.price - a.price;
    return 0;
  });

  const handleBookWhatsApp = (pkg) => {
    const phoneNumber = '919999999999';
    const message = `Hello SkyWay Travels, I want to book the ${pkg.name} package.\nPackage: ${pkg.name}\nLocation: ${pkg.location}\nPrice: ₹${pkg.price}\nDuration: ${pkg.duration}`;
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
            Travel Packages
          </h6>
          <h2
            className="display-4 fw-bold mb-3"
            style={{ color: '#0B1D39', fontFamily: "'Poppins', sans-serif" }}
          >
            Explore Our Packages
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Choose from our wide range of travel packages designed to make your
            journey unforgettable
          </p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="d-flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  className={`btn ${
                    selectedCategory === category
                      ? 'btn-gradient'
                      : 'btn-outline-light-custom'
                  } px-4 py-2`}
                  style={{
                    borderRadius: '30px',
                    color: selectedCategory === category ? '#0B1D39' : '#0B1D39',
                    border:
                      selectedCategory === category
                        ? 'none'
                        : '2px solid #0B1D39',
                  }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <select
              className="form-select py-2"
              style={{ borderRadius: '30px', maxWidth: '200px' }}
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="">Sort by Price</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="row g-4">
          {sortedPackages.map((pkg) => (
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
                    <button
                      className="btn btn-gradient btn-sm px-3 py-2"
                      onClick={() => handleBookWhatsApp(pkg)}
                    >
                      Book on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;