import { FC } from 'react'

type ModalProps = {
  close: () => void
}

// TODO extract modal
const Modal: FC<ModalProps> = ({ children, close }) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen grid place-items-center">
      <div
        onClick={close}
        className="absolute top-0 z-40 
                   h-screen w-screen bg-opacity-25 bg-black 
                   ease-in-out transition-opacity duration-300">
      </div>
      <div className="z-50">
        {children}
      </div>
    </div>
  )
}

export default Modal;
