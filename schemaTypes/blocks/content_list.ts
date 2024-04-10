import {InlineIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember, validation} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Content List',
  name: 'content_list',
  type: 'object',
  icon: InlineIcon,
  preview: {
    select: {
      title: 'title.text',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Content List | ${items?.length ? items.length : '0'} Items`

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
      title: 'Prominent',
      name: 'prominent',
      type: 'boolean',
      fieldset: 'style_variations',
      initialValue: false,
    }),
    defineField({
      title: 'Centered Title',
      name: 'title_center',
      type: 'boolean',
      fieldset: 'style_variations',
      initialValue: false,
    }),
    defineField({
      title: 'Number of Columns',
      name: 'columns',
      type: 'number',
      options: {
        list: [1, 2, 3],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'style_variations',
      initialValue: 1,
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Content List Item',
          name: 'item',
          type: 'object',
          preview: {
            select: {
              title: 'title.text',
              subtitle: 'body',
            },
          },
          fields: [
            {title: 'Title', name: 'title', type: 'title'},
            {title: 'Body', name: 'body', type: 'full_text'},
            {title: 'Button', name: 'column_link', type: 'link'},
          ],
        }),
      ],
    }),
    {title: 'Concluding Link', name: 'concluding_link', type: 'link'},
  ],
})
