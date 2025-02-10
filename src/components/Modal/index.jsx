import { Container } from './styles'

import React from "react";

import { FiX } from 'react-icons/fi';

export const Modal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <Container>
            <div className="modal-content">
                <h2>{title}</h2>
                <button className="modal-close" onClick={onClose}>
                    <FiX />
                </button>
                {children}
            </div>
        </Container>
    );
};
