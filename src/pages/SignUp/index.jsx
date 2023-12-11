import React from "react";
import { Container, Logo, StyledText, Link, TextLink } from "./styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";

import { api } from "../../services/api";
import { useAuthStore } from "../../stores/authStore";
import Toast from "react-native-toast-message";

function SignUp() {
  const { navigate } = useNavigation();

  function handleNavigationLogin() {
    navigate("Login");
  }

  function handleNavigationLWelcome() {
    navigate("Welcome");
  }

  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setRefreshToken = useAuthStore((state) => state.setRefreshToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");

  function handleNavigationSignUp() {
    navigate("SignUp");
  }

  async function login() {
    await api
      .post("api/token/", {
        email: email,
        password: password,
      })
      .then((response) => {
        const accessToken = response.data.access;
        const refreshToken = response.data.refresh;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
      })
      .catch((e) => {
        console.log(e);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: e,
        });
      });
  }

  async function signUp() {
    await api
      .post("api/user/create/", {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        cpf: cpf,
      })
      .then((response) => {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "You have created your account!",
        });
        login();
      })
      .catch((e) => {
        console.log(e);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: e,
        });
      });
  }

  return (
    <Container>
      <Logo source={require("../../../assets/logo.png")} />
      <Input
        label={"First Name"}
        type={"default"}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <Input
        label={"Last Name"}
        type={"default"}
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <Input
        label={"Email"}
        type={"default"}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        label={"CPF"}
        type={"numeric"}
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
      <Input
        label={"Password"}
        type={"visible-password"}
        secure={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <StyledText>
        To login, click
        <Link onPress={handleNavigationLogin}>
          <TextLink>here.</TextLink>
        </Link>
      </StyledText>
      <Button title={"Sign Up"} color={"#8F3CFF"} />
      <Button title={"Change Password"} color={"#23265A"} />
    </Container>
  );
}

export default SignUp;
