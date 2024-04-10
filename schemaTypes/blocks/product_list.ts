import {CaseIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Product List',
  name: 'product_list',
  type: 'object',
  icon: CaseIcon,
  preview: {
    select: {
      title: 'title.text',
      items: 'icons',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Product List | ${items?.length ? items.length : '0'} Items`

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
    defineField({
      title: 'Icon Size',
      name: 'icon_size',
      type: 'string',
      options: {
        list: ['small', 'large'],
      },
      initialValue: 'small',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'title',
    }),
    defineField({
      title: 'Product Icons',
      name: 'icons',
      type: 'array',
      of: [defineArrayMember({type: 'product_icon'})],
    }),
    defineField({
      title: 'Concluding Link',
      name: 'concluding_link',
      type: 'link',
    }),
  ],
})
