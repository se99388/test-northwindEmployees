import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Employee } from '../models/employee';
import { ActionType } from '../redux/action';
import { NgRedux } from '../../../node_modules/ng2-redux';
import { Store } from '../redux/store';


@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    constructor(private httpClient: HttpClient, private redux: NgRedux<Store>) { }

    public getEmployeesAsync(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>('/assets/json/employees.json');
    }

    public getEmployeesWithReduxAsync(): void {
        const observable = this.httpClient.get<Employee[]>('/assets/json/employees.json');
        observable.subscribe((employees) => {
            const action = { type: ActionType.GetAllEmployees, payload: employees };
            this.redux.dispatch(action);
        });
    }

    public addEmployee(employee: Employee): void {
        // Demo of adding the product to a real server:
        // const observable = this.httpClient.post<Employee>("/assets/json/employees.json", employee);
        // observable.subscribe(employee => {
        //     const action = { type: ActionType.AddEmployee, payload: employee };
        //     this.redux.dispatch(action);
        // });

        const action = { type: ActionType.AddEmployee, payload: employee };
        this.redux.dispatch(action);

    }
}
