import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Padding',
  name: 'padding',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'thick', title: 'Thick'},
      {value: 'thin', title: 'Thin'},
    ],
  },
  initialValue: 'thick',
})
