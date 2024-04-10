import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _theme from '../style_variations/_theme'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Media + Text',
  name: 'photo_plus_text',
  type: 'object',
  icon: BlockContentIcon,
  preview: {
    select: {
      title: 'title.text',
      image: 'image',
    },
    prepare(selection) {
      const {title, image} = selection
      const imgUrl = getPictureUrl(image)
      const media = imgUrl ? <img src={imgUrl} /> : null
      return {
        title: title,
        subtitle: 'Media + Text',
        media,
      }
    },
  },
  fieldsets: [
    {
      title: 'Style Variations',
      name: 'style_variations',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    _theme({
      options: {
        list: [
          {value: 'greige', title: 'White (Primary)'},
          {value: 'green', title: 'Glacier (Secondary)'},
          {value: 'navex-next-white', title: 'White (was Navex Next: White)'},
          {value: 'navex-next-lightblue', title: 'Glacier (was Navex Next: Light Blue)'},
        ],
      },
    }),
    defineField({
      title: 'Content Order',
      name: 'content_order',
      type: 'content_order',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Media Size',
      name: 'media_size',
      type: 'string',
      options: {
        list: [
          {title: '50% Media (Image)', value: 'half'},
          {title: '67% Media (Image or Video)', value: 'two-thirds'},
        ],
      },
      initialValue: 'half',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'title',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'picture',
    }),
    defineField({
      title: 'Video (Wistia ID)',
      name: 'video',
      type: 'string',
      hidden: ({parent, value}) => parent?.media_size != 'two-thirds',
      description: 'Video will take priority if both image and video are set',
    }),
    defineField({
      title: 'Concluding Link',
      name: 'concluding_link',
      type: 'link',
    }),
  ],
})
