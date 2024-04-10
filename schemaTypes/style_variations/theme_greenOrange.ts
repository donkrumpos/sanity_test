import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Theme',
  name: 'theme_greenOrange',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'green', title: 'Glacier (Secondary)'},
      {value: 'orange', title: 'Orange'},
    ],
  },
  initialValue: 'orange',
})
