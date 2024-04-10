import {CommentIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import _teaser from '../fields/_teaser'
import _exclude_from_search from '../fields/_exclude_from_search'
import _redirects from '../fields/_redirects'
import _title from '../fields/_title'
import _slug from '../fields/_slug'

export default defineType({
  title: 'Article',
  name: 'article',
  type: 'document',
  icon: CommentIcon,
  description: 'An article in a blog',
  preview: {
    select: {
      title: 'title',
      lang: 'language',
      path: 'path.current',
      blog: 'blog.title',
    },
    prepare(selection) {
      const {title, lang, path, blog} = selection
      const sub = `${lang ? lang : ''} | ${blog ? blog : ''}${path ? ' | ' + path : ''}`

      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fieldsets: [
    {
      title: 'Redirects',
      name: 'redirects',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      title: 'Blog',
      name: 'blog',
      type: 'reference',
      to: [{type: 'blog'}],
      options: {filter: filterByDocLanguage},
      validation: (Rule) => Rule.required(),
    }),
    _title({title: 'Article Title'}),
    _slug(),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    }),
    _exclude_from_search(),
    _teaser(),
    defineField({
      title: 'Last Published On',
      name: 'published_at',
      type: 'published_at',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'blog_text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Cover image',
      name: 'cover_image',
      type: 'picture',
    }),
    defineField({
      title: 'Authors',
      name: 'authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'author'}],
          options: {filter: filterByDocLanguage},
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Enable Comments',
      name: 'enable_comments',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Send email on save',
      name: 'send_email_on_save',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Topics',
      name: 'topics',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'blog_topic'}],
          options: {filter: filterByDocLanguage},
        },
      ],
    }),
    _redirects(),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
