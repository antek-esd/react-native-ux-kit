export interface IProps {
  maxHour?: number;
  maxMinute?: number;
  hourInterval?: number;
  minuteInterval?: number;
  hourUnit?: string;
  minuteUnit?: string;
  selectedHour: string;
  selectedMinute: string;
  itemStyle?: ItemStyle;
  textCancel?: string;
  textConfirm?: string;
  onCancel: () => void;
  onConfirm: (h: string, m: string) => void;
}

interface ItemStyle {
  color?: string;
}

export interface IState {
  selectedHour: string;
  selectedMinute: string;
}

// class TimePicker extends Component<TimePickerProps> {
//   open(): void;
//   close(): void;
// }

// export default TimePicker;
// }
