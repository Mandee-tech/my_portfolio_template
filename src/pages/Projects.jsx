import { FaGithub } from "react-icons/fa6";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'HTML IT Member Webpage ',
    description:'A static web page built using HTML, designed for IT members. This project focuses on structuring content effectively, implementing semantic HTML elements, and ensuring accessibility.',
    repositoryLink: 'https://github.com/Mandee-tech/Path2tech_HTML_Project',
  },
  {
    title: 'CSS Email Template Webpage ',
    description: 'An email template designed to improve the user’s email viewing experience. This project focuses on creating a structured and user-friendly layout using HTML and CSS, ensuring readability and responsiveness across different devices.',
    repositoryLink: 'https://github.com/Mandee-tech/Css-Project',
  },
  {
    title: 'JavaScript TODO List',
    description: 'A task management application built using JavaScript. This project allows users to add, delete, and mark tasks as completed, demonstrating fundamental JavaScript skills such as functions, event handling, and basic logic for managing tasks.',
    repositoryLink: 'Mandee-tech/JS_Project',
  },
  {
    title: 'Weather-App',
    description: 'A user-friendly weather application that fetches real-time weather data using the OpenWeatherMap API. Built with HTML, CSS, and JavaScript, it displays current temperature, conditions, and weather icons based on user input. Emphasized responsive design and clear UI for easy access to weather information.',
    repositoryLink: 'https://github.com/Mandee-tech/Weather-App-Template',
  },
  {
    title: 'Library App',
    description: ' A virtual book-tracking app that lets users add, view, and delete books from a personal library. Built using JavaScript and DOM manipulation, it uses object constructors and dynamic rendering to manage the book list directly ',
    repositoryLink: 'https://github.com/RoscelinMendoza/PathToTechDOM6',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            <FaGithub />
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects