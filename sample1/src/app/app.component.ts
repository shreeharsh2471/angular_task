import { Component, OnInit } from '@angular/core';
import { CryptoService } from './crypto.service';
import { UserService } from './user.service';
import { IUser } from './IUser';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // coins: any[] = [];
  // constructor(private cryptoservice: CryptoService)
  // {
  //   this.coins = cryptoservice.getMyItems();
  // }

  protected title = 'app';
 // protected users$: Observable<IUser[]>;
  users$!: IUser[];
  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
      console.log(res);
    });
    


  }


//   appTitle: string = 'Welcome';
//   appList: any[] = [ {
//      "ID": "1",
//      "url": 'assets/image/4.jpeg'
//   },
//   {
//      "ID": "2",
//      "url": 'assets/image/3.jpeg'
//   },
//   {
//     "ID": "3",
//     "url": 'assets/image/pexels-matheus-bertelli-7031697.jpg'
//  },
//  {
//   "ID": "4",
//   "url": 'assets/image/pexels-designecologist-1779487.jpg'
// }
//  ];
 }






  
  



// export class AppComponent1 {
//   appTitle: string = 'Welcome';
//   appList1: any[] = [ {
//      "ID": "4",
//      "url": 'assets/image/4.jpg'
//   },
//   {
//      "ID": "2",
//      "url": 'assets/image/3.jpeg'
//   },

//  ];
// }