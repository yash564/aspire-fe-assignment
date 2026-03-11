import { Button, Flex, Grid } from 'antd'
import AspireLogo from '../assets/svg/Home.svg?react'
import AddIcon from '../assets/svg/Add.svg?react'
import { useCardContext } from '../contexts/CardContext'
import { formatMoneyNumber } from '../utils'
import { useState } from 'react'
import NewCardModal from './NewCardModal'

const { useBreakpoint } = Grid

const Balance = () => {
  const { selectedCard } = useCardContext()
  const screens = useBreakpoint()
  const isMobile = !screens.md
  const [openModal, setOpenModal] = useState(false)

  const balance = formatMoneyNumber(selectedCard?.balance ?? 0)

  return (
    <div className="text-white md:text-black">
      <Flex justify="space-between" align="baseline">
        <p>Account Balance</p>
        {isMobile && <AspireLogo className="text-primary w-[25px] h-[25px]" />}
      </Flex>

      <Flex justify="space-between" align="center" className="mt-[18px]">
        <Flex align="center" gap={12}>
          <span className="w-10 h-[22px] md:h-6 text-[12px] md:text-[13px] bg-primary flex items-center justify-center rounded-sm">
            S$
          </span>
          <span className="text-2xl md:text-[26px] font-bold text-white md:text-black">
            {balance}
          </span>
        </Flex>

        <Button
          icon={<AddIcon />}
          type={isMobile ? 'text' : 'primary'}
          className="text-[13px] font-bold p-3 text-blue md:text-white"
          onClick={() => setOpenModal(true)}
        >
          New Card
        </Button>
      </Flex>

      <NewCardModal open={openModal} onCancel={() => setOpenModal(false)} />
    </div>
  )
}

export default Balance
