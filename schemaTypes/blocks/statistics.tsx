import {NumberIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember, validation} from 'sanity'
import _theme from '../style_variations/_theme'
import author from '../entities/author'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Statistics',
  name: 'statistics',
  type: 'object',
  icon: NumberIcon,
  preview: {
    select: {
      title: 'title',
      items: 'stats',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Statistics | ${items?.length ? items.length : '0'} Items`

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
    _theme({
      options: {
        list: [
          {value: 'orange', title: 'Orange'},
          {value: 'green', title: 'Green'},
          {value: 'blue', title: 'Blue'},
          {value: 'pink', title: 'Pink'},
        ],
      },
      initialValue: 'orange',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    _anchor_id(),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Stats',
      name: 'stats',
      type: 'array',
      validation: (Rule) => Rule.min(3).max(3),
      of: [
        defineArrayMember({
          title: 'Stat',
          icon: NumberIcon,
          name: 'stat',
          type: 'object',
          preview: {
            select: {
              value: 'value',
            },
            prepare(selection) {
              const {value} = selection
              const title = `${value ? value : '0'}`
              return {
                title,
              }
            },
          },
          fields: [
            {
              title: 'Stat Number',
              name: 'value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {title: 'Title', name: 'title', type: 'string', validation: (Rule) => Rule.required()},
            {title: 'Body', name: 'body', type: 'full_text'},
          ],
        }),
      ],
    }),
  ],
})
