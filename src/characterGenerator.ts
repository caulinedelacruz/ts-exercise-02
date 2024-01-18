/* eslint-disable no-await-in-loop */
import fetch, { Response } from 'node-fetch'
import { Character, Data } from './interface.js'


export async function* characterGenerator(): AsyncGenerator<Character, void, unknown> {
  let next: string | null = 'https://swapi.dev/api/people/'

  do {
    const response: Response = await fetch(next)
    const data: Data = await response.json() as Data
    next = data.next

    // eslint-disable-next-line no-restricted-syntax
    for (const character of data.results) {
      yield character as Character
    }
  } while (next)
}
