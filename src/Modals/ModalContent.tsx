import { ReactNode } from 'react'
import { createPortal } from "react-dom"
import './ModalContent.css'

interface Prop{
    children: ReactNode
}

const ModalContent = ({children}:Prop) => {

  return createPortal (
    <div className="Modal_Parent">
        {children}
    </div>
  , document.getElementById('modal_parent')!
  )
}

export default ModalContent