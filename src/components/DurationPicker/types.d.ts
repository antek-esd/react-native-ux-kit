export interface Time {
  hour: string;
  minute: string;
}

export interface IDurationPicker {
  cancelText?: string;
  color?: string;
  isVisible: boolean;
  onConfirm(time: Time): void;
  setIsVisible(b: boolean): void;
  selectedTime: Time;
  maxHour?: number;
  maxMinute?: number;
  // ios
  hourUnit?: string;
  minuteUnit?: string;
  // android
  title?: string;
  darkTheme?: boolean;
  hourInterval?: number;
  minuteInterval?: number;
}

export interface IAndroidPickerResult {
  action: string;
  hour: string;
  minute: string;
}

export interface IConfig {
  hour?: number;
  minute?: number;
  minuteInterval?: number;
  hourInterval?: number;
  title?: string;
  color?: string;
  maxHour?: number;
  maxMinute?: number;
  darkTheme?: boolean;
}
