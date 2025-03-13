// import { useContext } from 'react';
import { NavLink } from 'react-router';

// import { CoffeesContext } from '../contexts/CoffeesContext';
import { CoffeeType } from '../contexts/CoffeesContextProvider';

import { ButtonCart } from './ButtonCart';
import { ButtonPlusMinus } from './ButtonPlusMinus';

import { priceConverter } from '../utils/functions';

import {
  CoffeeCardBottom,
  CoffeeCardContainer,
  CoffeeCardDescription,
  CoffeeCardTitle,
  TagsContainer
} from './CoffeeCard.styles';

interface CoffeeCardProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  // const { coffees, orders } = useContext(CoffeesContext)
  const regionalPrice = priceConverter.convertPriceToDecimalBRL(coffee.price, 2, 2)

  // function handleClickCart() {
  //   console.log(coffees)
  //   console.log(orders)
  // }

  return (
    <CoffeeCardContainer>
      <img
        src={`coffees/${coffee.img}`}
        alt={coffee.description}
        width={120}
        height={120}
      />
      <TagsContainer>
        {coffee.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>
      <CoffeeCardTitle>
        {coffee.title}
      </CoffeeCardTitle>
      <CoffeeCardDescription>
        {coffee.description}
      </CoffeeCardDescription>
      <CoffeeCardBottom>
        <span>
          R$ <strong>{regionalPrice}</strong>
        </span>
        <div>
          <ButtonPlusMinus item={coffee} />
          <NavLink to='/checkout'>
            {/* <ButtonCart onClick={handleClickCart} /> */}
            <ButtonCart />
          </NavLink>
        </div>
      </CoffeeCardBottom>
    </CoffeeCardContainer>
  )
}
