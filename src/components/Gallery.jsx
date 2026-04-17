import { galleryImages } from '../data/gallery';

const Gallery = () => {
  return (
    <section className="py-5" style={{ background: '#fff' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6
            className="text-uppercase fw-bold mb-3"
            style={{ color: '#F4B400', letterSpacing: '2px' }}
          >
            Gallery
          </h6>
          <h2
            className="display-5 fw-bold mb-3"
            style={{ color: '#0B1D39', fontFamily: "'Poppins', sans-serif" }}
          >
            Our Travel Memories
          </h2>
        </div>

        <div className="row g-4">
          {galleryImages.map((image) => (
            <div className="col-md-6 col-lg-3" key={image.id}>
              <div className="gallery-item">
                <img src={image.image} alt={image.title} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="/gallery"
            className="btn btn-gradient btn-lg px-5 py-3"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;