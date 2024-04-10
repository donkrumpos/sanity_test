import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Hero',
  name: 'hero',
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
        subtitle: 'Hero',
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
    defineField({
      title: 'Content Order',
      name: 'content_order',
      type: 'content_order',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Swap Heading Content',
      name: 'swap_heading_content',
      type: 'boolean',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
      validation: (Rule) => Rule.required(),
      description: 'Hard-coded to H1',
    }),
    _anchor_id(),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
    defineField({
      title: 'Primary CTA button',
      name: 'concluding_link',
      type: 'link',
    }),
    defineField({
      title: 'Secondary CTA button',
      name: 'concluding_link2',
      type: 'link',
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
      description: 'Video will take priority if both image and video are set',
    }),
  ],
})
