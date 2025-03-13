import { Clock, ShoppingCart, Package, Coffee } from '@phosphor-icons/react'

import { Catalog } from '../components/Catalog'
import { IconWrapper } from '../components/IconWrapper'

import coffeeCup from '../assets/svg/coffee-cup.svg'
import vectorYellow from '../assets/svg/Vector-Yellow.svg'
import vectorYellow2 from '../assets/svg/Vector-Yellow-2.svg'
import vectorPurple from '../assets/svg/Vector-Purple.svg'
import vectorPurple2 from '../assets/svg/Vector-Purple-2.svg'
import vectorPurple3 from '../assets/svg/Vector-Purple-3.svg'

import { IconTitles, ImageTitles } from '../utils/constants'
import { defaultTheme } from '../styles/myTheme'

import {
  HeaderContainer,
} from './Home.styles'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <img src={vectorPurple} width={272} height={205} className='vector1' />
        <img src={vectorPurple2} width={311} height={179} className='vector2' />
        <img src={vectorPurple} width={246} height={166} className='vector3' />
        <section>
          <header>
            <h1>
              <img src={vectorYellow2} width={193} height={200} className='vector' />
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </header>
          <ul>
            <img src={vectorYellow} width={426} height={198} className='vector' />
            <img src={vectorYellow} width={426} height={198} className='vector-middle' />
            <li>
              <IconWrapper
                icon={<ShoppingCart size={16} weight='fill' />}
                title={IconTitles.ShoppingCart}
                bg={defaultTheme['yellow-dark']}
              />
              <span>Compras simples e segura</span>
            </li>
            <li>
              <IconWrapper
                icon={<Package size={16} weight='fill' />}
                title={IconTitles.Package}
                bg={defaultTheme['base-text']}
              />
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <IconWrapper
                icon={<Clock size={16} weight='fill' />}
                title={IconTitles.Clock}
                bg={defaultTheme.yellow}
              />
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <IconWrapper
                icon={<Coffee size={16} weight='fill' />}
                title={IconTitles.Coffee}
                bg={defaultTheme.purple}
              />
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </section>
        <aside>
          <img src={vectorYellow} width={426} height={198} className='vector-top' />
          <img src={vectorYellow} width={426} height={198} className='vector-bottom' />
          <img src={vectorPurple3} width={192} height={112} className='vector-purple-bottom' />
          <img src={coffeeCup} alt={ImageTitles.Logo} width={476} height={360} />
        </aside>
      </HeaderContainer>
      <Catalog />
    </>
  )
}
