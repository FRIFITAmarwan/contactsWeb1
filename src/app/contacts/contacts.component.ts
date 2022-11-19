import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContats:any;

  constructor(public http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/chercherContacts?page=0&size=5")
      .subscribe(data =>{
        this.pageContats=data;
        },error => {
        console.log(error);
        }

      )
  }

}
