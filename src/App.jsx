import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetCocktailsByNameQuery } from "./data/cocktailApi";
import Cocktail from "./components/Cocktail";
import CocktailDetail from "./components/CocktailDetail";
import FormInput from "./components/FormInput";

const App = () => {
  const { searchValue, cocktailId } = useSelector(
    (state) => state.cocktailState
  );
  const { data, isLoading, isError } = useGetCocktailsByNameQuery(searchValue);

  const cocktails = useMemo(
    () =>
      data && (
        <ul>
          {data.drinks.map((drink) => (
            <Cocktail key={drink.idDrink} {...drink} />
          ))}
        </ul>
      ),
    [data]
  );

  return (
    <>
      <main>
        <FormInput />
        {isLoading && <p>Opening the bar</p>}
        {isError && <p>The bar is closed due to technical difficulties</p>}
        {cocktails}
      </main>
      {cocktailId && <CocktailDetail />}
    </>
  );
};

export default App;
