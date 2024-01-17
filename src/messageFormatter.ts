import { Transform, TransformCallback } from 'node:stream'

interface Character {
  name: string 
}

export default class MessageFormatter extends Transform {
  constructor() {
    super({ objectMode: true })
  }

  // eslint-disable-next-line no-underscore-dangle
  _transform(character: Character, encoding: BufferEncoding, callback: TransformCallback): void {
    this.push({ level: 'info', message: `Character Name: ${character.name}` })
    callback()
  }
}
