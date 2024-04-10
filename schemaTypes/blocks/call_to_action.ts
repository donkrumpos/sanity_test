import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _theme from '../style_variations/_theme'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Call to Action (CTA)',
  name: 'call_to_action',
  type: 'object',
  icon: BlockContentIcon,
  preview: {
    select: {
      title: 'title.text',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'CTA',
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
    _theme({
      options: {
        list: [
          {value: 'secondary', title: 'Glacier (Secondary)'},
          {value: 'red', title: 'Red'},
          {value: 'green', title: 'Green'},
          {value: 'blue', title: 'Blue'},
          {value: 'pink', title: 'Pink'},
        ],
      },
    }),
    {title: 'Title', name: 'title', type: 'title', validation: (Rule) => Rule.required()},
    _anchor_id(),
    {title: 'Body', name: 'body', type: 'full_text'},
    {title: 'Link', name: 'link', type: 'link'},
  ],
})
