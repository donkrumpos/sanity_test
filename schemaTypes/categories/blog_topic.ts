import {TagIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import _teaser from '../fields/_teaser'

export default defineType({
  title: 'Blog Topic',
  name: 'blog_topic',
  type: 'document',
  icon: TagIcon,
  description: 'A topic covered by a blog',
  preview: {
    select: {
      title: 'title',
      lang: 'language',
    },
    prepare(selection) {
      const {title, lang} = selection
      const sub = `${lang ? lang + ' | ' : ''}Blog Topic`
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
    _teaser(),
    defineField({
      title: 'Slug',
      name: 'path',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 255,
        isUnique: isUniqueSlug,
      },
      description:
        "The desired URL path for this page. The path may include letters, numbers, hyphens, and forward slashes (e.g., 'about/our-history'). Start without a slash, after the country code. Do not include special characters (&, %, á, ë)  or stop words (the, an, a, etc.)",
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
