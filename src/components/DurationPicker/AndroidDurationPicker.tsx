import { NativeModules } from 'react-native';

type DurationPickerProps = {
  hour: number;
  minute: number;
  minuteInterval: number;
  hourInterval: number;
  title: string;
  color: string;
};

type IAndroidPickerResult = {
  action: string;
  hour: string;
  minute: string;
};

type UxKitType = {
  open(config: DurationPickerProps): Promise<IAndroidPickerResult>;
};

const { UxKit } = NativeModules;

export default UxKit as UxKitType;
