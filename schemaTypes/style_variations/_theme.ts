import {PresentationIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default (options: any = []) => {
  return defineField(
    Object.assign(
      {
        title: 'Theme',
        name: 'theme',
        type: 'string',
        icon: PresentationIcon,
        options: {
          list: [
            {value: 'primary', title: 'White (Primary)'},
            {value: 'secondary', title: 'Glacier (Secondary)'},
            {value: 'orange', title: 'Orange'},
            {value: 'green', title: 'Green'},
            {value: 'blue', title: 'Blue'},
            {value: 'pink', title: 'Pink'},
          ],
        },
        initialValue: 'primary',
        validation: (Rule) => Rule.required(),
        fieldset: 'style_variations',
      },
      options
    )
  )
}
