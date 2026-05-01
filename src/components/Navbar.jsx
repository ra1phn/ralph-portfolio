export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        
        <h2 className="logo">Ralph Njuguna</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <a 
        href="https://wa.me/254XXXXXXXXX" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp nav-cta">
          Get a Website
        </a>

      </div>
    </nav>
  );
};
