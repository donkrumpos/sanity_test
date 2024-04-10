import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Vertical Alignment',
  name: 'vertical_alignment',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'top', title: 'Top'},
      {value: 'center', title: 'Center'},
    ],
  },
  initialValue: 'top',
})
