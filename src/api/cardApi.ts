import type { Card } from '../types'

export const cardApi = {
  getCards: async (): Promise<Card[]> => {
    const response = await fetch('/api/cards')
    if (!response.ok) {
      throw new Error('Failed to fetch cards')
    }
    return response.json()
  },

  getCard: async (id: number): Promise<Card> => {
    const response = await fetch(`/api/cards/${id}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch card with ID ${id}`)
    }
    return response.json()
  },

  createCard: async (cardData: Pick<Card, 'name'>): Promise<Card> => {
    const response = await fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardData),
    })

    if (!response.ok) {
      throw new Error('Failed to create card')
    }

    return response.json()
  },

  updateCard: async (id: number, cardData: Partial<Card>): Promise<Card> => {
    const response = await fetch(`/api/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardData),
    })

    if (!response.ok) {
      throw new Error(`Failed to update card with ID ${id}`)
    }

    return response.json()
  },
}
