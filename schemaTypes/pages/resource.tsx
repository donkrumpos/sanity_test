import {DownloadIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {isValidPagePath} from '../../utils/isValidPagePath'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _title from '../fields/_title'
import _slug from '../fields/_slug'
import _teaser from '../fields/_teaser'

export default defineType({
  title: 'Resource',
  name: 'resource',
  type: 'document',
  icon: DownloadIcon,
  preview: {
    select: {
      title: 'title',
      image: 'seo.image',
      type: 'resource_type.title',
      lang: 'language',
    },
    prepare(selection) {
      const {title, image, type, lang} = selection
      const sub = `${lang ? lang : ''} | ${type ? type : 'Resource'}`

      const imgUrl = getPictureUrl(image)

      return {
        title: title,
        subtitle: sub,
        media: imgUrl ? <img src={imgUrl} /> : DownloadIcon,
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
      title: 'Categories',
      name: 'categories',
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
    {
      title: 'Files',
      name: 'files',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    _title({title: 'Resource title'}),
    _slug(),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      validation: (Rule) => Rule.optional(),
    }),
    // basic info
    defineField({
      title: 'RC Asset Number',
      name: 'rc_asset_number',
      type: 'number',
    }),
    _teaser(),
    defineField({
      title: 'Last Published',
      name: 'published_at',
      type: 'published_at',
    }),
    // files
    defineField({
      title: 'Files',
      name: 'files',
      type: 'array',
      of: [{type: 'asset'}],
      fieldset: 'files',
    }),
    defineField({
      title: 'Videos',
      name: 'videos',
      type: 'array',
      of: [{type: 'asset'}],
      fieldset: 'files',
    }),
    defineField({
      title: 'Resource Features',
      name: 'resource_features',
      type: 'array',
      of: [{type: 'resource_feature'}],
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
      title: 'Title Image',
      name: 'title_image',
      type: 'picture',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    // Categories
    defineField({
      title: 'Resource Type',
      name: 'resource_type',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'resource_type'}],
          options: {filter: filterByDocLanguage},
        },
      ],
      fieldset: 'categories',
    }),
    defineField({
      title: 'Topics',
      name: 'topics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'resource_topic'}],
          options: {filter: filterByDocLanguage},
        }),
      ],
      fieldset: 'categories',
    }),
    defineField({
      title: 'Solutions',
      name: 'solutions',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'solution'}],
          options: {filter: filterByDocLanguage},
        }),
      ],
      fieldset: 'categories',
    }),
    defineField({
      title: 'Summary',
      name: 'summary',
      type: 'full_text',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
    // Configuration
    defineField({
      title: 'Featured',
      name: 'fetured',
      type: 'boolean',
      initialValue: false,
      fieldset: 'config',
    }),
    defineField({
      title: 'New',
      name: 'new',
      type: 'boolean',
      initialValue: false,
      fieldset: 'config',
    }),
    defineField({
      title: 'Show sharing links',
      name: 'show_sharing_links',
      type: 'boolean',
      initialValue: true,
      fieldset: 'config',
    }),
    defineField({
      title: 'Wistia Raw Embed',
      name: 'wistia_raw_embed',
      type: 'boolean',
      initialValue: false,
      fieldset: 'config',
    }),
    defineField({
      title: 'Exclude from search',
      name: 'exclude_from_search',
      type: 'boolean',
      initialValue: false,
      description: 'Excludes the page from internal and external search.',
      fieldset: 'config',
    }),
    defineField({
      title: 'CTA / Request a demo',
      name: 'request_demo_cta',
      type: 'marketo_form',
    }),
    defineField({
      title: 'Related Content',
      name: 'related_content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'page'}, {type: 'resource'}, {type: 'course'}],
          options: {filter: filterByDocLanguage},
        }),
      ],
    }),
    defineField({
      title: 'Gating',
      name: 'gating',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        // Gating
        defineField({
          title: 'Gated',
          name: 'gated',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({title: 'Form ID', name: 'marketo_form_id', type: 'number'}),
        defineField({title: 'Form Intro', name: 'form_intro', type: 'full_text'}),
        defineField({title: 'Body', name: 'body', type: 'full_text'}),
      ],
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
