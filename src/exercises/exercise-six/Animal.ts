export type animal = 'dog'| 'cat' | 'chicken' | 'cow' | 'sheep' | 'horse'

export type animalIcon = '🐶' | '🐱' | '🐔' | '🐄' | '🐑' | '🐴'

export interface IAnimal {
  id: number
  name: animal
}