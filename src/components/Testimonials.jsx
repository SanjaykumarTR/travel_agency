import { testimonials } from '../data/services';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  return (
    <section className="py-5" style={{ background: '#F8FAFC' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6
            className="text-uppercase fw-bold mb-3"
            style={{ color: '#F4B400', letterSpacing: '2px' }}
          >
            Testimonials
          </h6>
          <h2
            className="display-5 fw-bold mb-3"
            style={{ color: '#0B1D39', fontFamily: "'Poppins', sans-serif" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Read what our happy customers have to say about their travel experiences
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div className="col-md-6 col-lg-3" key={testimonial.id}>
              <div className="testimonial-card h-100">
                <div className="d-flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} style={{ color: '#F4B400', fill: '#F4B400' }} />
                  ))}
                </div>
                <p
                  className="mb-4"
                  style={{ color: '#4b5563', fontStyle: 'italic' }}
                >
                  "{testimonial.comment}"
                </p>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle"
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'cover',
                    }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold" style={{ color: '#0B1D39' }}>
                      {testimonial.name}
                    </h6>
                    <small className="text-muted">{testimonial.location}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;