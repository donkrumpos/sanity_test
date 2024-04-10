import {BlockElementIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Banner',
  name: 'banner',
  type: 'object',
  icon: BlockElementIcon,
  preview: {
    select: {
      title: 'title.text',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Banner',
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
      title: 'Theme',
      name: 'theme',
      type: 'theme_greenGreige',
      fieldset: 'style_variations',
    }),
    {title: 'Title', name: 'title', type: 'title', description: 'Hard-coded to H1.'},
  ],
})
