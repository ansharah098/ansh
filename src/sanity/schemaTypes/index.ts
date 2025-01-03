import { type SchemaTypeDefinition } from 'sanity'
import { Products } from '../schema/Schemas/product-schema'
import { Popular } from '../schema/Schemas/popular-schemas'
import { Brand } from '../schema/Schemas/brand-schema'
import { Benefits } from '../schema/Schemas/Benefits-schema'
import { Lower } from '../schema/Schemas/lower-schema'
import { Body} from '../schema/Schemas/Body-schema'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products,Popular, Brand,Benefits, Lower, Body],
}
