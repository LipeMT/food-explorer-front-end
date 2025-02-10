import { Container } from "./styles"

export function FormControl({children, label, className, ...rest}){

    return (
        <Container className={className} {...rest}> 
            <label htmlFor={children.props?.id}>{label}</label>
            {children}
        </Container>
    )
}