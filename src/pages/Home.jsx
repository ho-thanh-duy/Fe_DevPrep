import { NavLink } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Home() {
 // check token and user from localStorage
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");


  const stats = [
    { value: "97%", label: "SUCCESS RATE" },
    { value: "50K+", label: "SESSIONS" },
    { value: "150+", label: "ROLE TYPES" },
    { value: "12ms", label: "AI LATENCY" },
  ];

  const features = [
    {
      title: "CV Semantic Analyzer",
      desc: "AI-powered parsing that maps your experience to target role competencies for perfect alignment.",
    },
    {
      title: "Immersive Mock Interviews",
      desc: "Voice-activated real-time sessions that simulate actual high-pressure tech interview environments.",
    },
    {
      title: "Interview Integrity System",
      desc: "Advanced anti-cheat and verification protocols ensuring a fair and credible preparation cycle.",
    },
  ];

  const steps = [
    "Register & Login",
    "Purchase Credits",
    "Select Role",
    "Start Interview",
    "Review & Improve",
  ];

  //   useEffect(() => {
  //   localStorage.setItem("token", "sample-token-123");

  //   localStorage.setItem(
  //     "user",
  //     JSON.stringify({
  //       id: 1,
  //       name: "Ho Thanh Duy",
  //       avatar: "https://i.pravatar.cc/150?img=3",
  //     })
  //   );
  // }, []);
  console.log(token, "token", user, "user");
localStorage.removeItem("token");
localStorage.removeItem("user");

  return (
    <div className="home">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">DevPrep</div>

        <ul className="menu">
          <li className="">HOME</li>
          <li>PAYMENT</li>
          <li>NEWS</li>
          <li>FEEDBACK SYSTEM</li>
          <li>FEEDBACK AI</li>
        </ul>

       <div className="nav-btns">
          {!token ? (
            <>
            <NavLink to="/login">Login</NavLink> <button className="start-btn">Get Started</button>
            </>
          ) : (
            <NavLink to="/profile">
              <img
                src={
                  user?.avatar ||
                  "https://ui-avatars.com/api/?name=User"
                }
                alt="Profile"
                className="profile-avatar"
              />
            </NavLink>
          )}

          
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="badge">
            ⚡ AI-POWERED ENGINEERING PREP
          </div>

          <h1>
            Master Technical
            <br />
            Interviews with AI
          </h1>

          <p>
            The only high-performance platform designed by elite engineers
            to help you conquer coding, system design, and behavioral
            interviews through real-time AI feedback.
          </p>

          <div className="hero-actions">
            <button className="start-btn large">
              Start Interview Session
            </button>

            <button className="outline-btn">
              View Pricing Plans
            </button>
          </div>

          <div className="process">
            REGISTER → LOGIN → PURCHASE CREDITS → START INTERVIEW
          </div>

          <div className="trusted">
            <div className="avatars">
              <span />
              <span />
            </div>

            Trusted by 2,000+ engineers
          </div>
        </div>

        <div className="hero-right">
          <div className="monitor">
            <div className="fake-screen">
              <div className="left-panel"></div>

              <div className="chart">
                <div className="chart-wave"></div>
              </div>
            </div>

            <div className="listening">
              ● AI LISTENING...
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose DevPrep AI</h2>

        <p className="subtitle">
          Explore all features on the News page.
        </p>

        <div className="feature-grid">
          {features.map((item) => (
            <div className="feature-card" key={item.title}>
              <div className="icon">◈</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <span>Learn More →</span>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline">
        <div className="line"></div>

        {steps.map((step, index) => (
          <div className="timeline-item" key={step}>
            <div className="number">{index + 1}</div>

            <h4>{step}</h4>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Ace Your Next Interview?</h2>

        <p>
          Join thousands of engineers who used DevPrep to secure offers
          at world-class technology companies.
        </p>

        <button className="start-btn large">
          Start Interview Session
        </button>
      </section>

    
      

    </div>
  );
}