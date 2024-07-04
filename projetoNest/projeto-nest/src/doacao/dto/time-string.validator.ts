import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'isTimeString', async: false })
export class IsTimeStringConstraint implements ValidatorConstraintInterface {
	validate(time: string) {
		const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;
		return timeFormat.test(time);
	}

	defaultMessage() {
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
