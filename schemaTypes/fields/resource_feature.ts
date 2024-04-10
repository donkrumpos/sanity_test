import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Resource Feature',
  name: 'resource_feature',
  type: 'object',
  preview: {
    select: {
      title: 'title',
      icon: 'icon.title',
    },
    prepare(selection) {
      const {title, icon} = selection
      const sub = `${icon ? icon : ''}`
      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fields: [
    defineField({
      title: 'Label',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'string',
      options: {
        list: [
          {title: 'After', value: 'feature-after-green'},
          {title: 'Before', value: 'feature-before-green'},
          {title: 'Book', value: 'feature-book-green'},
          {title: 'Brain A', value: 'feature-brain-a-green'},
          {title: 'Brain B', value: 'feature-brain-b-green'},
          {title: 'Clock', value: 'feature-clock-green'},
          {title: 'Industry', value: 'feature-industry-green'},
          {title: 'Person', value: 'feature-person-green'},
          {title: 'Sheets', value: 'feature-sheets-green'},
          {title: 'Solution A', value: 'feature-solution-a-green'},
          {title: 'Solution B', value: 'feature-solution-b-green'},
          {title: 'Video', value: 'feature-video-green'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
  ],
})
