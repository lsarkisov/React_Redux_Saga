import React, { Component } from "react";
import { Modal, ModalHeader, ModalFooter, Button } from "reactstrap";
import Pagination from "rc-pagination";
import { arrayMove } from "react-sortable-hoc";
import Autosuggest from "react-autosuggest";
import PersonPopUp from "./popup";
import SortableList from "./sortables";
import {
  getSuggestions,
  getSuggestionValue,
  renderSuggestion
} from "./search";
import "rc-pagination/assets/index.css";

class PersonsList extends Component {
  state = {
    persons: null,
    current: 1,
    delta: 10,
    modal: false,
    person: null,
    value: "",
    suggestions: [],
  };

  componentDidMount() {
    this.props.fetchPersonsList();
  }

  componentDidUpdate() {
    const { persons } = this.state;

    if (!persons && this.props.persons) {
      this.setState({
        persons: this.props.persons
      });
    }
  }

  onFiltering(index, current, delta) {
    if (index >= (current - 1) * delta && index < current * delta) {
      return true;
    }
    return false;
  }

  onSortEnd = ({ oldIndex, newIndex }) =>
    this.setState({
      persons: arrayMove(this.state.persons, oldIndex, newIndex)
    });

  onChange = current =>
    this.setState({
      current
    });

  toggle = person =>
    this.setState({
      modal: !this.state.modal,
      person
    });

  onSearchChange = (event, { newValue }) => {
    // TODO: to be fixed
    this.state.value = newValue;
    this.setState(this.state);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const suggestions = getSuggestions(this.props.persons, value);

    this.setState({
      value,
      suggestions,
      persons: suggestions
    });
  };

  onSuggestionsClearRequested = () => {
    const isValueEmpty = this.state.value.length > 0;

    this.setState(state => {
      return {
        suggestions: [],
        persons: isValueEmpty ? this.state.suggestions : this.props.persons
      };
    });
  };

  render() {
    const { persons, person, value, current, delta } = this.state;
    const inputProps = {
      placeholder: "search person...",
      value,
      onChange: this.onSearchChange
    };

    return (
      <div className="container persons__list">
        {persons && (
          <>
            <Autosuggest
              suggestions={persons}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
            <SortableList
              current={current}
              delta={delta}
              persons={persons}
              toggle={this.toggle}
              onSortEnd={this.onSortEnd}
              onFiltering={this.onFiltering}
              useDragHandle={true}
            />
          </>
        )}

        {persons && persons.length > delta && (
          <Pagination
            onChange={this.onChange}
            current={current}
            total={persons.length}
            pageSize={delta}
          />
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Person information</ModalHeader>
          {person && <PersonPopUp person={person} />}
          <ModalFooter>
            <Button outline color="secondary" onClick={this.toggle}>
              Back
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PersonsList;
