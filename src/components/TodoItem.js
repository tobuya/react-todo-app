/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => () => {

  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          // eslint-disable-next-line react/destructuring-assignment, react/prop-types
          onChange={() => props.handleChangeProps(id)}
        />
        <button type="button" onClick={() => props.deleteTodoProps(id)}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => { props.setUpdate(e.target.value, id); }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
