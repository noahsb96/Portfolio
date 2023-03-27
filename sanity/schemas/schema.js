import schemaTypes from 'all:part:@sanity/base/schema-type'
import {createSchema} from 'sanity'
import pageInfo from './pageInfo'
import experience from './experience'
import skill from './skill'
import social from './social'
import project from './project'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([pageInfo, skill, experience, social, project]),
})
