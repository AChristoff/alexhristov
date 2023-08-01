import { FC } from 'react'

import { Icons } from '@/config/icons'

type Props = {
  points?: number
  stars?: string
}

const Rating: FC<Props> = ({ points = 5, stars = '0' }) => {
  const createRating = () => {
    let rating = []

    for (let i = 0; i < points; i++) {
      rating.push(
        <span key={i}>
          {i < Number(stars) ? <Icons.circle className='w-[1rem] m-[2px]'/> : <Icons.circleOutline className='w-[1rem] m-[2px]'/>}
        </span>
      )
    }
    return rating
  }

  return <span className="flex">{createRating()}</span>
}

export default Rating
