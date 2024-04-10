import {DocumentTextIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import {getPictureUrl} from '../../utils/getPictureUrl'
import {getPageTypeIcon} from '../../utils/getPageTypeIcon'
import isReservedDocId from '../../utils/isReservedDocId'

import _title from '../fields/_title'
import _slug from '../fields/_slug'
import _teaser from '../fields/_teaser'
import _redirects from '../fields/_redirects'
import _exclude_from_search from '../fields/_exclude_from_search'

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'title',
      image: 'seo.image',
      type: 'page_type.title',
      lang: 'language',
      path: 'path',
    },
    prepare(selection) {
      const {title, image, type, lang, path} = selection
      const sub = `${lang ? lang : ''}${path?.current ? '/' + path.current : ''}`
      const imgUrl = getPictureUrl(image)
      const media = imgUrl ? <img src={imgUrl} /> : getPageTypeIcon(type)
      return {
        title: title,
        subtitle: sub,
        media,
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
    {
      title: 'Configuration',
      name: 'config',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    _title(),
    _slug(),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    }),
    _exclude_from_search(),
    _teaser(),
    defineField({
      title: 'Last published',
      name: 'published_at',
      type: 'published_at',
    }),
    defineField({
      title: 'Page Type',
      name: 'page_type',
      type: 'reference',
      to: [{type: 'page_type'}],
      options: {filter: filterByDocLanguage},
      description: 'Select page type from menu.',
      validation: (Rule) => Rule.required(),
    }),

    // defineField({
    //   title: 'Floatie',
    //   name: 'floatie',
    //   type: 'reference',
    //   to: [{type: 'floatie'}],
    //   options: {filter: filterByDocLanguage},
    //   description: 'Used to show "floatie" form on page. Of note: Being removed in Q1 2024.',
    // }),
    defineField({
      title: 'Blocks',
      name: 'blocks',
      type: 'blocks',
    }),
    defineField({
      title: 'Menu Title (optional)',
      name: 'menu_title',
      type: 'string',
    }),
    _redirects(),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
