export const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container">

        <h2>Simple Website Pricing</h2>
        <p className="subtitle">
          Transparent pricing for businesses in Nairobi. No hidden costs.
        </p>

        <div className="grid pricing-grid">

          {/* BASIC */}
          <div className="card pricing-card">
            <h3>Starter</h3>
            <h2>KSh 15,000</h2>
            <p>Best for small businesses getting online</p>

            <ul>
              <li>✔ 1–3 Pages Website</li>
              <li>✔ Mobile Optimised</li>
              <li>✔ Basic Contact Form</li>
              <li>✔ 3–5 Days Delivery</li>
            </ul>

            <a
              href="https://wa.me/254XXXXXXXXX?text=Hi%20Ralph,%20I'm%20interested%20in%20the%20Starter%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <span>Start with Starter</span>
            </a>
          </div>

          {/* STANDARD (HIGHLIGHTED) */}
          <div className="card pricing-card featured">
            <div className="badge">Most Popular</div>

            <h3>Business</h3>
            <h2>KSh 25,000</h2>
            <p>Perfect for growing businesses that want more clients</p>

            <ul>
              <li>✔ 4–6 Pages Website</li>
              <li>✔ Modern Premium Design</li>
              <li>✔ Contact + Inquiry Forms</li>
              <li>✔ SEO Setup</li>
              <li>✔ Priority Delivery</li>
            </ul>

            <a
              href="https://wa.me/254XXXXXXXXX?text=Hi%20Ralph,%20I'm%20interested%20in%20the%20Business%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <span>Choose Business</span>
            </a>
          </div>

          {/* PREMIUM */}
          <div className="card pricing-card">
            <h3>Premium</h3>
            <h2>KSh 40,000+</h2>
            <p>For established brands and serious businesses</p>

            <ul>
              <li>✔ Full Custom Website</li>
              <li>✔ Advanced UI Design</li>
              <li>✔ Performance Optimisation</li>
              <li>✔ Priority Support</li>
              <li>✔ Custom Features</li>
            </ul>

            <a
              href="https://wa.me/254XXXXXXXXX?text=Hi%20Ralph,%20I'm%20interested%20in%20the%20Premium%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <span>Go Premium</span>
            </a>
          </div>

        </div>

        {/* reassurance line */}
        <p className="pricing-note">
          💡 Not sure what you need? Message me and I’ll recommend the best option for your business.
        </p>

      </div>
    </section>
  );
};
