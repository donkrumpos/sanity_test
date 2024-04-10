import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Theme',
  name: 'theme_bluePurple',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'blue', title: 'Glacier (was Blue)'},
      {value: 'purple', title: 'Glacier (was Purple)'},
    ],
  },
  initialValue: 'blue',
})
