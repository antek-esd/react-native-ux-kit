import React, { FC, ReactElement, useEffect, useRef } from 'react';
import { View, Platform } from 'react-native';
import IOSTimePicker from 'react-native-24h-timepicker';
import IOSTimePickerInterface from 'react-native-24h-timepicker/index.d';
import AndroidTimePicker from './AndroidDurationPicker';
import { IDurationPicker, IConfig, IAndroidPickerResult } from './types.d';

const ios = Platform.OS === 'ios';

export const DurationPicker: FC<IDurationPicker> = ({
  cancelText,
  color,
  isVisible,
  onConfirm,
  setIsVisible,
  title,
}): ReactElement => {
  const TimePickerIOS = useRef<IOSTimePickerInterface>(null);

  useEffect(() => {
    if (isVisible) {
      if (ios && TimePickerIOS?.current?.open) TimePickerIOS.current.open();

      if (!ios) {
        const openDurationPickerAndroid = async (): Promise<void> => {
          const config: IConfig = {
            hour: 1,
            minute: 0,
            minuteInterval: 10,
            hourInterval: 3,
            title,
            color: color ?? 'green',
          };
          try {
            const result: IAndroidPickerResult = await AndroidTimePicker.open(config);
            const { action, hour, minute } = result;
            if (action === 'setAction') {
              onConfirm({ hour, minute });
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
  }, [isVisible, color, title, setIsVisible, onConfirm]);

  if (ios) {
    return (
      <IOSTimePicker
        hourUnit=" h"
        minuteUnit=" m"
        // maxHour={startHour ? 23 - startHour : 23}
        // maxMinute={59}
        onCancel={() => {
          if (TimePickerIOS?.current?.close) TimePickerIOS.current.close();
          setIsVisible(false);
        }}
        onConfirm={(hour: string, minute: string): void => {
          onConfirm({ hour, minute });
          if (TimePickerIOS?.current?.close) TimePickerIOS.current.close();
          setIsVisible(false);
        }}
        ref={TimePickerIOS}
        selectedHour="0"
        selectedMinute="0"
        textCancel={cancelText}
        textConfirm="OK"
        itemStyle={{ color }}
      />
    );
  }

  return <View />;
};

DurationPicker.defaultProps = {
  cancelText: 'cancel',
};
