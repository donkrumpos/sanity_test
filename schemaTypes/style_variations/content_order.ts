import {defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  title: 'Content Order',
  name: 'content_order',
  type: 'string',
  icon: PresentationIcon,
  options: {
    list: [
      {value: 'imageLast', title: 'Image Last'},
      {value: 'imageFirst', title: 'Image First'},
    ],
  },
  initialValue: 'imageLast',
})
