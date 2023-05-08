import { Flex } from "@chakra-ui/react"
import Header from "../../components/header"
import SignUpForm from "../../components/SignUp"

function RegisterPage() {

  return (
    <>
      <Header isHomePage={false} />
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        width={"100vw"}
        gap={"25px"}
      >
        <SignUpForm />
      </Flex>
    </>
  )
}

export default RegisterPage
