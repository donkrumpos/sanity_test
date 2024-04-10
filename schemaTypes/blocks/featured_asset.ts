import {DownloadIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import {PAGE_TYPES} from '../../constants'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Featured Content - Auto',
  name: 'featured_asset',
  type: 'object',
  icon: DownloadIcon,
  preview: {
    select: {
      title: 'title.text',
      items: 'assets',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Featured Content - Auto | ${items?.length ? items.length : '0'} Items`

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
      type: 'theme_greenGreigeBluePurple',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
    defineField({
      title: 'Assets',
      name: 'assets',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [
            ...PAGE_TYPES.filter((pageType) => pageType != 'article').map((pageType) => {
              return {type: pageType}
            }),
          ],
          options: {filter: filterByDocLanguage},
        }),
      ],
      validation: (Rule) => Rule.max(12).required(),
    }),
  ],
})
