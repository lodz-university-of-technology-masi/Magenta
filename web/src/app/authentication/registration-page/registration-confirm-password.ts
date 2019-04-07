import {SharedConfirmPassword} from '../../shared/utils/shared-confirm-password';
import {AbstractControl} from '@angular/forms';

export class RegistrationConfirmPassword extends SharedConfirmPassword {
  matchPassword(abstractControl: AbstractControl): {matchPassword: boolean} {
    return super.matchPasswordHelper(abstractControl, 'password',
      'confirmPassword');
  }
}
