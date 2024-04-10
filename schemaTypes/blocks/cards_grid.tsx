import {ThLargeIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember, validation} from 'sanity'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _theme from '../style_variations/_theme'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Cards Grid',
  name: 'cards_grid',
  type: 'object',
  icon: ThLargeIcon,
  preview: {
    select: {
      title: 'title',
      items: 'cards',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Cards Grid | ${items?.length ? items.length : '0'} Items`

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
    _theme(),
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
      title: 'Button',
      name: 'concluding_link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Card',
          name: 'card',
          type: 'object',
          preview: {
            select: {
              title: 'title',
              link: 'link',
            },
            prepare(selection) {
              const {title, link} = selection
              const subtitle = `${link?.url ? 'Link: ' + link.url : ''}`
              return {
                title,
                subtitle,
              }
            },
          },
          fields: [
            {
              title: 'Card Icon',
              name: 'icon',
              type: 'card_icon',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Card Title',
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Card Body',
              name: 'body',
              type: 'full_text',
              validation: (Rule) => Rule.required(),
            },
            {title: 'Card Link', name: 'link', type: 'link', validation: (Rule) => Rule.required()},
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1).max(12),
    }),
  ],
})
