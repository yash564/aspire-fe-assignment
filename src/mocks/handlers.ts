import { http, HttpResponse } from 'msw'
import type { Card } from '../types'

const initialCards: Card[] = [
  {
    id: 1,
    name: 'John Doe',
    number: '4123 4321 1111 9999',
    expiry: '12/26',
    cvv: 123,
    balance: 3000,
    bgColor: '#01D167',
    status: 'active',
    transactions: [
      {
        id: 't1',
        merchant: 'Hamleys',
        date: '2020-05-20',
        amount: 150,
        currency: 'S$',
        type: 'refund',
        icon: 'box',
        description: 'Refund on debit card',
      },
      {
        id: 't2',
        merchant: 'Hamleys',
        date: '2020-05-20',
        amount: 150,
        currency: 'S$',
        type: 'charge',
        icon: 'flights',
        description: 'Charged to debit card',
      },
      {
        id: 't3',
        merchant: 'Hamleys',
        date: '2020-05-20',
        amount: 150,
        currency: 'S$',
        type: 'charge',
        icon: 'megaphone',
        description: 'Charged to debit card',
      },
      {
        id: 't4',
        merchant: 'Hamleys',
        date: '2020-05-20',
        amount: 150,
        currency: 'S$',
        type: 'charge',
        icon: 'box',
        description: 'Charged to debit card',
      },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    number: '5500 0000 0000 0004',
    expiry: '08/25',
    balance: 9999,
    cvv: 456,
    bgColor: '#325BAF',
    status: 'active',
    transactions: [
      {
        id: 't5',
        merchant: 'Amazon',
        date: '2024-12-01',
        amount: 89,
        currency: 'S$',
        type: 'charge',
        icon: 'box',
        description: 'Charged to debit card',
      },
      {
        id: 't6',
        merchant: 'Spotify',
        date: '2024-12-01',
        amount: 91,
        currency: 'S$',
        type: 'charge',
        icon: 'megaphone',
        description: 'Charged to debit card',
      },
      {
        id: 't7',
        merchant: 'Spotify',
        date: '2024-12-02',
        amount: 965,
        currency: 'S$',
        type: 'refund',
        icon: 'flights',
        description: 'Refund on debit card',
      },
    ],
  },
]

const getStoredCards = (): Card[] => {
  const storedCards = localStorage.getItem('cards')
  return storedCards ? JSON.parse(storedCards) : []
}

const saveCardsToStorage = (cards: Card[]) => {
  localStorage.setItem('cards', JSON.stringify(cards))
}

const initializeCards = () => {
  const existingCards = getStoredCards()
  if (existingCards.length === 0) {
    saveCardsToStorage(initialCards)
  }
}

initializeCards()

const generateRandomCardNumber = (): string => {
  const prefix = '4'

  let cardNumber = prefix
  const totalLength = 16

  while (cardNumber.length < totalLength) {
    cardNumber += Math.floor(Math.random() * 10).toString()
  }
  return cardNumber.match(/.{1,4}/g)?.join(' ') || cardNumber
}

const generateRandomExpiry = (): string => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear() % 100

  const month = Math.floor(Math.random() * 12) + 1

  const year = currentYear + Math.floor(Math.random() * 5) + 1

  const formattedMonth = month.toString().padStart(2, '0')
  const formattedYear = year.toString().padStart(2, '0')

  return `${formattedMonth}/${formattedYear}`
}

const generateRandomCVV = (): number => {
  return Math.floor(Math.random() * 900) + 100
}

const generateRandomBgColor = (): string => {
  const colors = [
    '#1E293B',
    '#0F172A',
    '#3B0764',
    '#4B5563',
    '#1A1A40',
    '#2D3748',
    '#1F2937',
    '#3C366B',
    '#111827',
    '#2C5282',
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export const handlers = [
  http.get('/api/cards', () => {
    const cards = getStoredCards()
    return HttpResponse.json(cards)
  }),

  http.get('/api/cards/:id', ({ params }) => {
    const cards = getStoredCards()
    const card = cards.find((u) => u.id === Number(params.id))

    if (!card) {
      return new HttpResponse(null, { status: 404 })
    }

    return HttpResponse.json(card)
  }),

  http.post('/api/cards', async ({ request }) => {
    const newCard = (await request.json()) as Omit<Card, 'id'>
    const cards = getStoredCards()

    const maxId = cards.length > 0 ? Math.max(...cards.map((u) => u.id)) : 0
    const cardWithId: Card = {
      ...newCard,
      id: maxId + 1,
      balance: 0,
      number: generateRandomCardNumber(),
      expiry: generateRandomExpiry(),
      cvv: generateRandomCVV(),
      bgColor: generateRandomBgColor(),
    }

    cards.push(cardWithId)
    saveCardsToStorage(cards)

    return HttpResponse.json(cardWithId, { status: 201 })
  }),

  http.put('/api/cards/:id', async ({ request, params }) => {
    const cardId = Number(params.id)
    const updatedData = (await request.json()) as Partial<Card>

    const cards = getStoredCards()
    const cardIndex = cards.findIndex((u) => u.id === cardId)

    if (cardIndex === -1) {
      return new HttpResponse(null, { status: 404 })
    }

    cards[cardIndex] = { ...cards[cardIndex], ...updatedData }
    saveCardsToStorage(cards)

    return HttpResponse.json(cards[cardIndex])
  }),
]
