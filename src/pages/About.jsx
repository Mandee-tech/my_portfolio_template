import { NavLink } from 'react-router-dom';
import profileImage from '../assets/IMG_9237.jpg';

// Replace these variables with your information
const firstName = 'Mandee';
const jobTitle = 'Full Stack Developer & Creative Technologist';
const company = 'Self-Taught / NPower Path2Tech Grad';
const mainDuty = 'Building inclusive, human-centered digital experiences';
const jobLocation = 'Maryland';
const briefJobDescription = 'I\'m passionate about turning ideas into intuitive interface and solving real-world problems through clean code.';
const careerObjective = 'I\'m looking for opportunities where I can grow as a front-end or UX/UI developer.';
const personalLife = 'Outside of tech, I\'m a dedicated mom, a creative spirit, and a strong advocate for community and healing.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={profileImage} alt="Mandee Crumpton" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
};
 export default About;