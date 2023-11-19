import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Core/Models/user';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id!: number;
  user!: User;
  updateForm!: FormGroup;
  i: number = 0;
  size: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formB: FormBuilder
  ) { }

  ngOnInit(): void {
    this.updateForm = this.formB.group({
      id: [0],
      firstName: [''],
      lastName: [''],
      birthDate: [''],
      email: [''],
      password: [''],
      profession: [''],
      accountCategory: [''],
      picture: [''],
      status: [''],
      skills: this.formB.array([])
    });

    this.getParam();
  }

  update() {
    //alert(this.i)
    var j;
    this.user['skills'] = [];
    for (j = 0; j < (this.i + this.size); j++) {
      this.user['skills'].push(this.test().value[j]);

    }


    // console.log(this.user)
    //console.log('Updating user with data:', this.user);
    //console.log(this.user)
    this.userService.updateUser(this.user).subscribe(
      (response) => {
        alert('User Updated Successfully!');
        //console.log(this.user)
        this.router.navigate(['mainUser']);

      },
      (error) => {
        console.error('Update failed:', error);
      }
    );
  }

  get skills() {
    return this.updateForm.get('skills') as FormArray;
  }
  test() {
    var a = this.updateForm.get('skills') as FormArray;

    return a;

  }
  addSkills() {
    this.skills.push(this.formB.control('', Validators.minLength(3)));
    this.i++;
    alert(this.i + " " + this.size)

  }
  addSkillsForEdit(value: any) {
    this.skills.push(this.formB.control(value, Validators.minLength(3)));

  }

  getParam() {
    this.route.paramMap.subscribe((paramMap) => this.id = Number(paramMap.get('id')));

    this.userService.getUserById(this.id).subscribe(
      (data: User) => {
        console.log(data);
        this.user = data;
        this.updateForm.patchValue(data);
        this.user.skills.forEach(skill => {
          this.addSkillsForEdit(skill)
          this.size++;
        }
        ); // Add skills to the form array
        //console.log('User data:', data);
      },
      (error) => {
        console.error('Error fetching user by ID:', error);
      }
    );
  }
}
