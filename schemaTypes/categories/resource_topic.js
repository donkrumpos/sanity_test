import {TagIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Resource Topic',
  name: 'resource_topic',
  type: 'document',
  icon: TagIcon,
  preview: {
    select: {
      title: 'title',
      lang: 'language',
    },
    prepare(selection) {
      const {title, lang} = selection
      const sub = `${lang ? lang + ' | ' : ''}Resource Topic`
      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fields: [
    {
      title: 'Name',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
