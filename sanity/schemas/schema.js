import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import pageInfo from './pageInfo'
import author from './author'
import {createSchema} from 'sanity'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([pageInfo, author, category, blockContent]),
})
