export interface IDurationPicker {
  title: string;
  color?: string;
  time?: string;
  isVisible: boolean;
  onConfirm(time: Time): void;
  setIsVisible(b: boolean): void;
  cancelText?: string;
  hourUnit?: string;
  minuteUnit?: string;
}

interface Time {
  hour: string;
  minute: string;
}

export interface IAndroidPickerResult {
  action: string;
  hour: string;
  minute: string;
}

export interface IConfig {
  hour: number;
  minute: number;
  minuteInterval: number;
  hourInterval: number;
  title: string;
  color: string;
}
