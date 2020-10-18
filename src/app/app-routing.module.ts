import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllHabitsComponent } from './all-habits/all-habits.component';
import { HabitFormComponent } from './habit-form/habit-form.component';

const routes: Routes = [
  { path: 'habit-form/:id', component: HabitFormComponent },
  { path: 'habit-form', component: HabitFormComponent },
  { path: '', component: AllHabitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
