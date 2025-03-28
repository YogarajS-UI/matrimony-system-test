import { Component } from '@angular/core';
import { ProfileService } from '../home/shared/profile.service';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IonicModule, MatIconModule, NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileData!: any;
  currentImg!: string;
  currentImgNumber!: number;
  totalImgCount!: number;
  constructor(private router: Router) { }
  ngOnInit(): void {


    this.profileData = history.state.profileData;

    this.totalImgCount = this.profileData.image?.length + 1;
    this.currentImg = this.profileData.image[0];
    this.currentImgNumber = 0;




  }

  onImgChange(i: number) {
    this.currentImgNumber = i;

    this.currentImg = this.profileData.image[i];

  }

  onBack() {
    this.router.navigate(['/home'])
  }
}
