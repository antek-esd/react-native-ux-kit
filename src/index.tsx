import { NativeModules } from 'react-native';

type UxKitType = {
  multiply(a: number, b: number): Promise<number>;
};

const { UxKit } = NativeModules;

export default UxKit as UxKitType;
