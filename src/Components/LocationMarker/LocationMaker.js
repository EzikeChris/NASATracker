// import your dependencies iconify and icon-mdi
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const LocationMaker = ({ lat, lng, onClick }) => {
  return (
    // This basically creates location markers based on our fire icon+imported in our map component
    <div onClick={onClick} className="location-maker">
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMaker;
