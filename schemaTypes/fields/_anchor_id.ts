import {defineField} from 'sanity'
import {AnchorIdInput} from '../../components/AnchorIdInput'

export default (options: any = []) => {
  return defineField(
    Object.assign(
      {
        title: 'Anchor ID',
        name: 'anchor_id',
        type: 'string',
        components: {
          input: AnchorIdInput,
        },
      },
      options
    )
  )
}
