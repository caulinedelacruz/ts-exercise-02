/* eslint-disable no-await-in-loop */
import fetch from 'node-fetch'

interface Character {
  name: string 
}

interface Data {
  count: number
  next: string
  previous: string | null
  results: Character[]
}

export default async function* generator(): AsyncGenerator<Character, void, unknown> {
  let next: string | null = 'https://swapi.dev/api/people/'

  do {
    const response = await fetch(next)
    const data = await response.json() as Data
    next = data.next

    // eslint-disable-next-line no-restricted-syntax
    for (const character of data.results) {
      yield character
    }
  } while (next)
}


