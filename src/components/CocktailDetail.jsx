import { useGetCocktailByIdQuery } from "../data/cocktailApi";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const CocktailDetail = () => {
  const { cocktailId } = useSelector((state) => state.cocktailState);
  const { data, isLoading, isError } = useGetCocktailByIdQuery(cocktailId);

  return (
    <>
      {isLoading && "calling bartender"}
      {isError && "Bartender is unavaillable"}
      {data && (
        <div>
          <h1>{data.drinks.strDrink}</h1>
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
          </ul>
        </div>
      )}
    </>
  );
};

export default CocktailDetail;
