import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'profile', component:ProfileComponent},
    {path:'recommendation', component:RecommendationsComponent},
    {path:'**', redirectTo:'/home', pathMatch:'full'}
];
