import React from 'react';

const TodoModal = ({ isOpen, value, onChange, onClose, onSave }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Edit Task</h3>
        <input value={value} onChange={onChange} style={styles.input} />
        <div style={styles.actions}>
          <button onClick={onSave} style={styles.save}>Save</button>
          <button onClick={onClose} style={styles.cancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0,
    width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    padding: '20px',
    borderRadius: '6px',
    width: '300px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
  save: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
  },
  cancel: {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
  },
};

export default TodoModal;
