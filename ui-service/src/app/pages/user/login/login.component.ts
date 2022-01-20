import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserCredential } from 'src/app/core/models/user-credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(
    public logInDialogBox: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public providedUserCredential: UserCredential,
  ) { }

  ngOnInit(): void {
  }



}
