import { Outlet } from 'react-router'

import { Header } from "../components/Header";

import { DefaultLayoutContainer } from './DefaultLayout.styles';

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
