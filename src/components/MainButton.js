import "./styles.scss";

const MainButton = ({ children, type, disable }) => {
  return (
    <button
      className="mainbutton"
      type={type}
      disabled={disable}
      style={{ color: disable && "grey" }}
    >
      {children}
    </button>
  );
};

export default MainButton;
