import type { FC, SVGProps } from 'react'
import { useCardContext } from '../../contexts/CardContext'
import FreezeIcon from '../../assets/svg/Freeze.svg?react'
import SpendLimitIcon from '../../assets/svg/SpendLimit.svg?react'
import GPayIcon from '../../assets/svg/GPay.svg?react'
import ReplaceIcon from '../../assets/svg/Replace.svg?react'
import DeactivateIcon from '../../assets/svg/Deactivate.svg?react'

type CardFunctionProps = {
  className?: string
}

type FunctionItem = {
  icon: FC<SVGProps<SVGSVGElement>>
  label: string
  onClick?: () => void
}

const CardFunction: FC<CardFunctionProps> = ({ className = '' }) => {
  const { selectedCard, updateCard } = useCardContext()

  const toggleFreeze = () => {
    if (!selectedCard) return
    updateCard(selectedCard.id, {
      status: selectedCard.status === 'active' ? 'inactive' : 'active',
    })
  }

  const functions: FunctionItem[] = [
    {
      icon: FreezeIcon,
      label: selectedCard?.status === 'inactive' ? 'Unfreeze Card' : 'Freeze Card',
      onClick: toggleFreeze,
    },
    { icon: SpendLimitIcon, label: 'Set spend limit' },
    { icon: GPayIcon, label: 'Add to GPay' },
    { icon: ReplaceIcon, label: 'Replace card' },
    { icon: DeactivateIcon, label: 'Cancel card' },
  ]

  return (
    <div
      className={`grid grid-cols-5 gap-[10px] bg-light-blue rounded-2xl px-[27px] py-[20px] w-screen md:w-[414px] mt-8 ${className}`}
    >
      {functions.map(({ icon: Icon, label, onClick }) => (
        <button
          key={label}
          onClick={onClick}
          className="flex flex-col items-center gap-[7px] text-center focus:outline-none cursor-pointer text-background hover:text-primary"
        >
          <Icon />
          <p className="text-[13px]">{label}</p>
        </button>
      ))}
    </div>
  )
}

export default CardFunction
