import { NavLink } from 'react-router';

import { CoffeeType } from '../contexts/CoffeesContext';

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
  const regionalPrice = priceConverter.convertPriceToDecimalBRL(coffee.price, 2, 2)

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
          <ButtonPlusMinus id={coffee.id} />
          <NavLink to='/checkout'>
            <ButtonCart />
          </NavLink>
        </div>
      </CoffeeCardBottom>
    </CoffeeCardContainer>
  )
}
