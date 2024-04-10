import {BlockElementIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Hero - NAVEX One (hard-coded block)',
  name: 'hero_navex_one',
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
        subtitle: 'Hero - NAVEX One',
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
