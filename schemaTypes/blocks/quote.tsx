import {BlockquoteIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember, validation} from 'sanity'
import _theme from '../style_variations/_theme'
import author from '../entities/author'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Quote',
  name: 'quote',
  type: 'object',
  icon: BlockquoteIcon,
  preview: {
    select: {
      title: 'title',
      quote: 'quote.quote_text',
    },
    prepare(selection) {
      const {title, quote} = selection
      const sub = `Quote | ${quote}`

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
    }),
    _anchor_id(),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
    defineField({
      title: 'Quote',
      name: 'quote',
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
      validation: (Rule) => Rule.required(),
    }),
  ],
})
