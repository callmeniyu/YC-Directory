import { type SchemaTypeDefinition } from 'sanity'
import { auhtor } from './author'
import { startup } from './startup'
import { playlist } from './playlist'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [auhtor, startup, playlist],
}
