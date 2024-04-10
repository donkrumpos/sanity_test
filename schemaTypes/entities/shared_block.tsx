import {BlockElementIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {AVAILABLE_BLOCKS} from '../../constants'

export default defineType({
  title: 'Shared Block',
  name: 'shared_block',
  type: 'document',
  liveEdit: true,
  icon: BlockElementIcon,
  description: 'A wrapper around a reusable, translatable block of content',
  preview: {
    select: {
      title: 'title',
      lang: 'language',
      block: 'block',
    },
    prepare(selection) {
      const {title, lang, block} = selection
      const blockType = block[0]?._type
      const subtitle = `${lang} | ${blockType}`
      return {
        title,
        subtitle,
      }
    },
  },
  fields: [
    defineField({
      title: 'Name',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'For internal organization only',
    }),
    defineField({
      title: 'Block',
      name: 'block',
      type: 'array',
      of: AVAILABLE_BLOCKS.filter((block) => block.type != 'shared_block_ref'),
      validation: (Rule) => Rule.required().min(1).max(1),
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
