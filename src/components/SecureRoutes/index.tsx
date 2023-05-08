import { useContext } from "react"
import { Authorization } from "../../context/Autorization"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const SecureRoutes = () => {
  const { users, direction } = useContext(Authorization)

  const location = useLocation()


  if (direction) {
    return null
  }

  return users ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} replace state={{ from: location }} />
  )
}

export default SecureRoutes
