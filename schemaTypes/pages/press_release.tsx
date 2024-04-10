import {BillIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {isValidPagePath} from '../../utils/isValidPagePath'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _title from '../fields/_title'
import _slug from '../fields/_slug'
import _exclude_from_search from '../fields/_exclude_from_search'
import _teaser from '../fields/_teaser'

export default defineType({
  title: 'Press Release',
  name: 'press_release',
  type: 'document',
  icon: BillIcon,
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
      const media = imgUrl ? <img src={imgUrl} /> : BillIcon
      return {
        title: title,
        subtitle: sub,
        media,
      }
    },
  },
  fieldsets: [
    {
      title: 'Basic Information',
      name: 'basic',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
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
      description: 'Optionally set a page type.',
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
    defineField({
      title: 'Redirects',
      name: 'aliases',
      type: 'aliases',
      fieldset: 'redirects',
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
