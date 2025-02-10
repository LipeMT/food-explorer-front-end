import React from "react";
import { Container } from "./styles";

export function Select({ icon: Icon, className, children, ...rest }){

    return (
        <Container className={className}>
            <select {...rest}> 
                {children.length > 1 ? children.map(option => option) : children}
            </select>
            {Icon && <Icon size={20} />}
        </Container>
    )
}