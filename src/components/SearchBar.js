import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import * as React from "react";
import { useState } from "react";
//import "../css/SearchBar.css";
import "../css/SearchBar.css";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  const handleOnChange = ({ target: { value: inputValue } }) => {
    setInput(inputValue);
  };

  return (
    <div className="SearchBar">
      <form className="SearchBarInputWrap" onSubmit={handleSubmit}>
        <TextField
          variant='outlined'
          id="outlined-basic"
          placeholder="Введите город..."
          onChange={handleOnChange}
          value={input}
          className="SearchBarInput"
          autoFocus
            InputProps={{
              endAdornment: input.length > 0 && (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" ,
                    borderRadius: "50px 50px 0 0"}}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
        />
      </form>
    </div>
  );
};
