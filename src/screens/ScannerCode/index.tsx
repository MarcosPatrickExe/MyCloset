import * as React from 'react';

import { StyleSheet, Text } from 'react-native';
import { useCameraDevices } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import firestore from '@react-native-firebase/firestore';
import { StackActions, useNavigation } from '@react-navigation/native';

export function ScannerCode() {
  const {navigate, dispatch} = useNavigation();
  const [hasPermission, setHasPermission] = React.useState(false);
  const [isScanning, setIsScanning] = React.useState(false);
  const [code, setCode] = React.useState<string>('');

  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  React.useEffect(() => {
    (
      async () => {
        try {
          
          const barcode = barcodes[0]?.displayValue;
          if(barcode !== undefined) {
            setIsScanning(true);
            setCode(barcode);
            const clothe = await firestore().collection('Clothes').doc(barcode).get();
            return dispatch(StackActions.replace('ProductDetail', {
              id: barcode,
              ...clothe.data()
            }));
          }
          

        } catch {
          setIsScanning(false);
        }
      }
    )()
  }, [barcodes])

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  return (
    device != null &&
    hasPermission && (
      <>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={!isScanning}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
          
        />
        
        <Text>
          {code}
        </Text>
        
      </>
    )
  );
}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});