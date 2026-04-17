import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="hero-section d-flex align-items-center position-relative"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 29, 57, 0.7), rgba(11, 29, 57, 0.5)), url('https://picsum.photos/1920/1080?random=100')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="glass-card rounded-4 p-5 fade-in">
              <h1
                className="display-3 fw-bold text-white mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Explore the World with{' '}
                <span style={{ color: '#F4B400' }}>SkyWay Travels</span>
              </h1>
              <p
                className="lead text-white mb-4 fs-5"
                style={{ opacity: 0.9 }}
              >
                Your Journey, Our Responsibility — Discover unforgettable destinations
                and create memories that last a lifetime with our premium travel
                packages.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/packages" className="btn btn-gradient btn-lg px-5 py-3">
                  View Packages
                </Link>
                <Link
                  to="/bus-booking"
                  className="btn btn-outline-light-custom btn-lg px-5 py-3"
                >
                  Book Bus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="position-absolute bottom-0 start-0 w-100"
        style={{
          background: 'linear-gradient(transparent, rgba(11, 29, 57, 0.3))',
          height: '150px',
        }}
      ></div>
    </section>
  );
};

export default Hero;