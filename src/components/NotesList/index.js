// Core
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styles from "./styles.module.css";

// Actions
import { notesActions } from '../../bus/notes/actions';

const mapStateToProps = (state) => {

    return {
        notes: state.notes,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators(
            { ...notesActions },
            dispatch
        ),
    };

};

@connect(mapStateToProps, mapDispatchToProps)

class NotesList extends Component {

    componentDidMount = () => {
        const localNotes = JSON.parse(localStorage.getItem('notes'));

        if (localNotes) {
            this.props.actions.sendNotes(localNotes);
        }

        return null;
    }

    componentDidUpdate = () => {

        this.props.actions.writeNotesLocal();

    };
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

      // eslint-disable-next-line no-alert
      const text = window.prompt("Note text:");

      if (!text) {
          return null;
      }

      const indexNote = e.target.dataset.index;

      this.props.actions.addNote({ text, indexNote });
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

export default NotesList;
