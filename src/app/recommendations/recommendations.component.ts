import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { ProfileService } from '../home/shared/profile.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { NgFor, NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [MatIcon, IonicModule, MatCardModule, MatIconModule, MatMenuModule, MatButtonModule, MatBadgeModule, NgFor, NgIf],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  recData!: any;
  ProfileList!:any;
  count:number=0;
  constructor(private profileService: ProfileService, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.profileService.getProfiles().subscribe({
      next: (data) => {
        this.ProfileList = data;
        this.recData = this.ProfileList[0];
      },
      error: (err) => {
        console.error('Error loading profiles:', err);
      }
    })
  }

  onBack() {
    this.router.navigate(['/home'])
  }

  goNext(id: number) {
    this.toastr.clear()
    if (id == 1)
      this.toastr.success("Interested")
    else if (id == 2)
      this.toastr.success("Not Interested")
    else
      this.toastr.success("Shortlisted")
this.setNextprofile()
   
  }

  onSwipeLeft(){
    this.toastr.success("Interested")
    this.setNextprofile()

  }

  onSwipeRight(){
    this.toastr.success("Not Interested")
    this.setNextprofile()

  }

  setNextprofile(){
    this.count++;
    this.count = (this.count == this.ProfileList.length) ? 0 : this.count;
    this.recData =  this.ProfileList[this.count] 
  }

  
}
