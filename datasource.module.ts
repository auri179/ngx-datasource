import { SorterComponent } from './sorter.component';
import { PaginatorComponent } from './paginator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapPaginatorComponent } from './bsPaginator.component';
import { DataSourceComponent } from './datasource.component';


@NgModule({
	imports: [CommonModule],
	declarations: [DataSourceComponent, PaginatorComponent, BootstrapPaginatorComponent, SorterComponent],
	exports: [DataSourceComponent, PaginatorComponent, BootstrapPaginatorComponent, SorterComponent]
})
export class DataSourceModule {}
