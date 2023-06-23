import { Card } from '@/pages/HomePage/HomePage'

export const createGameCards = (): Card[] => {
  return [
    { key: '1', value: 'a' },
    { key: '2', value: 'a' },
    { key: '3', value: 'b' },
    { key: '4', value: 'b' },
    { key: '5', value: 'c' },
    { key: '6', value: 'c' },
    { key: '7', value: 'd' },
    { key: '8', value: 'd' },
    { key: '9', value: 'e' },
    { key: '10', value: 'e' },
    { key: '11', value: 'f' },
    { key: '12', value: 'f' },
    { key: '13', value: 'g' },
    { key: '14', value: 'g' },
    { key: '15', value: 'h' },
    { key: '16', value: 'h' },
  ].sort(() => Math.random() - 0.5)
}
