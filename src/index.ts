import winston from 'winston'
import { Readable, pipeline } from 'node:stream'
import { CharacterFilter } from './characterFilter.js'
import { characterGenerator } from './characterGenerator.js'
import MessageFormatter from './messageFormatter.js'

const logger: winston.Logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})

const charactersGenerator: Readable = Readable.from(characterGenerator())
const characterFilter: CharacterFilter = new CharacterFilter()
const messageFormatter: MessageFormatter = new MessageFormatter()

pipeline(charactersGenerator, characterFilter, messageFormatter, logger, (err: Error | null) => {
  if (err) {
    logger.error('Error', err)
  }
})
