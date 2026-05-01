import { FaWhatsapp } from "react-icons/fa";

export const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/254XXXXXXXXX?text=Hi%20Ralph,%20I%20need%20a%20website%20for%20my%20business"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp />
    </a>
  );
};