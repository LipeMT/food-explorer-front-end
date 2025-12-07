import { Outlet } from 'react-router-dom'

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { useState } from 'react';
import { SideMenu } from '../../components/SideMenu';

export function DefaultLayout() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} /*onChange={"(e) => setSearch(e.target.value)"}*/ />
      <Header onOpenMenu={() => setMenuIsOpen(true)} /*onChange={""}*/ />

        <Outlet />

      <Footer />
    </Container>
  )
}