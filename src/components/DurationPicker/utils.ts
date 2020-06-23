// /**
//  * convert num minutes to string
//  * examples: 272 -> 4,5 hours, 17 -> 17 minutes
//  *
//  * @param {number} minutes
//  */
// export const convertMinutesToHours = (minutes) => {
//   const minutesInHour = minutes % 60;
//   const hours = moment.duration(minutes, 'minutes').asHours();
//   const hoursString = hours >= 1.75 ? translate('hours') : translate('hour');
//   let result = '';
//   switch (true) {
//     case hours < 1:
//       result = `${minutes} ${translate('minutes')}`;
//       break;
//     case minutesInHour === 0:
//       result = `${hours} ${hoursString}`;
//       break;
//     case minutesInHour <= 15:
//       result = `${Math.floor(hours)} ${hoursString}`;
//       break;
//     case (minutesInHour > 15 && minutesInHour <= 30) || (minutesInHour > 30 && minutesInHour < 45):
//       result = `${Math.floor(hours)},5 ${hoursString}`;
//       break;
//     case minutesInHour >= 45:
//       result = `${Math.round(hours)} ${hoursString}`;
//       break;
//     default:
//       break;
//   }
//   return result;
// };

// /**
//  *
//  * @param {string} startTime - start time HH:mm
//  * @param {number} duration - duration in minutes
//  */
// export const calculateEndTime = (startTime, duration) => {
//   let endTime = moment(startTime, 'HH:mm').add(duration, 'minutes').format('HH:mm');
//   if (moment(startTime, 'HH:mm') > moment(endTime, 'HH:mm')) endTime = '23:59';
//   return { endTime, ...calculateDuration(startTime, endTime) };
// };

// /**
//  * Duration picker ok function
//  *
//  * @param {string} hour
//  * @param {string} minutes
//  * @param {string} startTime - startTime - start time HH:mm (could be null)
//  * @param {function} cb - callback
//  */
// export const submitDuration = (hour, minutes, startTime = null, cb) => {
//   let durationMinutes = parseInt(hour, 10) * 60 + parseInt(minutes, 10);
//   let duration = convertMinutesToHours(durationMinutes);
//   let endTime = null;
//   if (startTime) {
//     ({ duration, durationMinutes, endTime } = calculateEndTime(startTime, durationMinutes));
//   }
//   if (cb) cb();
//   return { duration, startTime, endTime, durationMinutes };
// };
