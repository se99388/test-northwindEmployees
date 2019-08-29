import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from '../components/employees/employees.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { Page404Component } from '../components/page404/page404.component';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';

const routes: Routes = [
    { path: "home", component: EmployeesComponent },
    { path: "about", component: AboutUsComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "add-employee", component: AddEmployeeComponent },
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "**", component: Page404Component } // חייב להיות אחרון ברשימה
]
@NgModule({
    declarations: [],
    imports: [
        CommonModule, RouterModule.forRoot(routes)
    ]
})
export class RoutingModule { }
