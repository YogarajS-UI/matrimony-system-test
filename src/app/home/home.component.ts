import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';   // Import MatCardModule
import { MatMenuModule } from '@angular/material/menu';   // Import MatMenuModule
import { MatIconModule } from '@angular/material/icon';   // Import MatIconModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatBadgeModule } from '@angular/material/badge';  // Import MatBadgeModule
import { ProfileService } from './shared/profile.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatMenuModule,MatButtonModule,MatBadgeModule,NgFor ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
profileData!:any;
constructor(private profileService:ProfileService, private router:Router){   
}
  ngOnInit(): void  {
    this.profileService.getProfiles().subscribe({
      next: (data) => {
        this.profileData = data;    },
      error: (err) => {
        console.error('Error loading profiles:', err);
      }
    })
  }



  onClick(data:any){



    this.router.navigate(['/profile'], {
      state: { profileData: data } 
    });
  }

  gotoRecommendation(){
    this.router.navigate(['/recommendation']);
  }
}
