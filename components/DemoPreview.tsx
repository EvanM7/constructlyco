export default function DemoPreview({ full = false }: { full?: boolean }) {
  return (
    <div className={`demo-site ${full ? "demo-full" : ""}`}>
      <div className="demo-nav">
        <strong>
          KERRY
          <br />
          STONE &amp; BUILD<span>BUILDING · RENOVATION · STONEWORK</span>
        </strong>
        <span className="demo-menu">
          {full ? <a href="#demo-services">Our work</a> : "Our work"}
          {full ? (
            <a href="#demo-approach">Our approach</a>
          ) : (
            <span>Our approach</span>
          )}
          {full ? (
            <a href="#demo-enquiry" className="demo-contact">
              Get in touch ↗
            </a>
          ) : (
            <span className="demo-contact">Get in touch ↗</span>
          )}
        </span>
      </div>
      <div className="demo-hero">
        <div>
          <p className="demo-kicker">CRAFTED IN KERRY.</p>
          <h3>
            Built with care.
            <br />
            Made to last.
          </h3>
          <p>
            Thoughtful building, renovation and stonework. A straightforward
            approach from the first conversation to the final detail.
          </p>
          {full ? (
            <a href="#demo-services" className="demo-link">
              Explore our work <span>↗</span>
            </a>
          ) : (
            <span className="demo-link">
              Explore our work <span>↗</span>
            </span>
          )}
        </div>
        <div
          className="house-illustration"
          role="img"
          aria-label="Architectural illustration of a stone house"
        >
          <div className="house-sun" />
          <div className="house-roof" />
          <div className="house-wall">
            <i />
            <i />
            <b />
          </div>
          <div className="house-wing">
            <i />
            <i />
          </div>
          <div className="house-path" />
          <span>01 / A PLACE TO CALL HOME</span>
        </div>
      </div>
      <div className="demo-trades">
        <span>New builds</span>
        <span>Home renovations</span>
        <span>Stonework</span>
        <span>County Kerry</span>
      </div>
      {full && (
        <>
          <div className="demo-content" id="demo-approach">
            <p className="eyebrow">The approach</p>
            <h2>
              Good work starts
              <br />
              with a clear conversation.
            </h2>
            <p>
              This is a fictional building company created to demonstrate
              website design. The content, projects and business are examples.
              No client relationship or completed building work is implied.
            </p>
          </div>
          <div className="demo-content demo-services" id="demo-services">
            <h2>
              Space to show
              <br />
              what you do best.
            </h2>
            {["New builds", "Renovations", "Stonework"].map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                <h3>{x}</h3>
                <p>
                  A dedicated service description helps visitors understand the
                  work you take on, your approach and the areas you cover.
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
