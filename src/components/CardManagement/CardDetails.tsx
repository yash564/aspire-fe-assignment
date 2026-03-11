import { Flex, type CollapseProps } from 'antd'
import CollapseCustom from '../CollapseCustom'
import DetailsIcon from '../../assets/svg/details.svg?react'

const CardDetails = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <Flex gap={12} align="center">
          <DetailsIcon />
          <p className="text-background text-sm">Card details</p>
        </Flex>
      ),
      children: <p>Details</p>,
    },
  ]

  return <CollapseCustom items={items} />
}

export default CardDetails
