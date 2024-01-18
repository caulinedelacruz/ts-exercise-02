import { Transform, TransformCallback } from 'node:stream'
import { Character } from './interface.js'

export default class MessageFormatter extends Transform {
  constructor(options?: object) {
    super({ ...options, objectMode: true })
  }

  // eslint-disable-next-line no-underscore-dangle
  _transform(character: Character, encoding: BufferEncoding, callback: TransformCallback): void {
    this.push({ level: 'info', message: `Character Name: ${character.name}` })
    callback()
  }
}
