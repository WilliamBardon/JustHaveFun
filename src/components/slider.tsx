import { useEffect, useState } from "react";
import "./slider.scss";

interface IProps {
  setIsLockScreenVisible?: Function;
}
const Slider = ({ setIsLockScreenVisible }: IProps) => {
  const [rangeValue, setrangeValue] = useState(1);

  function dragging() {
    var slider = document.getElementById("slider");
    var output = document.getElementById("value");
    if (output && slider) {
      //@ts-ignore
      output.innerHTML = slider.value;
      //@ts-ignore
      setrangeValue(Number(slider.value));
    }
  }

  useEffect(() => {
    if (rangeValue > 98) {
      if (setIsLockScreenVisible) setIsLockScreenVisible(false);
    }
  }, [rangeValue]);

  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="1"
        max="100"
        value={rangeValue}
        className="slider"
        id="slider"
        onChange={() => dragging()}
      />
      <p>
        Value: <span id="value"></span>
      </p>
    </div>
  );
};

export default Slider;
