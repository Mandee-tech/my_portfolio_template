import { NavLink } from "react-router-dom";
import "../styles/home.scss";

const fullName = "Mandee Crumpton";
const personalQuote = "I build with heart, creativity, and purpose—crafting digital experiences that look bold, feel powerful, and shape the future.";
const professionalSummary =
  "I’m a Full Stack Developer with a creative edge and passion for intuitive, impactful design. I bring front-end finesse and back-end logic together to build bold, user-centered web experiences.";

const Home = () => {
  return (
    <main className="home-container">
      {/* HERO SECTION */}
      <section className="home-hero home-subsection">
        <h1 className="text-4xl">{fullName}</h1>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">Contact Me</NavLink>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview</h2>
        <p className="subsection-paragraph">
          {professionalSummary}
        </p>
        <NavLink to="/about">Learn More About Me</NavLink>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects</h2>
        <p className="subsection-paragraph">
          Each project reflects my ability to combine strategy, creativity, and technical skill to solve problems. From
          APIs to responsive UIs, my work showcases the full scope of my full-stack development skills.
        </p>
        <NavLink to="/projects">View Projects</NavLink>
      </section>
    </main>
  );
};

export default Home;

