import {defineField} from 'sanity'

export default (options: any = []) => {
  return defineField(
    Object.assign(
      {
        title: 'Redirects',
        name: 'aliases',
        type: 'aliases',
        fieldset: 'redirects',
      },
      options
    )
  )
}
