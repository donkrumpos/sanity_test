import {ThLargeIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember, validation} from 'sanity'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _theme from '../style_variations/_theme'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Tabs',
  name: 'tabs',
  type: 'object',
  icon: ThLargeIcon,
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Tabs | ${items?.length ? items.length : '0'} Items`

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
      initialValue: 'primary',
    }),
    defineField({
      title: 'Content Order',
      name: 'content_order',
      type: 'content_order',
      fieldset: 'style_variations',
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
      title: 'Tabs',
      name: 'items',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Tab',
          name: 'item',
          type: 'object',
          preview: {
            select: {
              name: 'name',
              title: 'title',
              image: 'image',
            },
            prepare(selection) {
              const {name, title, image} = selection
              const imgUrl = getPictureUrl(image)
              const media = imgUrl ? <img src={imgUrl} /> : null

              return {
                title: name ? name : title,
                media,
              }
            },
          },
          fields: [
            {
              title: 'Tab name',
              name: 'name',
              type: 'string',
              description: 'Copy used for the tab',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Tab title',
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Tab body',
              name: 'body',
              type: 'full_text',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Tab image',
              name: 'image',
              type: 'picture',
              validation: (Rule) => Rule.required(),
            },
            defineField({
              title: 'Tab button',
              name: 'link',
              type: 'link',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(2).max(3),
    }),
  ],
})
