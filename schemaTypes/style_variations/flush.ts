import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Flush',
  name: 'flush',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'padded', title: 'Padding'},
      {value: 'flush', title: 'Flush with Edge'},
    ],
  },
  initialValue: 'padded',
})
