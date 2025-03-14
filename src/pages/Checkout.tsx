import { useContext } from "react"
import { NavLink, useNavigate } from "react-router"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  ArrowLeft,
} from "@phosphor-icons/react"

import { CoffeesContext } from "../contexts/CoffeesContext"

import { Button } from "../components/Button"
import { IconWrapper } from "../components/IconWrapper"
import { Input } from "../components/Input"
import { OrderSummary } from "../components/OrderSummary"

import { IconTitles, taxes } from "../utils/constants"
import { priceConverter } from "../utils/functions"

import {
  AsideContentContainer,
  AsideContainer,
  FormInputsContainer,
  SummaryItem,
  MainContainer,
  PaymentMethodContainer,
  SectionAddressContainer,
  SectionPaymentContainer,
  SummaryTotal,
  Summary,
  FormContainer,
} from "./Checkout.styles"

const formSubmitOrderSchema = z.object({
  cep: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, 'Informe a Rua'),
  houseNumber: z.preprocess(
    (a) => parseInt(z.string().parse(a)),
    z.number().min(1, 'Informe o Número')
  ),
  complement: z.string().optional(),
  district: z.string().min(1, 'Informe o Bairro'),
  city: z.string().min(1, 'Informe a Cidade'),
  uf: z.string().min(2, 'Informe a UF').max(2, 'Mínimo 2 chars'),
  payment: z.enum(['0', '1', '2']),
})

export type FormSubmitOrderType = z.infer<typeof formSubmitOrderSchema>

export function Checkout() {
  const { orders, clearItems } = useContext(CoffeesContext)
  const { register, handleSubmit, reset, setValue, /*formState*/ } = useForm({
    resolver: zodResolver(formSubmitOrderSchema),
    defaultValues: {
      cep: '',
      street: '',
      houseNumber: 0,
      complement: '',
      district: '',
      city: '',
      uf: '',
      payment: undefined,
    }
  })

  // console.log(formState.errors)

  const totalItens = orders.reduce((acc, current) => acc + current.price * current.amount, 0)
  const deliveryTax = orders.length > 0 ? taxes.fixedDelivery : 0
  const total = totalItens + deliveryTax

  const navigate = useNavigate()

  function handleFormSubmit(data: FormSubmitOrderType) {
    if (orders.length > 0) {
      reset()
      clearItems()
      navigate('/success', { state: data })
    }
  }

  async function searchCEP(cep: string) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
      return response.data
    } catch (error) {
      console.error('Error fetching CEP: ', error)
      return null
    }
  }

  async function handleChangeCEP(event: React.ChangeEvent<HTMLInputElement>) {
    const cep = event.currentTarget.value.replace(/\D/g, '')
    if (cep.length === 8) {
      const cepData = await searchCEP(cep)
      if (cepData) {
        setValue('street', cepData.logradouro)
        setValue('district', cepData.bairro)
        setValue('city', cepData.localidade)
        setValue('uf', cepData.uf)
      }
    }
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <MainContainer>
          <NavLink to='/'>
            <IconWrapper icon={<ArrowLeft size={22} />} title={IconTitles.ArrowLeft} />
          </NavLink>
          <h2>Complete seu pedido</h2>
          <SectionAddressContainer>
            <header>
              <IconWrapper icon={<MapPin size={22} />} title={IconTitles.MapPin} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <FormInputsContainer>
              <div>
                <Input
                  type="text"
                  id="cep"
                  placeholder="CEP"
                  {...register('cep')}
                  onChange={handleChangeCEP}
                />
              </div>
              <div>
                <Input
                  type="text"
                  id="street"
                  placeholder="Rua"
                  {...register('street')}
                />
              </div>
              <div>
                <Input
                  type="number"
                  id="house-number"
                  placeholder="Número"
                  min={1}
                  {...register('houseNumber')}
                />
                <Input
                  type="text"
                  id="complement"
                  optional={true}
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </div>
              <div>
                <Input
                  type="text"
                  id="district"
                  placeholder="Bairro"
                  {...register('district')}
                />
                <Input
                  type="text"
                  id="city"
                  placeholder="Cidade"
                  {...register('city')}
                />
                <Input
                  type="text"
                  id="uf"
                  placeholder="UF"
                  minLength={2}
                  maxLength={2}
                  {...register('uf')}
                />
              </div>
            </FormInputsContainer>
          </SectionAddressContainer>
          <SectionPaymentContainer>
            <header>
              <IconWrapper icon={<CurrencyDollar size={22} />} title={IconTitles.CurrencyDollar} />
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feita na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </header>
            <PaymentMethodContainer>
              <label htmlFor="credit-card">
                <input
                  type="radio"
                  id="credit-card"
                  value="0"
                  {...register('payment')}
                />
                <IconWrapper icon={<CreditCard size={16} />} title={IconTitles.CreditCard} />
                Cartão de Crédito
              </label>
              <label htmlFor="debit-card">
                <input
                  type="radio"
                  id="debit-card"
                  value="1"
                  {...register('payment')}
                />
                <IconWrapper icon={<Bank size={16} />} title={IconTitles.Bank} />
                Cartão de Débito
              </label>
              <label htmlFor="money">
                <input
                  type="radio"
                  id="money"
                  value="2"
                  {...register('payment')}
                />
                <IconWrapper icon={<Money size={16} />} title={IconTitles.Money} />
                Dinheiro
              </label>
            </PaymentMethodContainer>
          </SectionPaymentContainer>
        </MainContainer>
        <AsideContainer>
          <h2>Cafés selecionados</h2>
          <AsideContentContainer>
            <OrderSummary />
            <Summary>
              <SummaryItem>
                Total de itens <span>{priceConverter.convertToCurrencyBRL(totalItens)}</span>
              </SummaryItem>
              <SummaryItem>
                Entrega <span>{priceConverter.convertToCurrencyBRL(deliveryTax)}</span>
              </SummaryItem>
              <SummaryTotal>
                Total <span>{priceConverter.convertToCurrencyBRL(total)}</span>
              </SummaryTotal>
            </Summary>
            <Button type="submit">confirmar pedido</Button>
          </AsideContentContainer>
        </AsideContainer>
      </FormContainer>
    </>
  )
}
