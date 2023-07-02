import { ValidationErrors , AbstractControl, ValidatorFn} from "@angular/forms";

export const matchPassword : ValidatorFn = (control: AbstractControl):ValidationErrors|null=>{
    let password = control.get('password_su')
    let confirmpassword = control.get('confirmPassword')
    if(password && confirmpassword && password?.value != confirmpassword?.value){
        return {
            passwordmatcherror : true
        } 
    }
    return null;
  }