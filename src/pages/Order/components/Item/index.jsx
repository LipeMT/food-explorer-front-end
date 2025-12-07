import { Container, ItemDetails } from "./styles";
import img from "../../../../assets/Mask group-2.png";


export function Item() {
  return (
    <Container>
      <img src={img} alt="" />
      <ItemDetails>
        <span>Salada Radish</span>
        <button>Remover</button>
      </ItemDetails>
    </Container>
  )
}