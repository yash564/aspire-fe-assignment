import { Tabs, type TabsProps } from 'antd'
import CardCarousel from './Carousel'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'My debit cards',
    children: null,
  },
  {
    key: '2',
    label: 'All company cards',
    children: null,
  },
]

const CardMobile = () => {
  return (
    <div className="mt-[34px]">
      <Tabs items={items} />
      <CardCarousel />
    </div>
  )
}

export default CardMobile
