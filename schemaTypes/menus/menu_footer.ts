import {MenuIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import _slug from '../fields/_slug'
import _title from '../fields/_title'
import _link from '../fields/_link'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'

export default defineType({
  title: 'Footer Menu',
  name: 'menu_footer',
  type: 'document',
  icon: MenuIcon,
  description: 'Management for the footer menus',
  preview: {
    select: {
      lang: 'language',
      items: 'about_menu_items',
      popular_items: 'popular_menu_items',
      interest_items: 'interest_menu_items',
    },
    prepare(selection) {
      const {lang, items, popular_items, interest_items} = selection
      const title = 'Footer Menu'
      const count =
        (items?.length ? items.length : 0) +
        (popular_items?.length ? popular_items.length : 0) +
        (interest_items?.length ? interest_items.length : 0)
      const sub = `${lang} | ${count} Items`

      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fields: [
    defineField({
      title: 'About menu',
      name: 'about_menu_items',
      type: 'array',
      of: [{type: 'menu_link'}],
    }),
    defineField({
      title: 'Popular links menu',
      name: 'popular_menu_items',
      type: 'array',
      of: [{type: 'menu_link'}],
    }),
    defineField({
      title: 'Interests links menu',
      name: 'interests_menu_items',
      type: 'array',
      of: [{type: 'menu_link'}],
    }),
    defineField({
      title: 'Bottom links menu',
      name: 'bottom_menu_items',
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
