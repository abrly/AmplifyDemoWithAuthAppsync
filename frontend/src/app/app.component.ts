import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import outputs from "../../amplify_outputs.json";
Amplify.configure(outputs);  




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(public authService:AuthenticatorService,private router:Router) {
    
    Amplify.configure(outputs);  

  }

  ngOnInit(): void {

    
      
    if (this.authService.authStatus === 'authenticated'){

      this.router.navigate(['/home']);
        
     } 

  }

}
