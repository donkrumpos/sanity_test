import {UserIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Person',
  name: 'person',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      title: 'Name',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Job Title',
      name: 'job_title',
      type: 'string',
    }),
    defineField({
      title: 'Company',
      name: 'company',
      type: 'string',
    }),
    defineField({
      title: 'Social Link',
      name: 'social_link',
      type: 'link',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'picture',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
  ],
})
