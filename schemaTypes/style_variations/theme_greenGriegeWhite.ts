import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Theme',
  name: 'theme_greenGreigeWhite',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'greige', title: 'White (Primary)'},
      {value: 'green', title: 'Glacier (Secondary)'},
      {value: 'white', title: 'White'},
    ],
  },
  initialValue: 'greige',
})
