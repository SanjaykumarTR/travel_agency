import { useState } from 'react';
import { galleryImages } from '../data/gallery';
import { FiX } from 'react-icons/fi';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6
            className="text-uppercase fw-bold mb-3"
            style={{ color: '#F4B400', letterSpacing: '2px' }}
          >
            Gallery
          </h6>
          <h2
            className="display-4 fw-bold mb-3"
            style={{ color: '#0B1D39', fontFamily: "'Poppins', sans-serif" }}
          >
            Our Travel Memories
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Explore our collection of breathtaking travel moments from around the
            world
          </p>
        </div>

        <div className="row g-4">
          {galleryImages.map((image) => (
            <div className="col-md-6 col-lg-3" key={image.id}>
              <div
                className="gallery-item"
                style={{ height: '300px' }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: 'rgba(0,0,0,0.9)',
            zIndex: 9999,
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="position-absolute top-0 end-0 m-4 btn btn-link"
            style={{ color: '#fff', fontSize: '30px' }}
            onClick={() => setSelectedImage(null)}
          >
            <FiX />
          </button>
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="modal-img"
            style={{ maxWidth: '90%', maxHeight: '80vh' }}
          />
          <h4 className="position-absolute bottom-0 text-white mb-4">
            {selectedImage.title}
          </h4>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;