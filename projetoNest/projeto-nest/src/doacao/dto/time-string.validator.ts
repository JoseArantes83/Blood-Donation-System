import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'isTimeString', async: false })
export class IsTimeStringConstraint implements ValidatorConstraintInterface {
  validate(time: string, args: ValidationArguments) {
    const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timeFormat.test(time);
  }

  defaultMessage(args: ValidationArguments) {
    return 'A hora deve estar no formato HH:mm';
  }
}

export function IsTimeString(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsTimeStringConstraint,
    });
  };
}
