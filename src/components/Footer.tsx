import { FacebookIcon, GithubIcon,  LinkedinIcon } from "lucide-react"
import Container from "./Container"


const Footer = () => {
  return (
      <footer className="footer pb-3">
      <div className="container">
        <div className="flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Simons org. All rights reserved.</p>
          <div className=" flex space-x-3">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i>
                <GithubIcon size={32} />
              </i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i>
                <LinkedinIcon size={32} />
              </i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i>
                <FacebookIcon size={32} />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer