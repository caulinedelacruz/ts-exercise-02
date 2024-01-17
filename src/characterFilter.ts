import { Transform, TransformCallback } from 'node:stream'

interface Character {
  gender: string 
}

export default class CharacterFilter extends Transform {
  constructor() {
    super({ objectMode: true })
  }

  // eslint-disable-next-line no-underscore-dangle
  _transform(character: Character, encoding: BufferEncoding, callback: TransformCallback): void {
    if (character.gender === 'female') {
      this.push(character)
    }

    callback()
  }
}
