import React, { Component, ReactElement } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Picker } from '@react-native-community/picker';
import { styles } from './styles';
import { IProps, IState } from './types.d';

class TimePicker extends Component<IProps, IState> {
  RBRef: RBSheet | null = null;

  constructor(props: IProps) {
    super(props);
    const { selectedHour, selectedMinute } = props;
    this.state = { selectedHour, selectedMinute };
  }

  UNSAFE_componentWillReceiveProps(nextProps: IProps): void {
    const { selectedHour, selectedMinute } = nextProps;
    const { selectedHour: h, selectedMinute: m } = this.state;
    if (selectedHour !== h || selectedMinute !== m) {
      this.setState({ selectedHour, selectedMinute });
    }
  }

  getHourItems = (): Array<React.ReactNode> => {
    const items = [];
    const { maxHour, hourInterval, hourUnit } = this.props;
    const interval = maxHour ?? 23 / (hourInterval ?? 1);
    for (let i = 0; i <= interval; i += 1) {
      const value = `${i * (hourInterval ?? 1)}`;
      const item = <Picker.Item key={value} value={value} label={`${value}${hourUnit ?? ''}`} />;
      items.push(item);
    }
    return items;
  };

  getMinuteItems = (): Array<React.ReactNode> => {
    const items = [];
    const { maxMinute, minuteInterval, minuteUnit } = this.props;
    const interval = maxMinute ?? 59 / (minuteInterval ?? 1);
    for (let i = 0; i <= interval; i += 1) {
      const value = i * (minuteInterval ?? 1);
      const newValue = value < 10 ? `0${value}` : `${value}`;
      const item = (
        <Picker.Item key={value} value={newValue} label={`${newValue}${minuteUnit ?? ''}`} />
      );
      items.push(item);
    }
    return items;
  };

  onValueChange = (selectedHour: string, selectedMinute: string): void => {
    this.setState({ selectedHour, selectedMinute });
  };

  onCancel = (): void => {
    const { onCancel: onCancelProp } = this.props;
    if (typeof onCancelProp === 'function') {
      onCancelProp();
    }
  };

  onConfirm = (): void => {
    const { onConfirm: onConfirmProp } = this.props;
    if (typeof onConfirmProp === 'function') {
      const { selectedHour, selectedMinute } = this.state;
      onConfirmProp(selectedHour, selectedMinute);
    }
  };

  close = (): void => {
    if (this.RBRef?.close) this.RBRef.close();
  };

  open = (): void => {
    if (this.RBRef?.open) this.RBRef.open();
  };

  renderHeader = (): ReactElement => {
    const { textCancel, textConfirm, itemStyle } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.onCancel} style={styles.buttonAction}>
          <Text style={[styles.buttonText, styles.buttonTextCancel]}>{textCancel}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onConfirm} style={styles.buttonAction}>
          <Text style={{ ...styles.buttonText, color: itemStyle?.color }}>{textConfirm}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderBody = (): ReactElement => {
    const { selectedHour, selectedMinute } = this.state;
    const { itemStyle } = this.props;
    return (
      <View style={styles.body}>
        <Picker
          selectedValue={selectedHour}
          style={styles.picker}
          itemStyle={itemStyle}
          onValueChange={(itemValue) => this.onValueChange(itemValue as string, selectedMinute)}
        >
          {this.getHourItems()}
        </Picker>
        <Text style={styles.separator}>:</Text>
        <Picker
          selectedValue={selectedMinute}
          style={styles.picker}
          itemStyle={itemStyle}
          onValueChange={(itemValue) => this.onValueChange(selectedHour, itemValue as string)}
        >
          {this.getMinuteItems()}
        </Picker>
      </View>
    );
  };

  render(): ReactElement {
    return (
      <RBSheet
        ref={(ref) => {
          this.RBRef = ref;
        }}
      >
        {this.renderHeader()}
        {this.renderBody()}
      </RBSheet>
    );
  }
}

export default TimePicker;
