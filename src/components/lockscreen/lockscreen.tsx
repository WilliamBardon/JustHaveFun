import "./lockscreen.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import Slider from "../slider";

interface IProps {
  setIsLockScreenVisible: Function;
}

const LockScreen = ({ setIsLockScreenVisible }: IProps) => {
  return (
    <div className="lock-screen">
      <div className="lock-screen-content">
        <FontAwesomeIcon icon={faUnlock} size="10x" />
        <h2>Scroll to unlock</h2>
        <div className="slider-container">
          <Slider setIsLockScreenVisible={setIsLockScreenVisible} />
        </div>
      </div>
    </div>
  );
};

export default LockScreen;
