// import React, { ReactElement, useState, FC } from 'react';
// import { View, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// export const TextInput: FC = (): ReactElement => {
//   return (
//     <View style={{ flexDirection: 'row', marginRight: 20, minHeight: 35 }}>
//       <Icon
//         color={descriptionColor()}
//         name="align-left"
//         size={18}
//         style={{ alignSelf: 'center', marginRight: 14 }}
//       />
//       <TextInput
//         maxLength={255}
//         multiline
//         textAlignVertical="top"
//         placeholderTextColor={descriptionColor()}
//         style={{
//           color: 'white',
//           fontSize: 18,
//           width: '89%',
//           maxHeight: 65,
//           marginBottom: ios ? 5 : 0,
//           marginLeft: ios ? 3 : 0,
//         }}
//         underlineColorAndroid={underlineColorAndroid()}
//         onChangeText={(data) => editTaskAction({ description: data, emptyFields: false })}
//         onFocus={() => {
//           this.setState({ isEditing: true });
//           editTaskAction({ emptyFields: false });
//         }}
//         onBlur={() => this.setState({ isEditing: false })}
//         value={Edit.task.description}
//         placeholder={placeholder()}
//       />
//       <TouchableOpacity
//         onPress={() => (isEditing ? editTaskAction({ description: '' }) : null)}
//         style={{
//           alignSelf: 'center',
//           padding: 8,
//           marginTop: -10,
//         }}
//       >
//         <Icon name="times" size={18} color={isEditing ? 'white' : 'transparent'} />
//       </TouchableOpacity>
//     </View>
//   );
// };
