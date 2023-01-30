import { useEffect, useState } from "react";
import "./styles.scss";
import { vibrate } from "./animations";
import Jhfbutton from "./components/jhfbutton/jhfbutton";
import InfoPopUp from "./components/infopopup/infopopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import {
  faWater,
  faWind,
  faTornado,
  faHeart,
  faInfinity,
  faLock,
  faMobileAndroidAlt,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

import {
  wave,
  call,
  descendent,
  resetPresetAnimations,
  continuous,
  wind,
  sos,
  heartbeat
} from "./presetanimations";
import LockScreen from "./components/lockscreen/lockscreen";

export default function App() {
  const navigatorVibrate = navigator.vibrate;
  const [isPresetActive, setIsPresetActive] = useState("");
  const [isScreenLockerVisible, setIsScreenLockerVisible] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  useEffect(() => {
    if (!!navigatorVibrate) {
      vibrate([0]);
      resetPresetAnimations();

      switch (isPresetActive) {
        case "infinite":
          continuous(true);
          break;
        case "wave":
          wave(true);
          break;
        case "wind":
          wind(true);
          break;
        case "descendent":
          descendent(true);
          break;
        case "call":
          call(true);
          break;
        case "sos":
          sos(true);
          break;
        case "heartbeat":
          heartbeat(true);
          break;
        case "":
          resetPresetAnimations();
          vibrate([0]);
          break;
        default:
          resetPresetAnimations();
          vibrate([0]);
          break;
      }
    }
  }, [isPresetActive, navigatorVibrate]);

  return (
    <div className="App">
      <Helmet>
        ‍<title>Just Have Fun ;)</title>‍
        <link rel="icon" href="%PUBLIC_URL%/jhf-favicon.ico" />
        <meta
          name="Just Have Fine | Personal vibrator free"
          content="free online vibrator, masseger, massage yourself, body massage, vibratore gratis online, vibration, vibrator, just have fun. Strong vibration, vibratore forte. Vibration simulator. Smartphone vibration. Sexify Netflix inspiration"
        />
        ‍
      </Helmet>
      <>
        <h2>
          Just Have Fun <img src="/assets/jhf-logo.png" alt="" />{" "}
        </h2>
        <br />
        <div
          className="selected"
          onClick={() =>
            isPresetActive === "infinite"
              ? setIsPresetActive("")
              : setIsPresetActive("infinite")
          }
        >
          <Jhfbutton
            icon={<FontAwesomeIcon icon={faInfinity} size="4x" />}
            // onClickFunction={() => {
            //   !!navigatorVibrate ? continuous(true) : null;
            // }}
            isSelected={isPresetActive === "infinite" ? true : false}
          />
        </div>
      </>

      {/* <Slider /> */}
      <br />
      <br />
      <h3>
        Mooore Fun &nbsp;
        <img src="/assets/jhf-more-fun.png" alt="" />
      </h3>
      <div className="patterns">
        <div
          className="pattern"
          onClick={() =>
            isPresetActive === "wave"
              ? setIsPresetActive("")
              : setIsPresetActive("wave")
          }
        >
          <Jhfbutton
            icon={<FontAwesomeIcon icon={faWater} size="3x" />}
            isSelected={isPresetActive === "wave" ? true : false}
          />
        </div>
        {/* <button onClick={() => setIsPresetActive("wave")}>Wave</button> */}
        <div
          className="pattern"
          onClick={() =>
            isPresetActive === "wind"
              ? setIsPresetActive("")
              : setIsPresetActive("wind")
          }
        >
          <Jhfbutton
            icon={<FontAwesomeIcon icon={faWind} size="3x" />}
            isSelected={isPresetActive === "wind" ? true : false}
          />
        </div>
        <div
          className="pattern"
          onClick={() =>
            isPresetActive === "descendent"
              ? setIsPresetActive("")
              : setIsPresetActive("descendent")
          }
        >
          <Jhfbutton
            icon={<FontAwesomeIcon icon={faTornado} size="3x" />}
            isSelected={isPresetActive === "descendent" ? true : false}
          />
        </div>
        <div
          className="pattern"
          onClick={() =>
            isPresetActive === "call"
              ? setIsPresetActive("")
              : setIsPresetActive("call")
          }
        >
          <Jhfbutton
            icon={<FontAwesomeIcon icon={faMobileAndroidAlt} size="3x" />}
            isSelected={isPresetActive === "call" ? true : false}
          />
        </div>
        <div
          className="pattern"
          onClick={() =>
            isPresetActive === "sos"
              ? setIsPresetActive("")
              : setIsPresetActive("sos")
          }
        >
          <Jhfbutton
            icon={
              <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {" "}
                SOS{" "}
              </span>
            }
            isSelected={isPresetActive === "sos" ? true : false}
          />
        </div>
        <div
          className="pattern"
          onClick={() =>
            isPresetActive === "heartbeat"
              ? setIsPresetActive("")
              : setIsPresetActive("heartbeat")
          }
        >
          <Jhfbutton
            icon={<FontAwesomeIcon icon={faHeart} size="3x" />}
            isSelected={isPresetActive === "heartbeat" ? true : false}
          />
        </div>
      </div>
      <footer>
        <button className="lock" onClick={() => setIsScreenLockerVisible(true)}>
          <FontAwesomeIcon icon={faLock} />
          <span>Lock the screen</span>
        </button>

        <button
          className="info"
          onClick={() => setIsInfoVisible(!isInfoVisible)}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          &nbsp; &nbsp;
          <span className="info-label">No Vibration ?</span>
        </button>
      </footer>
      {isScreenLockerVisible ? (
        <LockScreen setIsLockScreenVisible={setIsScreenLockerVisible} />
      ) : null}
      {isInfoVisible ? <InfoPopUp setIsInfoVisible={setIsInfoVisible} /> : null}
    </div>
  );
}
