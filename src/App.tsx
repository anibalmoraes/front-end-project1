import { ChakraProvider } from "@chakra-ui/react"
import Authentication from "./context/Autorization"
import ContactRequest from "./context/RequestsContacts"
import LoginClient from "./context/Login"
import ModalHandeling from "./context/ModalContext"
import RegisterClient from "./context/Register"
import Browsing from "./routes"
import cherryTheme from "./styles/theme"

function App() {
  return (
    <ChakraProvider theme={cherryTheme}>
      <RegisterClient>
        <ModalHandeling>
          <LoginClient>
            <Authentication>
              <ContactRequest>
                <Browsing />
              </ContactRequest>
            </Authentication>
          </LoginClient>
        </ModalHandeling>
      </RegisterClient>
    </ChakraProvider>
  )
}

export default App
