import  {useState} from 'react'

const useModal = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const handleLoginOpen = ()=> setShowLogin(true)
    const handleLoginClose = ()=> setShowLogin(false)
    const handleRegisterOpen = ()=> setShowRegister(true)
    const handleRegisterClose = ()=> setShowRegister(false)
  return {
      showLogin,
      showRegister,
      handleLoginOpen,
      handleLoginClose,
      handleRegisterOpen,
      handleRegisterClose
  }
}

export default useModal