import { Transform, TransformCallback } from 'node:stream'
import { Character } from './interface.js'
export class CharacterFilter extends Transform {
  constructor(options?: object) {
    super({...options, objectMode: true })
  }

  // eslint-disable-next-line no-underscore-dangle
  _transform(character: Character, encoding: BufferEncoding, callback: TransformCallback): void {
    if (character.gender === 'female') {
      this.push(character)
    }

    callback()
  }
}
