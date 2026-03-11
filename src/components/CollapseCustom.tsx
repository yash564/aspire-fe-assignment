import { Collapse, type CollapseProps } from 'antd'
import type { FC } from 'react'
import UpIcon from '../assets/svg/up-arrow.svg?react'
import DownIcon from '../assets/svg/down-arrow.svg?react'

type CollapseCustomProps = {
  items: CollapseProps['items']
}

const CollapseCustom: FC<CollapseCustomProps> = ({ items }) => {
  return (
    <Collapse
      items={items}
      defaultActiveKey={['1']}
      className="w-full relative z-10"
      expandIconPosition="end"
      expandIcon={({ isActive }) => (isActive ? <UpIcon /> : <DownIcon />)}
    />
  )
}

export default CollapseCustom
