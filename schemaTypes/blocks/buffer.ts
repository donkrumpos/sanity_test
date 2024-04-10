import {BlockElementIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Buffer',
  name: 'buffer',
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
        subtitle: 'Buffer',
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
      type: 'theme_allColors',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Size',
      name: 'buffer_size',
      type: 'string',
      options: {
        list: ['small', 'large'],
      },
      fieldset: 'style_variations',
    }),
    {title: 'Image', name: 'image', type: 'picture'},
  ],
})
