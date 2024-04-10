import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Theme',
  name: 'theme_allColors',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'greige', title: 'White (Primary)'},
      {value: 'green', title: 'Glacier (Secondary)'},
      {value: 'blue', title: 'Glacier (was Blue)'},
      {value: 'lightBlue', title: 'Glacier (was Light Blue)'},
      {value: 'purple', title: 'Glacier (was Purple)'},
      {value: 'white', title: 'White'},
      {value: 'navex-next-white', title: 'White (was Navex Next: White)'},
      {value: 'navex-next-lightblue', title: 'Glacier (was Navex Next: Light Blue)'},
      {value: 'lightTeal', title: 'Glacier (was Light Teal)'},
      {value: 'darkTeal', title: 'Glacier (was Dark Teal)'},
    ],
  },
  initialValue: 'greige',
})
