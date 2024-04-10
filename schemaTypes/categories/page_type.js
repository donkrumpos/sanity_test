import {TagIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Page Type',
  name: 'page_type',
  type: 'document',
  icon: TagIcon,
  preview: {
    select: {
      title: 'title',
      lang: 'language',
    },
    prepare(selection) {
      const {title, lang} = selection
      const sub = `${lang ? lang + ' | ' : ''}Page Type`
      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fields: [
    defineField({
      title: 'Name',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
