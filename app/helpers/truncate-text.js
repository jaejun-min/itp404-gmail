import { helper } from '@ember/component/helper';

export function truncateText(params) {
// console.log( params[0].length);
let[message, max] = params
  //console.log(max)
  if (message.length > max){
     message = message.substring(0, max) + "..."
    //  console.log(message);
  }
   return message;
}

export default helper(truncateText);
