import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOptionState}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        // adding a custom classname overrides the modal content default styles
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOptionState}>Okay</button>
    </Modal>
);

export default OptionModal; 