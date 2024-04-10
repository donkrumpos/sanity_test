import {ImageIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {ALLOWED_IMAGE_FORMATS} from '../../constants'
import {getPictureUrl} from '../../utils/getPictureUrl'

export default defineType({
  title: 'Image',
  name: 'picture',
  type: 'object',
  icon: ImageIcon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  preview: {
    select: {
      sourceType: 'asset_source',
      alt: 'alt',
      file: 'file',
      url: 'url',
    },
    prepare(selection) {
      const {sourceType, alt, file, url} = selection
      const subtitle = `${sourceType ? sourceType : ''}`

      const fileUrl = file ? file.secure_url : ''
      const linkUrl = url ? url : ''
      const imgUrl = sourceType == 'url' ? linkUrl : fileUrl
      const media = imgUrl ? <img src={imgUrl} /> : null

      return {
        title: alt,
        subtitle,
        media,
      }
    },
  },
  fieldsets: [
    {
      title: 'Image Link',
      name: 'image_link',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      title: 'Image Source',
      name: 'asset_source',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {title: 'Media Library', value: 'cloudinary'},
          {title: 'URL', value: 'url'},
        ],
      },
      description: 'Upload image from Cloudinary either through the media library or by URL.',
      initialValue: 'cloudinary',
    }),
    defineField({
      title: 'File',
      name: 'file',
      type: 'cloudinary.asset',
      options: {
        collapsible: true,
        collapsed: false,
      },
      validation: (Rule) =>
        Rule.custom((file, context) => {
          if (context?.parent?.asset_source != 'cloudinary') return true

          if (file == undefined) {
            return true
          }

          if ('format' in file && !ALLOWED_IMAGE_FORMATS.includes(file.format)) {
            return 'Asset must be an image'
          }
          return true
        }),
      hidden: ({parent, value}) => parent?.asset_source != 'cloudinary',
    }),
    defineField({
      title: 'Image URL',
      name: 'url',
      type: 'url',
      // validation: Rule => Rule.custom((file, context) => {
      //   console.log(context)
      //   if (context?.parent?.asset_source != 'url')
      //     return true

      //   if (file == undefined) {
      //     return 'An image URL is required'
      //   }
      //   return true
      // }),
      hidden: ({parent, value}) => parent?.asset_source != 'url',
    }),
    defineField({
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.warning('Alternative text is required.'),
      hidden: ({parent, value}) => !parent?.asset_source,
    }),
    defineField({
      title: 'Caption',
      name: 'caption',
      type: 'string',
      description: 'Text displayed below the image',
      hidden: ({parent, value}) => !parent?.asset_source,
    }),
  ],
})
