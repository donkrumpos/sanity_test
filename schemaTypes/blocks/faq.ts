import {InfoOutlineIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Questions & Answers',
  name: 'faq',
  type: 'object',
  icon: InfoOutlineIcon,
  preview: {
    select: {
      title: 'title.text',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'FAQ (Q&A)',
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
      title: 'Q&As',
      name: 'items',
      type: 'array',
      validation: (Rule) => Rule.max(25),
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {title: 'Anchor ID', name: 'anchor_id', type: 'string'},
            {
              title: 'Question',
              name: 'question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Answer',
              name: 'answer',
              type: 'full_text',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
})
