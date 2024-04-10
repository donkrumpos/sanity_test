import {MenuIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _slug from '../fields/_slug'
import _title from '../fields/_title'
import _link from '../fields/_link'

export default defineType({
  title: 'Microsite Menu',
  name: 'menu_microsite',
  type: 'document',
  icon: MenuIcon,
  description: 'Management for the microsite navigation',
  preview: {
    select: {
      lang: 'language',
      items: 'nav_items',
    },
    prepare(selection) {
      const {lang, items} = selection
      const title = 'Microsite Menu'
      const sub = `${lang} | ${items?.length ? items.length : '0'} Items`

      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fields: [
    defineField({
      title: 'Nav Items',
      name: 'nav_items',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Nav Item',
          name: 'nav_item',
          type: 'object',
          fields: [
            defineField({
              title: 'Nav Item Name',
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            _link({
              title: 'Nav Item Link',
              name: 'link',
              validation: (Rule) => Rule.optional(),
            }),
            defineField({
              title: 'Children',
              name: 'children',
              type: 'array',
              of: [{type: 'menu_link'}],
              validation: (Rule) => Rule.max(9),
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
