import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

import { generateClient } from "aws-amplify/api";
import { APIService,Book,BookInput } from '../API.service';
import { Subscription } from 'rxjs';



const client = generateClient();


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  whatget:any;


  onCreatedNewBook!: Subscription;

  newBookSubscribeResult!: Book; // Used in HTML for subscribed data

  constructor(private dataService:APIService){

  }

  myBook:Book | undefined;

  myBookInput!:BookInput;

  onGetBook(){

    this.dataService.GetBookById("8ad183e1-355f-48cb-9210-d7a603f6c305").then(e=>{

      console.log("what you receive");
      console.log(e);

      this.myBook=e;

    });


  }

  onNewBook(){

    this.myBookInput={
      title:"Akbar TMOD",
      description:"learn from akbar",
      price:500,
      author:"akbar"
    }


    console.log('print my book input');
    console.log(this.myBookInput);

    this.dataService.CreateBook(this.myBookInput).then((e)=>{


      console.log('did you make');

      console.log(e);

      

    })


  }

  ngOnInit(): void {

   
    this.vehicleSubscribe();
   
  }


  async vehicleSubscribe() {

    this.onCreatedNewBook = this.dataService.OnCreateBookListener().subscribe((dta)=>{

      console.log('boa');
      console.log(dta);

      this.newBookSubscribeResult=dta.data.onCreateBook;

      console.log('wat book');

      console.log(this.newBookSubscribeResult);

      this.myBook=this.newBookSubscribeResult;

    });

  }

  

  ngOnDestroy(): void {

    this.onCreatedNewBook.unsubscribe();
    
  }

}
