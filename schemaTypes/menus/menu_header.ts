import {MenuIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import _slug from '../fields/_slug'
import _title from '../fields/_title'
import _link from '../fields/_link'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'

export default defineType({
  title: 'Header Menu',
  name: 'menu_header',
  type: 'document',
  icon: MenuIcon,
  description: 'Management for the secondary navigation bar',
  preview: {
    select: {
      lang: 'language',
      items: 'menu_items',
    },
    prepare(selection) {
      const {lang, items} = selection
      const title = 'Header Menu'
      const sub = `${lang} | ${items?.length ? items.length : '0'} Items`

      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fields: [
    defineField({
      title: 'Menu Items',
      name: 'menu_items',
      type: 'array',
      of: [{type: 'menu_link'}],
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
