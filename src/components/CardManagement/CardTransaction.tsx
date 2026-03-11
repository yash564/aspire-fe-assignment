import { Divider, Flex, type CollapseProps } from 'antd'
import CollapseCustom from '../CollapseCustom'
import TransactionsIcon from '../../assets/svg/transactions.svg?react'
import BoxIcon from '../../assets/svg/file-storage.svg?react'
import FlightsIcon from '../../assets/svg/flights.svg?react'
import MegaphoneIcon from '../../assets/svg/megaphone.svg?react'
import MiniCardIcon from '../../assets/svg/mini-card.svg?react'
import NextIcon from '../../assets/svg/next.svg?react'
import { useCardContext } from '../../contexts/CardContext'
import { useMemo } from 'react'
import { formatMoneyNumber } from '../../utils'
import dayjs from 'dayjs'
import type { Transaction } from '../../types'

const TYPE_MAPPING: Record<string, { className: string; icon: React.ReactNode }> = {
  box: { className: 'bg-[#009DFF1A]', icon: <BoxIcon /> },
  flights: { className: 'bg-[#00D6B51A]', icon: <FlightsIcon /> },
  megaphone: { className: 'bg-[#F251951A]', icon: <MegaphoneIcon /> },
}

const CardTransactions = () => {
  const { selectedCard } = useCardContext()
  const transactions = useMemo(() => selectedCard?.transactions ?? [], [selectedCard])

  const renderTransaction = (item: Transaction, index: number) => {
    const { className, icon } = TYPE_MAPPING[item.icon] || {}

    return (
      <div key={item.id}>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className={`w-12 h-12 ${className} rounded-full flex items-center justify-center`}>
              {icon}
            </div>
            <div>
              <p className="text-sm font-semibold">{item.merchant}</p>
              <p className="text-[13px] text-[#AAAAAA] mt-1">
                {dayjs(item.date).format('DD MMM YYYY')}
              </p>
              <div className="text-xs flex items-center gap-2 mt-[14px]">
                <div className="w-6 h-5 rounded-full bg-secondary flex items-center justify-center">
                  <MiniCardIcon />
                </div>
                <p className="text-xs text-secondary font-semibold">{item.description}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[10.5px] items-center">
              <p
                className={`text-sm font-bold ${
                  item.type === 'charge' ? 'text-black' : 'text-primary'
                }`}
              >
                {item.type === 'charge' ? '- S$ ' : '+ S$ '}
                {formatMoneyNumber(item.amount)}
              </p>
              <NextIcon />
            </div>
          </div>
        </div>
        {index < transactions.length - 1 && <Divider className="my-4" />}
      </div>
    )
  }

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <Flex gap={12} align="center">
          <TransactionsIcon />
          <p className="text-background text-sm">Transactions</p>
        </Flex>
      ),
      children: (
        <div className="max-h-[50vh] overflow-y-auto scrollbar-hide">
          {transactions.map(renderTransaction)}
        </div>
      ),
    },
  ]

  return (
    <div className="mt-6 md:mb-10 relative">
      <CollapseCustom items={items} />
      <div className="absolute bg-[#EDFFF5] text-primary text-[13px] font-semibold w-full pb-3 pt-5 -bottom-[40px] text-center rounded-b-lg">
        View all card transactions
      </div>
    </div>
  )
}

export default CardTransactions
