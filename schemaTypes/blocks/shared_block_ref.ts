import {BlockElementIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'

export default defineType({
  title: 'Shared Block',
  name: 'shared_block_ref',
  type: 'object',
  icon: BlockElementIcon,
  preview: {
    select: {
      title: 'title',
      blockTitle: 'block_ref.title',
    },
    prepare(selection) {
      const {title, blockTitle} = selection
      const subtitle = `Shared Block`

      return {
        title: blockTitle,
        subtitle,
      }
    },
  },
  fieldsets: [
    {
      title: 'Style Variations',
      name: 'style_variations',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      title: 'Block',
      type: 'reference',
      name: 'block_ref',
      to: [{type: 'shared_block'}],
      weak: true,
      options: {filter: filterByDocLanguage},
      validation: (Rule) => Rule.required(),
    }),
  ],
})
