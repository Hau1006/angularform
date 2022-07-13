import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Hero } from 'src/app/model/hero.model';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  myForm: FormGroup;
  contact = {
    haha: '',
    age: 0
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')]],
      cpassword: ['', [Validators.required, Validators.minLength(10)]],
      phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
    });
  }

  get name() {
    return this.myForm.get('name')
    console.log("1");


  }


  onSubmit(form: FormGroup) {
    console.group("data")
    console.log('Valid?', form.get('password')?.errors); // true or false
    console.log('Name', form.value.name);

    console.log('Email', form.value.email);
    console.log('password', form.value.password, form.get("password")?.hasError("pattern"));
    console.log('Cpassword', form.value.cpassword);
    console.log('phone', form.value.phone);
    console.groupEnd()
  }


  // done
  getDrink = (type: string): string => {
    const drinks: any = {
      coke: 'Coke',
      pepsi: 'Pepsi',
      lemonade: 'Lemonade',
    }
    const result = drinks[type] ?? 'defaul'
    console.log(result);

    return result
  }








}
