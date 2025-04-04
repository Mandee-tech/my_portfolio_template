import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="https://docs.google.com/document/d/1Yhz3wfqnRq17Y1q6NxOx67CN1tLWKEx2lEykZdXFABs/edit?usp=sharing" download=" Mandee" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume