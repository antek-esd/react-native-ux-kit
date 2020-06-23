import React, { FC, ReactElement, useEffect, useRef } from 'react';
import { View, Platform } from 'react-native';
import IOSTimePicker from './ios';
import AndroidTimePicker from './android';
import { IDurationPicker, IConfig, IAndroidPickerResult, Time } from './types.d';

const ios = Platform.OS === 'ios';

export const DurationPicker: FC<IDurationPicker> = (props): ReactElement => {
  const {
    cancelText,
    color,
    isVisible,
    maxHour,
    maxMinute,
    onConfirm,
    selectedTime,
    setIsVisible,
    // ios
    hourUnit,
    minuteUnit,
    // android
    darkTheme,
    hourInterval,
    minuteInterval,
    title,
  } = props;

  const TimePickerIOS = useRef<IOSTimePicker>(null);

  const { hour, minute }: Time = selectedTime;

  useEffect(() => {
    if (isVisible) {
      if (ios && TimePickerIOS?.current?.open) TimePickerIOS.current.open();

      if (!ios) {
        const openDurationPickerAndroid = async (): Promise<void> => {
          const config: IConfig = {
            color,
            darkTheme,
            hour: parseInt(hour, 10),
            hourInterval,
            maxHour,
            maxMinute,
            minute: parseInt(minute, 10),
            minuteInterval,
            title,
          };
          try {
            const result: IAndroidPickerResult = await AndroidTimePicker.open(config);
            const { action, hour: h, minute: m } = result;
            if (action === 'setAction') {
              const min = parseInt(m, 10) > 9 ? m : `0${m}`;
              onConfirm({ hour: h, minute: min });
            }
          } catch (e) {
            console.warn(e);
            setIsVisible(false);
          }
        };
        openDurationPickerAndroid().catch(console.warn);
        setTimeout(() => setIsVisible(false));
      }
    }
  }, [isVisible]);

  if (ios) {
    const handleOnCancel = () => {
      if (TimePickerIOS?.current?.close) TimePickerIOS.current.close();
      setIsVisible(false);
    };
    const handleOnConfirm = (h: string, m: string): void => {
      onConfirm({ hour: h, minute: m });
      if (TimePickerIOS?.current?.close) TimePickerIOS.current.close();
      setIsVisible(false);
    };
    return (
      <IOSTimePicker
        hourUnit={hourUnit}
        itemStyle={{ color }}
        maxHour={maxHour}
        maxMinute={maxMinute}
        hourInterval={hourInterval}
        minuteInterval={minuteInterval}
        minuteUnit={minuteUnit}
        onCancel={handleOnCancel}
        onConfirm={handleOnConfirm}
        ref={TimePickerIOS}
        selectedHour={hour}
        selectedMinute={minute}
        textCancel={cancelText?.toUpperCase()}
        textConfirm="OK"
      />
    );
  }
  return <View />;
};

DurationPicker.defaultProps = {
  cancelText: 'cancel',
  darkTheme: false,
  hourInterval: 1,
  hourUnit: '',
  maxHour: 23,
  maxMinute: 59,
  minuteInterval: 1,
  minuteUnit: '',
  selectedTime: { hour: '0', minute: '0' },
  color: 'black',
  title: 'Set time',
};
