import { Tabs, type TabsProps } from 'antd'
import CardCarousel from './Carousel'
import CardFunction from './CardFunction'
import CardDetails from './CardDetails'
import CardTransactions from './CardTransaction'

const CardContent = () => (
  <div className="flex gap-[46px] rounded-lg p-10 border border-border shadow-[0px_2px_12px_rgba(0,0,0,0.08)]">
    <div>
      <CardCarousel />
      <CardFunction />
    </div>
    <div className="w-full mt-[28px] md:mt-[29px]">
      <CardDetails />
      <CardTransactions />
    </div>
  </div>
)

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'My debit cards',
    children: <CardContent />,
  },
  {
    key: '2',
    label: 'All company cards',
    children: <CardContent />,
  },
]

const CardDesktop = () => {
  return (
    <div className="mt-[34px]">
      <Tabs items={items} />
    </div>
  )
}

export default CardDesktop
