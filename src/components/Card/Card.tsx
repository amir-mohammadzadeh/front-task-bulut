import { ReactNode } from 'react'
import './Card.css'

interface Prop {
  title: string,
  value: string,
  children: ReactNode
}

const Card = ({ title, value, children: icon }: Prop) => {
  return (
    <div className='card_container'>
      <span className='card-icon'>
        {icon}
      </span>
      <h1 className='card-heading'>
        {value}
      </h1>
      <span className="card-title">
        {title}
      </span>
    </div>
  )
}

export default Card