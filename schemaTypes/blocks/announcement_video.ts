import {PlayIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Announcement Video',
  name: 'announcement_video',
  type: 'object',
  icon: PlayIcon,
  preview: {
    select: {
      title: 'title.text',
      wistia: 'wistia_id',
    },
    prepare(selection) {
      const {title, wistia} = selection
      return {
        title: title,
        subtitle: `Announcement Video | Wistia ID: ${wistia ? wistia : ''}`,
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
      name: 'content_order',
      type: 'content_order',
      fieldset: 'style_variations',
    }),
    {title: 'Title', name: 'title', type: 'title'},
    _anchor_id(),
    {title: 'Body', name: 'body', type: 'full_text'},
    {title: 'Wistia Video ID', name: 'wistia_id', type: 'string'},
    {name: 'concluding_link', type: 'link'},
  ],
})
