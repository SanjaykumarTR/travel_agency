import { services } from '../data/services';
import { FiArrowRight } from 'react-icons/fi';

const Services = () => {
  return (
    <section className="py-5" style={{ background: '#F8FAFC' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6
            className="text-uppercase fw-bold mb-3"
            style={{ color: '#F4B400', letterSpacing: '2px' }}
          >
            Our Services
          </h6>
          <h2
            className="display-5 fw-bold"
            style={{ color: '#0B1D39', fontFamily: "'Poppins', sans-serif" }}
          >
            What We Offer
          </h2>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              <div className="service-card card-hover h-100">
                <div className="service-icon">
                  <service.icon />
                </div>
                <h4
                  className="fw-bold mb-3"
                  style={{ color: '#0B1D39' }}
                >
                  {service.title}
                </h4>
                <p
                  className="mb-3"
                  style={{ color: '#6b7280' }}
                >
                  {service.description}
                </p>
                <a
                  href="#"
                  className="d-flex align-items-center gap-2 text-decoration-none fw-medium"
                  style={{ color: '#F4B400' }}
                >
                  Learn More <FiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;