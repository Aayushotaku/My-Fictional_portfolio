import { BsDisplay, BsJustify } from "react-icons/bs";
import Button from "./Button";
import MyPhoto from "./assets/image.webp";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center mt-3"> 
        <img 
          src={MyPhoto}
          alt="aayush"
          style={{ height: "200px", width: "200px", borderRadius: "50%" }}
        />
      </div>
      <h1 className="text-center font-bold text-white">Hi, I am iron man</h1>
      <h2 className="text-center font-bold text-white">Fullstack developer</h2>
      <h3 className="text-center text-white">
        Tony Stark, known as Iron Man, is a genius billionaire playboy
        philanthropist and the CEO of Stark Industries. Inheriting the company
        from his father, he revolutionized it into a technological powerhouse.
        After being kidnapped and forced to create a weapon, Tony built his
        first Iron Man suit to escape, marking the start of his journey as a
        superhero. With his unmatched intellect and engineering skills, he
        developed numerous advanced suits of armor and the revolutionary Arc
        Reactor, a clean energy source. As a founding member of The Avengers,
        Tony dedicated his life and resources to protecting the world from
        formidable threats, embodying the spirit of innovation and heroism.
      </h3>
      <div className="flex gap-4  justify-center p-1">
        <Button title="Contact Me" type="orange" icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
      </div>
    </div>
  );
};

export default Hero;
