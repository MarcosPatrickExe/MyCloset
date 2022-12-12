import { Alert, PermissionsAndroid, Platform } from "react-native";
import { checkMultiple, openSettings, PERMISSIONS, requestMultiple, RESULTS } from "react-native-permissions";

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

  export const handleCheckPermissionStorageAndroid =
  async (): Promise<boolean> => {
    if (Platform.OS === 'android') {
      const checkPermissionStorageAndroid = await checkMultiple([
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ]);

      if (
        checkPermissionStorageAndroid[
          'android.permission.READ_EXTERNAL_STORAGE'
        ] === RESULTS.DENIED ||
        checkPermissionStorageAndroid[
          'android.permission.WRITE_EXTERNAL_STORAGE'
        ] === RESULTS.DENIED
      ) {
        const response = await requestMultiple([
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        ]);

        if (
          response['android.permission.WRITE_EXTERNAL_STORAGE'] !==
            RESULTS.GRANTED ||
          response['android.permission.READ_EXTERNAL_STORAGE'] !==
            RESULTS.GRANTED
        ) {
          Alert.alert(
            'Erro ao solicitar permissão',
            'Sem a permissão de armazenamento do seu dispositivo alguns recursos podem não funcionar corretamente.',
          );
          // retorna false caso a permissão não seja concedida
          return false;
        }
      }
      // retorna true caso a permissão seja concedida
      return true;
    }
    return false;
  };

const storagePermissionMsgForAndroid = () => {
  Alert.alert(
    'Atenção!',
    'Para adicionar a permissão você precisará acessar o menu: \n\n permissões do app -> armazenamento/memória -> permitir',
    [
      {
        text: 'Agora não',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Continuar',
        onPress: async () => openSettings(),
      },
    ],
    {cancelable: false},
  );
};

export const handleStoragePermission = async (
  msg = 'Para baixar arquivos de mídia, permita que o Ceará App acesse as fotos, mídias e os arquivos do seu celular.',
): Promise<boolean> => {
  let resultPermissionStorage = Platform.OS === 'ios';

  if (Platform.OS === 'android') {
    const checkPermissionStorageAndroid = await checkMultiple([
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ]);

    console.log(
      checkPermissionStorageAndroid['android.permission.READ_EXTERNAL_STORAGE'],
    );

    if (
      checkPermissionStorageAndroid[
        'android.permission.READ_EXTERNAL_STORAGE'
      ] === RESULTS.BLOCKED ||
      checkPermissionStorageAndroid[
        'android.permission.WRITE_EXTERNAL_STORAGE'
      ] === RESULTS.BLOCKED
    ) {
      Alert.alert(
        ' O acesso ao armazenamento não foi autorizado',
        'Para emitir/salvar o passaporte de vacinação é necessário autorizar a leitura e escrita no armazenamento do dispositivo. Clique em continuar para adicionar essa permissão',
        [
          {
            text: 'Agora não',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Continuar',
            onPress: async () =>
              Platform.OS === 'ios'
                ? openSettings()
                : storagePermissionMsgForAndroid(),
          },
        ],
        {cancelable: false},
      );

      return false;
    }

    if (
      checkPermissionStorageAndroid[
        'android.permission.READ_EXTERNAL_STORAGE'
      ] !== RESULTS.GRANTED ||
      checkPermissionStorageAndroid[
        'android.permission.WRITE_EXTERNAL_STORAGE'
      ] !== RESULTS.GRANTED
    ) {
      Alert.alert(
        '',
        msg,
        [
          {
            text: 'Agora não',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Continuar',
            onPress: async () => {
              resultPermissionStorage =
                await handleCheckPermissionStorageAndroid();
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      return true;
    }
  }

  return resultPermissionStorage;
};