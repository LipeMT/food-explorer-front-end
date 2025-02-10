import { Container } from './styles'

import { useState } from 'react';

export function FileInput({icon, onChange, title}){
    return (
        <Container>
            <input
                type="file"
                id="fileInput"
                onChange={onChange}
            />
            <label htmlFor="fileInput" className="custom-label">
                {icon}{title}
            </label>
        </Container>
    );
};

