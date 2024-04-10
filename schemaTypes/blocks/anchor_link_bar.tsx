import {LinkIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember, useFormValue, PreviewProps} from 'sanity'
import _theme from '../style_variations/_theme'
import {AnchorNavItemInput, getBlockAnchorIdFragment} from '../../components/AnchorNavItemInput'

type AnchorIdPreviewProps = PreviewProps & {
  block_key: string
}

export function AnchorIdPreview(props: AnchorIdPreviewProps) {
  if (props.block_key) {
    const block = useFormValue(['blocks', {_key: props?.block_key}])
    const anchorFragment = getBlockAnchorIdFragment(block)
    return props.renderDefault({...props, subtitle: '#' + anchorFragment})
  } else {
    props.renderDefault(props)
  }
}

export default defineType({
  title: 'Anchor Link Bar',
  name: 'anchor_link_bar',
  type: 'object',
  icon: LinkIcon,
  preview: {
    select: {
      items: 'items',
    },
    prepare(selection) {
      const {items} = selection
      const title = items?.length ? items.map((item) => item?.label || '').join(' - ') : ''
      const subtitle = `Anchor Link Bar | ${items?.length ? items.length : '0'} Links`
      return {
        title,
        subtitle,
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
      title: 'Menu Items',
      name: 'items',
      type: 'array',
      validation: (Rule) => Rule.min(3).max(6).required(),
      of: [
        defineArrayMember({
          title: 'Menu Item',
          name: 'item',
          type: 'object',
          components: {
            preview: AnchorIdPreview,
          },
          preview: {
            select: {
              title: 'label',
              block_key: 'block_key',
            },
          },
          fields: [
            {
              title: 'Label',
              name: 'label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Select Block',
              name: 'block_key',
              type: 'string',
              validation: (Rule) => Rule.required(),
              components: {
                input: AnchorNavItemInput,
              },
            },
          ],
        }),
        // defineArrayMember({
        //   title: 'Manual link',
        //   name: 'manual_link',
        //   type: 'link',
        // }),
      ],
    }),
  ],
})
