import { type SchemaTypeDefinition } from 'sanity'
import { auhtor } from './author'
import { startup } from './startup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [auhtor, startup],
}
