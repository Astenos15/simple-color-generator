import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colors }) => {
  return (
    <section>
      <div className="colors">
        {colors.map((color, index) => {
          const { weight, hex } = color;
          const id = nanoid();
          return (
            <SingleColor key={id} weight={weight} hex={hex} index={index} />
          );
        })}
      </div>
    </section>
  );
};

export default ColorList;
