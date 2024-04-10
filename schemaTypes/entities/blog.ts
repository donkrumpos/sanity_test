import {BoldIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import _title from '../fields/_title'

export default defineType({
  title: 'Blog',
  name: 'blog',
  type: 'document',
  icon: BoldIcon,
  description: 'A blog in the website',
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    _title({title: 'Name'}),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
