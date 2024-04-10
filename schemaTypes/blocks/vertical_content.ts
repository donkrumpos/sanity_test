import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Vertical Content',
  name: 'vertical_content',
  type: 'object',
  icon: BlockContentIcon,
  preview: {
    select: {
      title: 'title.text',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Vertical Content | ${items?.length ? items.length : '0'} Items`

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
      type: 'theme_classicBlues',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Side Content',
      name: 'side_content',
      type: 'boolean',
      initialValue: false,
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Left Side Title (If Applicable)',
      name: 'left_title',
      type: 'title',
    }),
    defineField({name: 'concluding_link', type: 'link'}),
    defineField({
      title: 'Items',
      name: 'items',
      type: 'array',
      validation: (Rule) => Rule.max(3),
      of: [
        defineArrayMember({
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {title: 'Item Title', name: 'title', type: 'full_text'},
            {title: 'Body', name: 'body', type: 'full_text'},
            {title: 'Image', name: 'image', type: 'picture'},
          ],
        }),
      ],
    }),
  ],
})
