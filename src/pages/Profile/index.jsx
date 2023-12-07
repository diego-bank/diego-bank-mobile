import Input from "../../components/Input";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useUserStore } from "../../stores/userStore";
import {
  Container,
  IconBanner,
  InfoView,
  StyledImage,
  StyledTitle,
} from "./styles";
import * as ImagePicker from "expo-image-picker";
import { api, BASE_URL } from '../../services/api'
import { useAuthStore } from "../../stores/authStore";
import Toast from "react-native-toast-message";

function Profile() {
  const first_name = useUserStore((state) => state.first_name);
  const last_name = useUserStore((state) => state.last_name);
  const cpf = useUserStore((state) => state.cpf);
  const email = useUserStore((state) => state.email);
  const url_image = useUserStore((state) => state.url_image);

  const accessToken = useAuthStore(state => state.accessToken)

  const [varFirstName, setVarFirstName] = useState(first_name);
  const [varLastName, setVarLastName] = useState(last_name);
  const [varCpf, setVarCpf] = useState(cpf);
  const [varEmail, setVarEmail] = useState(email);
  const [varUrlImage, setVarUrlImage] = useState(url_image);

//   {
//     "first_name": varFirstName,
//     "last_name": varLastName,
//     "cpf": varCpf,
//     "email": varEmail,
//     "url_image": (varUrlImage == 'https://reactnative.dev/docs/assets/p_cat2.png' ? null : varUrlImage)
//   }

  async function updateUserInfo() {
    const formData = new FormData();
    
    formData.append('first_name', varFirstName)
    formData.append('last_name', varLastName)
    formData.append('cpf', varCpf)
    formData.append('email', varEmail)
    formData.append('url_image', {uri: varUrlImage, name: `image_${first_name}_${last_name}.jpg`, type: 'image/jpg' })

    await api.put('api/v1/user/update/', formData, {
        headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": 'multipart/form-data',
            Accept: 'application/json',
        }
    })
    .then((response) => {
        console.log(response.status)
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Profile updated'
        });
    })
    .catch((e) => {
        console.log(e);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: e
        });
    })
}

  const gallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setVarUrlImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }
  };

  const camera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setVarUrlImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }
  };

  

  return (
    <Container>
      <InfoView>
        <StyledTitle>Profile Data</StyledTitle>
        <StyledImage source={{ uri: varUrlImage }} />
        <IconBanner>
          <Icon color="#23265A">
            <AntDesign
              onPress={gallery}
              name="picture"
              size={60}
              color={"#fff"}
            />
          </Icon>
          <Icon color="#23265A">
            <AntDesign
              onPress={camera}
              name="camera"
              size={60}
              color={"#fff"}
            />
          </Icon>
        </IconBanner>
        <Input
          label={"First Name"}
          type={"default"}
          value={varFirstName}
          onChangeText={(text) => setVarFirstName(text)}
        />
        <Input
          label={"Last Name"}
          type={"default"}
          value={varLastName}
          onChangeText={(text) => setVarLastName(text)}
        />
        <Input
          label={"CPF"}
          type={"numeric"}
          value={varCpf}
          onChangeText={(text) => setVarCpf(text)}
        />
        <Input
          label={"Email"}
          type={"default"}
          value={varEmail}
          onChangeText={(text) => setVarEmail(text)}
        />
      </InfoView>

      <Button
        title={"Save Changes"}
        color={"#8F3CFF"}
        onPress={() => updateUserInfo()}
      ></Button>
    </Container>
  );
}

export default Profile;
