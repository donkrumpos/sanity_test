import {ThLargeIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember, validation} from 'sanity'
import _theme from '../style_variations/_theme'
import _theme_icons from '../style_variations/_theme_icons'

export default defineType({
  title: 'Value Props',
  name: 'value_props',
  type: 'object',
  icon: ThLargeIcon,
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Value Props | ${items?.length ? items.length : '0'} Items`

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
    _theme_icons(),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
    defineField({
      title: 'Button',
      name: 'concluding_link',
      type: 'link',
    }),
    defineField({
      title: 'Anchor ID',
      name: 'anchor_id',
      type: 'string',
    }),
    defineField({
      title: 'Value Props',
      name: 'items',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Value Prop',
          name: 'item',
          type: 'object',
          preview: {
            select: {
              title: 'title',
              link: 'link',
            },
          },
          fields: [
            {
              title: 'Icon',
              name: 'icon',
              type: 'card_icon',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Value Prop Title',
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Value Prop body',
              name: 'body',
              type: 'full_text',
              validation: (Rule) => Rule.required(),
            },
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(3).max(3),
    }),
  ],
})
