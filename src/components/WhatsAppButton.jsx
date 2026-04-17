import { FiMessageCircle } from 'react-icons/fi';

const WhatsAppButton = () => {
  const phoneNumber = '919999999999';
  const message = 'Hello SkyWay Travels, I am interested in your travel packages. Please help me plan my trip!';
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FiMessageCircle />
    </a>
  );
};

export default WhatsAppButton;