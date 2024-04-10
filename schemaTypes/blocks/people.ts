import {UsersIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'People',
  name: 'people',
  type: 'object',
  icon: UsersIcon,
  preview: {
    select: {
      title: 'title.text',
      items: 'people',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `People | ${items?.length ? items.length : '0'} Items`

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
      title: 'Theme',
      name: 'theme',
      type: 'theme_allColors',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'People',
      name: 'people',
      type: 'array',
      validation: (Rule) => Rule.max(15),
      of: [
        {
          title: 'Person',
          name: 'person',
          type: 'person',
        },
      ],
    }),
  ],
})
