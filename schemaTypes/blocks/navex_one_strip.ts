import {BlockElementIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  title: 'NAVEX One strip (hard-coded block)',
  name: 'navex_one_strip',
  type: 'object',
  icon: BlockElementIcon,
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'NAVEX One Strip',
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
      title: 'Internal Title',
      name: 'title',
      type: 'string',
      description: 'This title will only be displayed in the CMS',
    }),
  ],
})
