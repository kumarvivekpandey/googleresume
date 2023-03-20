import { useContext } from "react";
import TitleDesc from "../components/TitleDesc";
import { MapContainer } from "../styles/Map.styled";
import { ThemeContext } from "./_app";

const Map = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <TitleDesc
        title="Jayesh's Location"
        desc="Here mentioned location of Jayesh."
      />
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14345.586240873785!2d84.4040536688237!3d25.
          9878239246903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992f25c105c6d83%3A0xd541070a11ba799c!2s
          Mubarakpur%2C%20Chainpur%20Mubarakpur%2C%20Bihar%20841203%2C%20India!5e0!3m2!1sen!2sus!4v1679291887997!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: "0px", ...(darkMode && { filter: "invert(90%)" }) }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>


      </MapContainer>
    </div>
  );
};
export default Map;
