import {TagIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Course Category',
  name: 'course_category',
  type: 'document',
  icon: TagIcon,
  preview: {
    select: {
      title: 'title',
      lang: 'language',
    },
    prepare(selection) {
      const {title, lang} = selection
      const sub = `${lang ? lang + ' | ' : ''}Course Category`
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
