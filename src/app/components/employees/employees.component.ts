import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service';
import { NgRedux } from 'ng2-redux';
import { Store } from '../../redux/store';
import { Unsubscribe } from 'redux';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
    public allEmployees: Employee[];
    public previewFullNameImage: string;
    public unsubscribe: Unsubscribe;
    constructor(private employeesService: EmployeesService, private redux: NgRedux<Store>) { }

    public details(td: HTMLTableDataCellElement): void {

        this.previewFullNameImage = td.innerHTML;
    }

    public removeDetails(): void {

        this.previewFullNameImage = "";
    }

    ngOnInit(): void {

        this.unsubscribe = this.redux.subscribe(() => {
            this.allEmployees = this.redux.getState().employees;
            console.log(this.allEmployees);
        });

        // Getting all products with Redux in our app: 
        this.allEmployees = this.redux.getState().employees;
        console.log(this.allEmployees);
        // Getting all products without Redux in our app:

        // const observable = this.employeesService.getEmployeesAsync();
        // observable.subscribe((employees) => {
        //     this.allEmployees = employees;
        //     console.log(this.allEmployees);
        // });
    }
    ngOnDestroy(): void {
        this.unsubscribe();
    }
}
