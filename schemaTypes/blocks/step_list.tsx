import {ThLargeIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember, validation} from 'sanity'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _theme from '../style_variations/_theme'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Step List',
  name: 'step_list',
  type: 'object',
  icon: ThLargeIcon,
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Step List | ${items?.length ? items.length : '0'} Items`

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
    }),
    defineField({
      title: 'Steps',
      name: 'items',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Step',
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
              title: 'Step name',
              name: 'name',
              type: 'string',
              description: 'Copy used for the sidebar tab',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Step title',
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Step body',
              name: 'body',
              type: 'full_text',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Step image',
              name: 'image',
              type: 'picture',
            },
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(2).max(6),
    }),
  ],
})
