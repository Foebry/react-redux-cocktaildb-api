import { showDetail } from "../data/cocktailSlicer";
import { useDispatch } from "react-redux";

const Cocktail = ({ idDrink, strDrink, strDrinkThumb }) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(showDetail(idDrink));

  return (
    <li>
      <h1>{strDrink}</h1>
      <div className="imgholder">
        <img src={strDrinkThumb} />
      </div>
      <button onClick={onClick}>details</button>
    </li>
  );
};

export default Cocktail;
