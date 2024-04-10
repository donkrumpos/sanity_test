import {PresentationIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {isValidPagePath} from '../../utils/isValidPagePath'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _title from '../fields/_title'
import _slug from '../fields/_slug'
import _teaser from '../fields/_teaser'

export default defineType({
  title: 'Course',
  name: 'course',
  type: 'document',
  icon: PresentationIcon,
  preview: {
    select: {
      title: 'title',
      image: 'image',
      type: 'course_type.title',
      lang: 'language',
    },
    prepare(selection) {
      const {title, image, type, lang} = selection
      const sub = `${lang ? lang : ''} | ${type ? type : 'Course'}`
      const imgUrl = getPictureUrl(image)

      return {
        title: title,
        subtitle: sub,
        media: imgUrl ? <img src={imgUrl} /> : PresentationIcon,
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
    {
      title: 'Suggested Courses',
      name: 'suggested_courses',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: 'Course Configurations',
      name: 'course_configs',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: 'Media',
      name: 'files',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    _title({title: 'Course title'}),
    _slug(),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    }),
    // basic info
    _teaser(),
    defineField({
      title: 'Last published',
      name: 'published_at',
      type: 'published_at',
    }),
    defineField({
      title: 'How to Buy',
      name: 'how_to_buy',
      type: 'string',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Key Concepts',
      name: 'key_concepts',
      type: 'full_text',
    }),
    // config
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
      title: 'Promoted',
      name: 'promoted',
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
      title: 'Course Type',
      name: 'course_type',
      type: 'reference',
      to: [{type: 'course_type'}],
      options: {filter: filterByDocLanguage},
    }),
    defineField({
      title: 'Course Category',
      name: 'course_categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'course_category'}],
          options: {filter: filterByDocLanguage},
        }),
      ],
    }),
    defineField({
      title: 'Course Length',
      name: 'course_length',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Regulation Guideliness',
      name: 'regulations',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'regulation'}],
          options: {filter: filterByDocLanguage},
        }),
      ],
    }),
    defineField({
      title: 'Audience (Version Type)',
      name: 'audience',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'audience'}],
          options: {filter: filterByDocLanguage},
        }),
      ],
    }),
    defineField({
      title: 'Format',
      name: 'formats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'course_format'}],
          options: {filter: filterByDocLanguage},
        }),
      ],
    }),
    defineField({
      title: 'Topics',
      name: 'topics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'topic'}],
          options: {filter: filterByDocLanguage},
        }),
      ],
    }),
    // Suggested Courses
    defineField({
      title: 'Suggested Courses Title',
      name: 'burst_header',
      type: 'string',
      fieldset: 'suggested_courses',
    }),
    defineField({
      title: 'Suggested Courses Content',
      name: 'burst_description',
      type: 'full_text',
      fieldset: 'suggested_courses',
    }),
    defineField({
      title: 'Related Courses',
      name: 'related_courses',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'course'}],
          options: {filter: filterByDocLanguage},
        }),
      ],
    }),
    // Course configs
    defineField({
      title: 'Title',
      name: 'configurations_title',
      type: 'string',
      fieldset: 'course_configs',
    }),
    defineField({
      title: 'Introduction',
      name: 'configurations_introduction',
      type: 'full_text',
      fieldset: 'course_configs',
    }),
    // Audiences
    defineField({
      title: 'Audiences',
      name: 'audience_details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              title: 'Label',
              name: 'title',
              type: 'string',
            }),
            defineField({
              title: 'Details',
              name: 'details',
              type: 'full_text',
            }),
          ],
        },
      ],
    }),
    // Media
    defineField({
      title: 'Course Cover',
      name: 'course_cover',
      type: 'picture',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fieldset: 'files',
    }),
    // Media
    defineField({
      title: 'Course Previews',
      name: 'course_previews',
      type: 'array',
      of: [{type: 'asset'}],
      fieldset: 'files',
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
