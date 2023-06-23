import { Card } from '@/pages/HomePage/HomePage'

export const createGameCards = (): Card[] => {
  return [
    { key: '1', value: 'a', emoji: '👹' },
    { key: '2', value: 'a', emoji: '👹' },
    { key: '3', value: 'b', emoji: '🧜🏼‍♂️' },
    { key: '4', value: 'b', emoji: '🧜🏼‍♂️' },
    { key: '5', value: 'c', emoji: '👶🏽' },
    { key: '6', value: 'c', emoji: '👶🏽' },
    { key: '7', value: 'd', emoji: '🏳️‍🌈' },
    { key: '8', value: 'd', emoji: '🏳️‍🌈' },
    { key: '9', value: 'e', emoji: '🤖' },
    { key: '10', value: 'e', emoji: '🤖' },
    { key: '11', value: 'f', emoji: '🦷' },
    { key: '12', value: 'f', emoji: '🦷' },
    { key: '13', value: 'g', emoji: '👩‍👩‍👦' },
    { key: '14', value: 'g', emoji: '👩‍👩‍👦' },
    { key: '15', value: 'h', emoji: '🤸🏻‍♂️' },
    { key: '16', value: 'h', emoji: '🤸🏻‍♂️' },
  ].sort(() => Math.random() - 0.5)
}
