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
      data && data.drinks ? (
        <ul>
          {data.drinks.map((drink) => (
            <Cocktail key={drink.idDrink} {...drink} />
          ))}
        </ul>
      ) : (
        <h1>We don't know any drinks by that name. Are you drunk?</h1>
      ),
    [data]
  );

  return (
    <>
      <main className={cocktailId ? "small" : undefined}>
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
