import {InlineIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember, validation} from 'sanity'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Cards List',
  name: 'cards',
  type: 'object',
  icon: InlineIcon,
  preview: {
    select: {
      items: 'cards',
    },
    prepare(selection) {
      const {items} = selection
      const title = items
        ?.map((item: any) => (item?.card_title ? item.card_title : item?.title))
        .join(', ')
      const sub = `Cards List | ${items?.length ? items.length : '0'} Items`

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
      title: 'Icon + Title',
      name: 'icon_title',
      type: 'boolean',
      fieldset: 'style_variations',
      initialValue: false,
    }),
    defineField({
      title: 'Full Width Image',
      name: 'full_width',
      type: 'boolean',
      fieldset: 'style_variations',
      initialValue: false,
    }),
    defineField({
      title: 'Pricing Block',
      name: 'pricing_block',
      type: 'boolean',
      fieldset: 'style_variations',
      initialValue: false,
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
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
              title: 'card_title',
              title2: 'title',
              link: 'card_link',
              image: 'image',
            },
            prepare(selection) {
              const {title, title2, link, image} = selection
              const subtitle = `${link ? 'Link: ' + link : ''}`

              const imgUrl = getPictureUrl(image)
              const media = imgUrl ? <img src={imgUrl} /> : null

              return {
                title: title ? title : title2,
                subtitle,
                media,
              }
            },
          },
          fields: [
            {title: 'Card Top Title', name: 'card_title', type: 'string'},
            {title: 'Pricing Card Title', name: 'pricing_title', type: 'title'},
            {title: 'Card Title In Card Body (with URL)', name: 'title', type: 'string'},
            {title: 'Image', name: 'image', type: 'picture'},
            {title: 'Body', name: 'body', type: 'full_text'},
            {
              title: 'Card URL',
              name: 'card_link',
              type: 'link',
            },
            {title: 'Pricing Disclaimer Asterisk', name: 'pricing_disclaimer', type: 'string'},
          ],
        }),
      ],
      validation: (Rule) => Rule.max(50),
    }),
  ],
})
