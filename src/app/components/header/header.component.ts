import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../../models/employee';
import { NgRedux } from '../../../../node_modules/ng2-redux';
import { Store } from '../../redux/store';
import { Unsubscribe } from '../../../../node_modules/redux';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    public allEmployeesLength: number;
    public unsubscribe: Unsubscribe;
    public constructor(private redux: NgRedux<Store>) { }

    ngOnInit(): void {
        this.unsubscribe = this.redux.subscribe(() => {
            this.allEmployeesLength = this.redux.getState().employees.length
        });
    }

     ngOnDestroy(): void {
        this.unsubscribe();
    }
}
