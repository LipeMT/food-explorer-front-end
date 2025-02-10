import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles"
import { useState } from "react";

export function DishItem({ placeholder, isNew = false, value, onClick, ...rest }) {
    
    return (
        <Container $isNew={isNew}>
            <input
                placeholder={placeholder}
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />
            <button
                type="button"
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}