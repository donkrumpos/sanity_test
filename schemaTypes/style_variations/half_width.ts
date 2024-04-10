import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Half Width',
  name: 'half_width',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'regular', title: 'Regular'},
      {value: 'half', title: 'Half'},
    ],
  },
  initialValue: 'regular',
})
