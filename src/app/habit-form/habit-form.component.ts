import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HABITS } from '../data/habits';
import { Habit } from '../models/habit';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss'],
})
export class HabitFormComponent implements OnInit {
  public habits: Habit[];
  public editingIndex: number;
  public editing = false;

  public habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.habits = HABITS;

    const routeParam = this.route.snapshot.paramMap.get('id');

    if (routeParam) {
      this.editingIndex = +routeParam;
      this.editing = true;
      this.setEditForm();
    }
  }

  public setEditForm() {
    const habit = HABITS[this.editingIndex];
    this.habitForm.patchValue({
      name: habit.name,
      frequency: habit.frequency,
      description: habit.description,
    });
  }

  public onSubmit() {
    const habit = this.habitForm.value as Habit;

    if (this.editing) {
      this.habits.splice(this.editingIndex, 1, habit);
    } else {
      this.habits.push(habit);
    }
    this.exitForm();

    this.router.navigate(['/']);
  }

  exitForm() {
    this.habitForm.reset();
    this.editing = false;
  }
}
