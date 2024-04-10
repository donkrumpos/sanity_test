import {PresentationIcon} from '@sanity/icons'
import _theme from './_theme'

export default (options: any = []) => {
  return _theme({
    title: 'Icon Color',
    name: 'icon_color',
    icon: PresentationIcon,
    options: {
      list: [
        {value: 'orange', title: 'Orange'},
        {value: 'green', title: 'Green'},
        {value: 'blue', title: 'Blue'},
        {value: 'pink', title: 'Pink'},
      ],
    },
    initialValue: 'blue',
  })
}
