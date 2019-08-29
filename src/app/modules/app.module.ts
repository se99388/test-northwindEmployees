import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { EmployeesComponent } from '../components/employees/employees.component';
import { DateComponent } from '../components/date/date.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from '../components/menu/menu.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '../../../node_modules/@angular/router';
import { RoutingModule } from './routing.module';
import { Page404Component } from '../components/page404/page404.component';
import { NgReduxModule, NgRedux } from "ng2-redux";
import { Store } from '../redux/store';
import { EmployeesService } from '../services/employees.service';
import { reducer } from '../redux/reducer';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';



@NgModule({
    declarations: [

        LayoutComponent,

        HeaderComponent,

        FooterComponent,

        ThumbnailComponent,

        EmployeesComponent,

        DateComponent,

        MenuComponent,

        AboutUsComponent,

        ContactUsComponent,

        Page404Component,

        AddEmployeeComponent,
    ],
    imports: [
        BrowserModule, NgReduxModule, HttpClientModule, FormsModule, RouterModule, RoutingModule
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule {
    public constructor(redux: NgRedux<Store>, EmployeesService: EmployeesService) {
        redux.configureStore(reducer.reduce, new Store);
        EmployeesService.getEmployeesWithReduxAsync();
    }

}
