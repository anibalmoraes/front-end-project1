
import { LoginUser } from "../../context/Login"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { Customshadow } from "./style"
import { LoginformSchema } from "../../schema/Users"
import { useForm, Controller } from "react-hook-form"
import { iYupformLogin, iYupformLoginErrors } from "../../interfaces/login"
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Stack,
  useColorMode,
} from "@chakra-ui/react"
function Login() {
  const { colorMode } = useColorMode()
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<iYupformLogin, iYupformLoginErrors>({
    resolver: yupResolver(LoginformSchema),
  })

  const { OnSubmitLogin, loginLoad } = useContext(LoginUser)

  const submit = (login: iYupformLogin) => {
    OnSubmitLogin(login)

  }
  const nav = useNavigate()
  const register = () => {
    nav("/Register")
  }

  return (
    <Box
      __css={Customshadow}
      maxWidth="400px"
      mx="auto"
      bg={colorMode === "light" ? "-moz-initial" : "gray.800"}
      p={"4"}
      borderRadius={"8px"}
    >
      <Box as="form" onSubmit={handleSubmit(submit)}>
        <Stack spacing={3}>
          <Heading as="h2" size="lg" textAlign="center" mb={3}>
            Login
          </Heading>

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl isInvalid={!!errors.email} isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} placeholder="Digite seu email" />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl isInvalid={!!errors.password} isRequired>
                <FormLabel htmlFor="password">Senha</FormLabel>
                <Input
                  {...field}
                  type="password"
                  placeholder="Digite sua senha"
                />
                {
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                }
              </FormControl>
            )}
          />
          <Button type="submit" isDisabled={!isValid || loginLoad}>
            {loginLoad ? <Spinner size={"sm"} /> : "Entrar"}
          </Button>
          <Button type="submit" onClick={register} >
            {loginLoad ? <Spinner size={"sm"} /> : "Registrar"}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Login
