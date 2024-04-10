import {UserIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import _slug from '../fields/_slug'
import _title from '../fields/_title'
export default defineType({
  title: 'Author',
  name: 'author',
  type: 'document',
  icon: UserIcon,
  description: 'Someone who contributed to an article',
  preview: {
    select: {
      first_name: 'first_name',
      last_name: 'last_name',
      title: 'title',
      company: 'company',
    },
    prepare(selection) {
      const {title, first_name, last_name, company} = selection
      const sub = `${title ? title : ''}${company ? ' | ' + company : ''}`

      return {
        title: `${first_name} ${last_name}`,
        subtitle: sub,
      }
    },
  },
  fields: [
    defineField({
      title: 'First Name',
      name: 'first_name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Last Name',
      name: 'last_name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    _slug({
      options: {
        source: (doc, options) => {
          return `${doc?.first_name}-${doc.last_name}`
        },
        maxLength: 255,
        isUnique: isUniqueSlug,
      },
    }),
    _title({title: 'Title'}),
    defineField({
      title: 'Company',
      name: 'company',
      type: 'string',
    }),
    defineField({
      title: 'Photo',
      name: 'photo',
      type: 'picture',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Bio',
      name: 'bio',
      type: 'blog_text',
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
