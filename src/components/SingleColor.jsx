import { toast } from "react-toastify";

const SingleColor = ({ weight, hex, index }) => {
  const color = index > 10 ? "#fff" : "#000";

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy color to clipboard");
      }
    }
  };
  return (
    <article
      className="single-color"
      style={{ backgroundColor: `#${hex}`, color: color }}
      onClick={saveToClipboard}
    >
      <div className="single-color__text">
        <p>{weight}%</p>
        <p>#{hex}</p>
      </div>
    </article>
  );
};

export default SingleColor;
