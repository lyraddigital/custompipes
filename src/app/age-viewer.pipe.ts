import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ageMessage', pure: true})
export class AgeMessagePipe implements PipeTransform {
  transform(age?: number, messagePrefix?: string): string {
    if(age){
       return this.getMessageFromAge(age, messagePrefix);
    }

    return this.nonEntryMessage(messagePrefix);
  }

  private getMessageFromAge(age?: number, messagePrefix?: string): string {
      // Doing this to ensure that if input is garbage we can
      // it will return the string 'NaN' and we can check against
      // this.
      age = parseInt(age.toString());
      
      if(age.toString() != 'NaN')
      {
          var message = messagePrefix ? messagePrefix : '';

          if (age < 0)
          {
              message += "Idiot you aren't born yet";
          }
          else if (age < 1) {
              message += "Who's a cute little baby";
          }
          else if (age < 6) {
              message += "Oh my not this age. You're trouble.";
          }
          else if (age < 13) {
              message += "Well aren't you growing up";
          }
          else if (age < 18) {
              message += "Bloody teenager";
          }
          else if (age < 30) {
              message += "Get this party started";
          }
          else if (age < 50) {
              message += "Welcome to the life of parenthood";
          }
          else if (age <= 80) {
              message += "Welcome to the life of a grand parent";
          }
          else {
              message += "RIP. You had a great life. You will be remembered";
          }

          return message;
      }
      else {
          return this.nonEntryMessage(messagePrefix);
      }
  }

  private nonEntryMessage(messagePrefix?: string) {
      messagePrefix =  messagePrefix ? `${messagePrefix} `: '';
      return `${messagePrefix}Please enter your age`;
  }
}