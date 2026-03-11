import { Carousel, Grid } from 'antd'
import AspireLogo from '../../assets/svg/aspire.svg?react'
import Eye from '../../assets/svg/Eye.svg?react'
import VisaLogo from '../../assets/svg/VisaLogo.svg?react'
import { useState } from 'react'
import { useCardContext } from '../../contexts/CardContext'

const Ellipses = () => (
  <div className="flex gap-[6px]">
    {Array.from({ length: 4 }, (_, idx) => (
      <div key={idx} className="w-[9px] h-[9px] rounded-full bg-white" />
    ))}
  </div>
)

const { useBreakpoint } = Grid

const CardCarousel = () => {
  const { cards, selectCard, selectedCard } = useCardContext()
  const screen = useBreakpoint()
  const isMobile = !screen.md
  const [showCardIndex, setShowCardIndex] = useState<number | null>(null)

  const handleToggleVisibility = (index: number) => {
    setShowCardIndex((prev) => (prev === index ? null : index))
  }

  return (
    <Carousel
      dots
      dotPosition="bottom"
      centerMode={isMobile}
      draggable
      infinite={false}
      className="absolute w-[474px] md:relative md:w-[414px]"
      afterChange={(index) => selectCard(cards?.[index]?.id)}
    >
      {cards.map((card, index) => {
        const isVisible = showCardIndex === index
        const isBlurred = selectedCard?.status === 'inactive'

        return (
          <div key={index} className="relative mt-[28px] md:mt-[29px]">
            <button
              onClick={() => handleToggleVisibility(index)}
              className="absolute -top-[28px] right-[16px] md:right-0 z-0 bg-white px-[10px] md:px-0 pt-[5px] pb-[18px] md:py-0 rounded-t-md flex items-center gap-2 cursor-pointer text-primary"
            >
              <Eye className="w-4 h-4" />
              <span className="text-sm md:font-bold font-semibold">Show card number</span>
            </button>

            <div
              className={`relative z-10 w-[358px] md:w-[414px] p-6 md:p-[27px] rounded-xl text-white transition-all aspire-card select-none ${
                isBlurred ? 'blur-[2px]' : ''
              }`}
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="flex justify-end">
                <AspireLogo className="text-white w-[74px] h-[21px] md:w-[84px] md:h-6" />
              </div>

              <p className="text-2xl font-bold mt-6 md:mt-[27px]">{card.name}</p>

              <div className="flex items-center gap-6 md:gap-[27px] mt-6 md:mt-[27px] text-sm font-bold">
                {isVisible ? (
                  <span className="tracking-[5px]">{card.number}</span>
                ) : (
                  <>
                    <Ellipses />
                    <Ellipses />
                    <Ellipses />
                    <span>{card.number.slice(-4)}</span>
                  </>
                )}
              </div>

              <div className="flex text-[13px] mt-3.5 md:mt-[17px] gap-[40px] md:gap-[44px] font-bold">
                <div>
                  <span>Thru: </span>
                  <span>{card.expiry}</span>
                </div>
                <div className="flex gap-1">
                  <span>CVV:</span>
                  <span className="tracking-[5px]">{isVisible ? card.cvv : '***'}</span>
                </div>
              </div>

              <div className="flex justify-end">
                <VisaLogo />
              </div>
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default CardCarousel
