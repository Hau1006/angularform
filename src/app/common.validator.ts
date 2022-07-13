import { FormGroup } from '@angular/forms'

export function mustMatch(controlname: string, matchpassword: string) {
    return (formgroup: FormGroup) => {
        const controlname2 = formgroup.controls[controlname]
        return ''
    }

}

export const checkMustMast = (ct1: string, ct2: string) => {
    return (formGroup: FormGroup) => {
        const controlname = formGroup.controls[ct1]
        const matchingcontrol = formGroup.controls[ct2]

        if (matchingcontrol.errors && !matchingcontrol.errors) {
            return;
        }
        if (controlname.value !== matchingcontrol.value) {
            console.log("password k trung ne ")

        }
    }
}
