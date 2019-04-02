import React from "react";
import { connect } from "react-redux";
import { addNote } from "../../redux/actions/notes";

import styles from "./styles.module.css";

const enhance = connect(
    ({ notes }) => ({ notes }),
    { addNote }
);

class NotesList extends React.Component {
  renderNote = (note) => <div className = { styles["note-list-item"] }>{note}</div>;

  renderAddButton = (index = 0) => (
      <button
          className = { styles["add-note"] }
          data-index = { index }
          onClick = { this.onAddButtonClick }>
      + add note
      </button>
  );

  onAddButtonClick = (e) => {
      const text = window.prompt("Note text:");

      this.props.addNote(text, e.target.dataset.index);
  };

  render () {
      if (!this.props.notes.length) {
          return this.renderAddButton();
      }

      return (
          <ul className = { styles["note-list"] }>
              {this.props.notes.map((note, index) => {
                  return (
                      <li key = { index }>
                          {this.renderNote(note)}
                          {this.renderAddButton(index)}
                      </li>
                  );
              })}
          </ul>
      );
  }

}

export default enhance(NotesList);
