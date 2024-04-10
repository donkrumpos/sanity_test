import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Theme',
  name: 'theme_classicBlues',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'greige', title: 'White (Primary)'},
      {value: 'green', title: 'Glacier (Secondary)'},
      {value: 'blue', title: 'Glacier (was Blue)'},
      {value: 'lightBlue', title: 'Glacier (was Light Blue)'},
    ],
  },
  initialValue: 'blue',
})
