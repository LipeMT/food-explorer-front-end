import { Item } from "./components/Item";
import { Items, Main, OrderDetails, Payment } from "./styles";

import img1 from '../../assets/Mask group-2.png'
import { Button } from "../../components/Button";

export function Order() {
  return (
    <Main>
      <OrderDetails>
        <h1>Meu pedido</h1>
        <Items>
          <Item title="teste" img="teste" />
          <Item title="teste" img="teste" />
        </Items>
        <p className="total-value">Total: R$ 30,00</p>
        <Button className="mobile-only" title="Avançar"></Button>
      </OrderDetails>
      <Payment className="desktop-only">
        <h1>Pagamento</h1>
        <div className="method">
          <div>
            <button>Pix</button>
            <button>Crédito</button>
          </div>
          <div className="payment-data">
            <img src={img1} alt="" />
          </div>
        </div>
      </Payment>
    </Main>
  )
}