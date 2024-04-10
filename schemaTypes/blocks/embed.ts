import {CodeBlockIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Embed',
  name: 'embed',
  type: 'object',
  icon: CodeBlockIcon,
  preview: {
    select: {
      title: 'title.text',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Embed',
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
      title: 'Theme',
      name: 'theme',
      type: 'theme_greenGreigeBluePurple',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Width',
      name: 'width',
      type: 'number',
      description: "A percent (%) of the site's content area",
      validation: (Rule) => Rule.integer().min(1).max(100),
    }),
    defineField({
      title: 'Height',
      name: 'height',
      type: 'number',
      description: 'An optional, fixed height for the embed, in pixels',
      validation: (Rule) => Rule.integer().min(1).max(1000),
    }),
    defineField({
      title: 'Center Content',
      name: 'centered',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'Embed Code',
      name: 'embed_code',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
