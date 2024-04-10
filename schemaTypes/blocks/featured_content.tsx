import {InlineIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _theme from '../style_variations/_theme'
import _anchor_id from '../fields/_anchor_id'

const defaultImage = {
  asset_source: 'cloudinary',
  file: {
    _type: 'cloudinary.asset',
    secure_url: 'https://cdn.navex.com/image/upload/v1702327648/theme/bg_card_blue.jpg',
  },
}

export default defineType({
  title: 'Featured Content - Manual',
  name: 'featured_content',
  type: 'object',
  icon: InlineIcon,
  preview: {
    select: {
      title: 'title',
      items: 'cards',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Featured Content - Manual | ${items?.length ? items.length : '0'} Items`

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
              title: 'Card Image',
              name: 'banner_image',
              type: 'picture',
              validation: (Rule) => Rule.required(),
              initialValue: defaultImage,
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
            },
            {title: 'Card Link', name: 'link', type: 'link', validation: (Rule) => Rule.required()},
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1).max(12),
    }),
  ],
})
