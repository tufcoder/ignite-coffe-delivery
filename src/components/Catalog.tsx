import { useContext } from 'react';

import { CoffeesContext } from "../contexts/CoffeesContext";

import { CoffeeCard } from "./CoffeeCard";

import { CatalogContainer } from "./Catalog.styles";

export function Catalog() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <CatalogContainer>
      <header>
        <h2>Nossos cafés</h2>
      </header>
      <main>
        {coffees.length > 0 && coffees.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </main>
    </CatalogContainer>
  )
}
