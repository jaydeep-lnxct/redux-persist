import { Colors } from "../../../public/assets/colors";
const Buttons = ({ text = "Next", style, onClick }: any) => {
  return (
    <>
      <button
        onClick={onClick}
        style={
          style
            ? {
                background: Colors.Primary,
                color: "#fff",
              }
            : { background: "#fff", color: "#000", border: "1px solid #000" }
        }
      >
        {text}
      </button>
    </>
  );
};

export default Buttons;
