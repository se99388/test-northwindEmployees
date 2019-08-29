import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
    public employee = new Employee;
    constructor(private employeesService: EmployeesService, private router: Router) { }

    ngOnInit() {

    }
    public send() {
        this.employeesService.addEmployee(this.employee);
        this.router.navigate(["/home"]);
    }
}
