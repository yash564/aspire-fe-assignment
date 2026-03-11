import { createContext, useContext, useState, useEffect, type ReactNode, type FC } from 'react'
import { cardApi } from '../api/cardApi'
import type { Card } from '../types'

interface CardContextType {
  cards: Card[]
  loading: boolean
  error: string | null
  selectedCard: Card | null
  fetchCards: () => Promise<void>
  addCard: (name: string) => Promise<void>
  updateCard: (id: number, data: Partial<Card>) => Promise<void>
  selectCard: (id: number) => void
}

const CardContext = createContext<CardContextType>({
  cards: [],
  loading: false,
  error: null,
  selectedCard: null,
  fetchCards: async () => {},
  addCard: async () => {},
  updateCard: async () => {},
  selectCard: () => {},
})

interface CardProviderProps {
  children: ReactNode
}

export const CardProvider: FC<CardProviderProps> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  const fetchCards = async () => {
    try {
      setLoading(true)
      setError(null)
      const fetchedCards = await cardApi.getCards()
      setCards(fetchedCards)
      setSelectedCard(fetchedCards?.[0])
    } catch (err) {
      setError('Failed to fetch cards')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const addCard = async (name: string) => {
    try {
      setLoading(true)
      setError(null)
      const newCard = await cardApi.createCard({ name })
      setCards((prevCards) => [...prevCards, newCard])
    } catch (err) {
      setError('Failed to add card')
      console.error(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const updateCard = async (id: number, data: Partial<Card>) => {
    try {
      setLoading(true)
      setError(null)
      const updatedCard = await cardApi.updateCard(id, data)

      setCards((prevCards) => prevCards.map((card) => (card.id === id ? updatedCard : card)))

      if (selectedCard && selectedCard.id === id) {
        setSelectedCard(updatedCard)
      }
    } catch (err) {
      setError('Failed to update card')
      console.error(err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const selectCard = (id: number) => {
    const card = cards.find((c) => c.id === id)
    if (card) {
      setSelectedCard(card)
    }
  }

  useEffect(() => {
    fetchCards()
  }, [])

  const contextValue: CardContextType = {
    cards,
    loading,
    error,
    selectedCard,
    fetchCards,
    addCard,
    updateCard,
    selectCard,
  }

  return <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
}

export const useCardContext = () => {
  const context = useContext(CardContext)

  if (context === undefined) {
    throw new Error('useCardContext must be used within a CardProvider')
  }

  return context
}
