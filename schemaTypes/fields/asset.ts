import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'File',
  name: 'asset', // file is reserved in Sanity
  type: 'object',
  preview: {
    select: {
      title: 'title',
      type: 'format',
    },
    prepare(selection) {
      const {title, type} = selection
      const sub = `${type ? ' | ' + type : 'File'}`
      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fieldsets: [
    {
      title: 'Categories',
      name: 'categories',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Media source',
      name: 'url',
      type: 'cloudinary.asset',
      //      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Asset ID',
      name: 'id',
      type: 'string',
    }),
    defineField({
      title: 'Provider',
      name: 'provider',
      type: 'string',
    }),
    defineField({
      title: 'Alt text',
      name: 'alt_text',
      type: 'string',
    }),
    defineField({
      title: 'Title text',
      name: 'title_text',
      type: 'string',
    }),
    defineField({
      title: 'Caption',
      name: 'caption',
      type: 'full_text',
    }),
    defineField({
      title: 'Format',
      name: 'format',
      type: 'string',
    }),
    defineField({
      title: 'Type',
      name: 'type',
      type: 'string',
    }),
  ],
})
