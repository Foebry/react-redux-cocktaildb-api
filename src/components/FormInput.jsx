import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../data/cocktailSlicer";

const FormInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(value));
    setValue("");
  };

  const onChange = (e) => setValue(e.target.value);

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <input type="submit" value="search" />
    </form>
  );
};

export default FormInput;
