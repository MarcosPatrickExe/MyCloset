import { Alert, PermissionsAndroid } from "react-native";

export async function hasAndroidPermission() {
  const permissionOne = await messagePermissionStorage();

  if (permissionOne) {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  return false;
}

const messagePermissionStorage = async () =>
  new Promise<boolean>((resolve) =>
    Alert.alert(
      'Precisamos de permissão!',
      'O aplicativo necessita de acesso ao armazenamento para salvar sua frase.',
      [
        {
          text: 'Agora não',
          onPress: () => resolve(false),
          style: 'cancel'
        },
        { text: 'Continuar', onPress: () => resolve(true) }
      ],
      { cancelable: false }
    )
  );