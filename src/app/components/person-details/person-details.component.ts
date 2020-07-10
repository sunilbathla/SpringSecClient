import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  constructor(private userService: UserService) { }
  msg: string
  ngOnInit(): void {
    this.getPersonDetails();
  }
  private getPersonDetails() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => {this.msg = users.result});
}
}
