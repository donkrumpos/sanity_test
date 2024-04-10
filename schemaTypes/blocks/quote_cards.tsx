import {BlockquoteIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember, validation} from 'sanity'
import _theme from '../style_variations/_theme'
import author from '../entities/author'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Quote Cards',
  name: 'quote_cards',
  type: 'object',
  icon: BlockquoteIcon,
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Quote Cards | ${items?.length ? items.length : '0'} Items`

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
          {value: 'primary', title: 'White (Primary)'},
          {value: 'secondary', title: 'Glacier (Secondary)'},
        ],
      },
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
    }),
    defineField({
      title: 'Quotes',
      name: 'items',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Quote',
          name: 'item',
          type: 'object',
          preview: {
            select: {
              title: 'quote_text',
              company: 'company',
              author: 'author_name',
            },
            prepare(selection) {
              const {title, company, author} = selection
              const subtitle = `${company}${author ? ' | ' + author : ''}`
              return {
                title,
                subtitle,
              }
            },
          },
          fields: [
            {
              title: 'Quote Text',
              name: 'quote_text',
              type: 'full_text',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Company/Attribution',
              name: 'company',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {title: 'Author Name', name: 'author_name', type: 'string'},
            {title: 'Author Title', name: 'author_title', type: 'string'},
            {title: 'Link', name: 'link', type: 'link'},
          ],
        }),
      ],
      validation: (Rule) => Rule.min(2).max(12),
    }),
  ],
})
