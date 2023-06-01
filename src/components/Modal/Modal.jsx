import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import './modal.css';

const modalRoot = document.querySelector('#modal-root');


export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        }

    handleKeyDown = (evt) => {
        if (evt.code === 'Escape') {
            this.props.onCloseModal();
        }
    }

    handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onCloseModal();
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return createPortal(
            <div className='modal_backdrop' onClick={this.handleBackdropClick}>
                <div className='modal_content'>
                    {this.props.children}
                </div>
            </div>,
            modalRoot,
        );
    }
};

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
};



