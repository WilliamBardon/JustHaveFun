import "./jhfbutton.scss";

interface IProps {
  icon: any;
  isSelected: boolean;
  onClickFunction?: () => void;
}

const Jhfbutton = ({ icon, isSelected, onClickFunction }: IProps) => {
  return (
    <button
      onClick={onClickFunction ? onClickFunction : () => {}}
      className={`jhf-button ${isSelected ? "selected" : ""}`}
    >
      {icon}
    </button>
  );
};

export default Jhfbutton;
