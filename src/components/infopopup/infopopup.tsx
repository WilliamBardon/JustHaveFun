import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./infopopup.scss";

interface IProps {
  setIsInfoVisible: Function;
}

const InfoPopUp = ({ setIsInfoVisible }: IProps) => {
  return (
    <div className="info-pop-up">
      <FontAwesomeIcon
        onClick={() => setIsInfoVisible(false)}
        className="close-icon"
        icon={faTimes}
        size="2x"
      />
      <h3>No Vibration?</h3>
      <div>
        <h4>Android:</h4>
        <span>
          Check that vibration is enabled on your device. <br /> <br />
          Setting -> Sound -> Turn on during a call or in silent mode.
        </span>
      </div>
      <div>
        <h4>IOS:</h4>
        <span>IOS disable vibration on web :'(</span>
      </div>
      <h3>Want Stronger Vibration?</h3>
      <div>
        <h4>Android:</h4>
        <span>
          If your device support managing of vibration you can check: <br />{" "}
          <br />
          Settings -> Sounds and vibration -> Vibration intensity -> Select
          maxium
        </span>
      </div>
    </div>
  );
};

export default InfoPopUp;
