import {BookIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import {isValidPagePath} from '../../utils/isValidPagePath'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import isReservedDocId from '../../utils/isReservedDocId'
import _title from '../fields/_title'
import _slug from '../fields/_slug'

export default defineType({
  name: 'course_library',
  title: 'Course Library',
  icon: BookIcon,
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
      title: 'Description',
      name: 'description',
      type: 'text',
    }),
    defineField({
      title: 'Top Courses',
      name: 'top_courses',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'course'}], options: {filter: filterByDocLanguage}}],
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
