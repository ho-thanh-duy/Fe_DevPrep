import "./ListNew.css";

export default function ListNew() {
  return (
    <div className="news-page">

      {/* TITLE */}
      <section className="hero">
        <h1>News & Features</h1>
        <p>Explore what makes DevPrep AI the smartest way to prepare.</p>

        <div className="filter-bar">
          <input placeholder="Search articles..." />

          <div className="tabs">
            <button className="active">All</button>
            <button>Features</button>
            <button>Updates</button>
            <button>Guides</button>
            <button>Integrity System</button>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured">
        <div className="featured-img" />
        <div className="featured-content">
          <span className="tag">FEATURES</span>
          <h2>Introducing the CV Semantic Analyzer</h2>
          <p>
            Deep-learning semantic parsing to your resume analysis, identifying
            hidden keywords and structural gaps.
          </p>
          <div className="meta">Alex Thorne • JUN 10, 2026 • 5 MIN READ</div>
        </div>
      </section>

      {/* GRID */}
      <section className="grid">
        {Array(6).fill(0).map((_, i) => (
          <div className="card" key={i}>
            <div className="card-img" />
            <span className="tag">GUIDES</span>
            <h3>Mastering System Design Interview</h3>
            <p>Distributed systems, load balancing, scalability patterns.</p>
          </div>
        ))}
      </section>

      {/* PAGINATION */}
      <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>{">"}</button>
      </div>

     
    </div>
  );
}