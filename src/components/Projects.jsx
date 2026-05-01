export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2>Websites I have built.</h2>
        <p>Examples of clean, modern web experiences I’ve developed.</p>

        <div className="grid">
          <div className="card">
            <h3>TV Show Tracker</h3>
            <p>
              A modern web application with a clean UI for browsing and tracking TV shows.
            </p>
          </div>

          <div className="card">
            <h3>Flashcard App</h3>
            <p>
              An interactive card-based application designed for engaging and dynamic user experiences.
            </p>
          </div>

          <div className="card">
            <h3>Blog Manager</h3>
            <p>
              A structured content management interface focused on usability and clean design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
