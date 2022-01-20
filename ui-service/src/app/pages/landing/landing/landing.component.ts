import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserCredential } from 'src/app/core/models/user-credential';
import { LoginComponent } from '../../user/login/login.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  userCredential: UserCredential = new UserCredential();
  response: any;

  constructor(
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openLoginDialogBox(): void {
    console.log("Inside dialog box fn");
    const logInDialog = this.matDialog.open(LoginComponent, {
      width: '330px',
      height: '450px',
      data: this.userCredential,
    });

    logInDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.response = result;
    });

  }


}
