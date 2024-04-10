import {DownloadIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Asset Download List',
  name: 'asset_list',
  type: 'object',
  icon: DownloadIcon,
  preview: {
    select: {
      items: 'assets',
    },
    prepare(selection) {
      const {items} = selection
      const title = items?.map((item: any) => item.title).join(', ')
      const sub = `Asset Download List | ${items?.length ? items.length : '0'} Items`

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
      type: 'theme_greenGreige',
      fieldset: 'style_variations',
    }),
    _anchor_id(),
    defineField({
      title: 'Asset Downloads',
      name: 'assets',
      type: 'array',
      validation: (Rule) => Rule.max(4),
      of: [
        defineArrayMember({
          title: 'Asset',
          name: 'asset',
          type: 'object',
          fields: [
            {title: 'Title', name: 'title', type: 'string', validation: (Rule) => Rule.required()},
            {
              title: 'Asset URL',
              name: 'url',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Button Text',
              name: 'button',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        }),
      ],
    }),
  ],
})
