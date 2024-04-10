import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Theme',
  name: 'theme_navexNext',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'navex-next-white', title: 'White (was Navex Next: White)'},
      {value: 'navex-next-lightblue', title: 'Glacier (was Navex Next: Light Blue)'},
    ],
  },
  initialValue: 'navex-next-white',
})
