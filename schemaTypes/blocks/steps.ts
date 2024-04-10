import {InlineIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Steps',
  name: 'steps',
  type: 'object',
  icon: InlineIcon,
  preview: {
    select: {
      title: 'title.text',
      items: 'steps',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Steps | ${items?.length ? items.length : '0'} Items`

      return {
        title: title,
        subtitle: sub,
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
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'title',
    }),
    defineField({
      title: 'Steps',
      name: 'steps',
      type: 'array',
      validation: (Rule) => Rule.max(10),
      of: [
        defineArrayMember({
          title: 'Step',
          name: 'step',
          type: 'object',
          fields: [
            {
              title: 'Step Number',
              name: 'step_number',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Step Title',
              name: 'step_title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {title: 'Body', name: 'body', type: 'full_text'},
          ],
        }),
      ],
    }),
    defineField({name: 'concluding_link', type: 'link'}),
  ],
})
