import {HomeIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import {isValidPagePath} from '../../utils/isValidPagePath'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import isReservedDocId from '../../utils/isReservedDocId'
import _title from '../fields/_title'
import _slug from '../fields/_slug'

export default defineType({
  name: 'resource_center',
  title: 'Resource Center',
  type: 'document',
  preview: {
    select: {
      lang: 'language',
      title: 'title',
    },
    prepare(selection) {
      const {lang, title} = selection
      const sub = `${lang ? lang : ''}`
      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fields: [
    _title({title: 'Title'}),
    _slug(),
    defineField({
      title: 'Top Resources',
      name: 'top_resources',
      type: 'array',
      validation: (Rule) => Rule.min(1).max(5),
      of: [{type: 'reference', to: [{type: 'resource'}], options: {filter: filterByDocLanguage}}],
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
