import {SharedConfirmPassword} from '../../../shared/utils/shared-confirm-password';
import {AbstractControl} from '@angular/forms';

export class UserEditConfirmPassword extends SharedConfirmPassword {
  matchPassword(abstractControl: AbstractControl) {
    return super.matchPasswordHelper(abstractControl, 'newPassword',
      'confirmNewPassword');
  }
}
