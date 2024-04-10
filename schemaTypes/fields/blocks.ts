import {defineType} from 'sanity'
import {AVAILABLE_BLOCKS} from '../../constants'

export default defineType({
  name: 'blocks',
  title: 'Blocks',
  type: 'array',
  of: AVAILABLE_BLOCKS,
})
