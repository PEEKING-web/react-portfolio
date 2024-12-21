import { CONTACT } from "../constants";
import leftGif from "../assets/left.gif";  // Import the left GIF
import rightGif from "../assets/right.gif"; // Import the right GIF
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 relative">
      < motion.h1 
      
      whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      
      className="my-10 text-center text-4xl">Contact Me</motion.h1>
      <div className="flex justify-between items-center">
        {/* Left GIF */}
        <div className="hidden md:block w-1/6">
          <img
            src={leftGif}
            alt="Left GIF"
            className="w-full object-cover"
          />
        </div>

        {/* Contact Content */}
        <div className="text-center tracking-tighter w-full md:w-1/2">
          < motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          
          className="my-4">{CONTACT.address}</motion.p>
          < motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          
          
          className="my-4">{CONTACT.phoneNo}</ motion.p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-block transition-transform duration-300 hover:scale-110 border-b"
          >
            {CONTACT.email}
          </a>
        </div>

        {/* Right GIF */}
        <div className="hidden md:block w-1/6">
          <img
            src={rightGif}
            alt="Right GIF"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;


