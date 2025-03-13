import { useLocation } from 'react-router'
import { Clock, CurrencyDollar, MapPin } from '@phosphor-icons/react'

import { FormSubmitOrderType } from './Checkout'

import delivery from '../assets/svg/delivery.svg'

import { IconTitles, ImageTitles } from '../utils/constants'

import {
  ContentContainer,
  ContentContainerGradient,
  IconContainer,
  MainContainer,
  SuccessContainer
} from './Success.styles'

export function Success() {
  const location = useLocation()
  const data = location.state as FormSubmitOrderType
  return (
    <SuccessContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <MainContainer>
        <ContentContainerGradient>
          <ContentContainer>
            <li>
              <IconContainer $icon='map' title={IconTitles.MapPin}>
                <MapPin size={16} weight='fill' aria-label={IconTitles.MapPin} />
              </IconContainer>
              <div>
                <address><span>Entrega em </span>{data.street}, {data.houseNumber}</address>
                <address><span>{data.district} - {data.city}, {data.uf}</span></address>
              </div>
            </li>
            <li>
              <IconContainer $icon='clock' title={IconTitles.Clock}>
                <Clock size={16} weight='fill' aria-label={IconTitles.Clock} />
              </IconContainer>
              <div>
                <p>Previsão de entrega</p>
                <p><strong>20 min - 30 min</strong></p>
              </div>
            </li>
            <li>
              <IconContainer $icon='currency' title={IconTitles.CurrencyDollar}>
                <CurrencyDollar size={16} aria-label={IconTitles.CurrencyDollar} />
              </IconContainer>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>
                    {data.payment === '0' && 'Cartão de Crédito'}
                    {data.payment === '1' && 'Cartão de Débito'}
                    {data.payment === '2' && 'Dinheiro'}
                  </strong>
                </p>
              </div>
            </li>
          </ContentContainer>
        </ContentContainerGradient>
        <img
          src={delivery}
          alt={ImageTitles.Delivery}
          width={492}
          height={293}
        />
      </MainContainer>
    </SuccessContainer>
  )
}
