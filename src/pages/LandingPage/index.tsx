import { Flex } from "@chakra-ui/react"
import Header from "../../components/header"
import Login from "../../components/login"


function LandingPage() {

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
        <Login />
      </Flex>
    </>
  )
}

export default LandingPage
