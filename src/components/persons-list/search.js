import React from "react";

export const getSuggestions = (persons, value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : persons.filter(
        person =>
          person.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

export const getSuggestionValue = suggestion => suggestion.name;

export const renderSuggestion = suggestion => <div className="react-autosuggest__list">{suggestion.name}</div>;
