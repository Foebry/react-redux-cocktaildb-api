import { useGetCocktailByIdQuery } from "../data/cocktailApi";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { hideDetail } from "../data/cocktailSlicer";

const CocktailDetail = () => {
  const { cocktailId } = useSelector((state) => state.cocktailState);
  const { data, isLoading, isError } = useGetCocktailByIdQuery(cocktailId);

  const dispatch = useDispatch();
  const onClose = () => dispatch(hideDetail());

  return (
    <div className="aside">
      {isLoading && "calling bartender"}
      {isError && "Bartender is unavaillable"}
      <button onClick={onClose}>X</button>
      {data && (
        <div>
          <h1>Create the best {data.drinks[0].strDrink} ever</h1>
          <div className="imgholder">
            <img src={data.drinks[0].strDrinkThumb} />
          </div>
          <h2>Ingredients</h2>
          <ul>
            {Object.keys(data.drinks[0])
              .filter((key) => key.includes("strIngredient"))
              .map((key) => data.drinks[0][key])
              .filter((ingredient) => ingredient > "")
              .map((ingredient) => (
                <li key={nanoid(5)}>{ingredient}</li>
              ))}
          </ul>
          <h2>Instructions</h2>
          <ul>
            {data.drinks[0].strInstructions
              .split(/[,.]/)
              .filter((instr) => instr > "")
              .map((instr) => (
                <li key={nanoid(5)}>{instr.trim()}</li>
              ))}
            <li key={nanoid(5)}>Serve in a {data.drinks[0].strGlass}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CocktailDetail;
