import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Layout',
  name: 'layout',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'vertical', title: 'Vertical'},
      {value: 'horizontal', title: 'Horizontal'},
    ],
  },
  initialValue: 'vertical',
})
