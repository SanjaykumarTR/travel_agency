import { team } from '../data/services';
import { FiAward, FiUsers, FiGlobe, FiStar } from 'react-icons/fi';

const About = () => {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingTop: '100px' }}>
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6
                className="text-uppercase fw-bold mb-3"
                style={{ color: '#F4B400', letterSpacing: '2px' }}
              >
                About Us
              </h6>
              <h2
                className="display-4 fw-bold mb-4"
                style={{ color: '#0B1D39', fontFamily: "'Poppins', sans-serif" }}
              >
                Your Trusted Travel Partner Since 2014
              </h2>
              <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                SkyWay Travels was founded with a mission to make travel
                accessible, enjoyable, and memorable for everyone. With over
                10 years of experience in the travel industry, we've helped
                thousands of travelers discover the beauty of India and the
                world.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                Our team of experienced travel experts is dedicated to providing
                personalized travel solutions that cater to your unique needs and
                preferences. From budget-friendly trips to luxury getaways, we
                have something for everyone.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  <div className="text-center p-4 rounded-4" style={{ background: '#0B1D39' }}>
                    <FiAward size={40} style={{ color: '#F4B400' }} />
                    <h3 className="fw-bold text-white mt-2">10+</h3>
                    <p className="text-white mb-0" style={{ opacity: 0.8 }}>
                      Years Experience
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 rounded-4" style={{ background: '#0B1D39' }}>
                    <FiUsers size={40} style={{ color: '#F4B400' }} />
                    <h3 className="fw-bold text-white mt-2">50k+</h3>
                    <p className="text-white mb-0" style={{ opacity: 0.8 }}>
                      Happy Customers
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 rounded-4" style={{ background: '#0B1D39' }}>
                    <FiGlobe size={40} style={{ color: '#F4B400' }} />
                    <h3 className="fw-bold text-white mt-2">200+</h3>
                    <p className="text-white mb-0" style={{ opacity: 0.8 }}>
                      Destinations
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 rounded-4" style={{ background: '#0B1D39' }}>
                    <FiStar size={40} style={{ color: '#F4B400' }} />
                    <h3 className="fw-bold text-white mt-2">4.9</h3>
                    <p className="text-white mb-0" style={{ opacity: 0.8 }}>
                      Average Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ background: '#fff' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2
              className="display-5 fw-bold"
              style={{ color: '#0B1D39', fontFamily: "'Poppins', sans-serif" }}
            >
              Our Mission & Vision
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-5 rounded-4" style={{ background: '#F8FAFC', height: '100%' }}>
                <h3 className="fw-bold mb-4" style={{ color: '#0B1D39' }}>
                  Our Mission
                </h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  To provide exceptional travel experiences that inspire and delight our
                  customers while promoting sustainable and responsible tourism. We strive to
                  make travel accessible to everyone by offering a wide range of packages
                  catering to different budgets and preferences.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-5 rounded-4" style={{ background: '#F8FAFC', height: '100%' }}>
                <h3 className="fw-bold mb-4" style={{ color: '#0B1D39' }}>
                  Our Vision
                </h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>
                  To be the most trusted and preferred travel partner in India,
                  known for delivering unforgettable experiences and creating
                  lasting memories for travelers across the globe. We envision a
                  world where everyone has the opportunity to explore and discover
                  new destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ background: '#F8FAFC' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6
              className="text-uppercase fw-bold mb-3"
              style={{ color: '#F4B400', letterSpacing: '2px' }}
            >
              Our Team
            </h6>
            <h2
              className="display-5 fw-bold"
              style={{ color: '#0B1D39', fontFamily: "'Poppins', sans-serif" }}
            >
              Meet the Experts
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {team.map((member) => (
              <div className="col-md-4" key={member.id}>
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-4 mb-4"
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      height: '300px',
                      objectFit: 'cover',
                    }}
                  />
                  <h4 className="fw-bold mb-1" style={{ color: '#0B1D39' }}>
                    {member.name}
                  </h4>
                  <p className="mb-0" style={{ color: '#F4B400' }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;