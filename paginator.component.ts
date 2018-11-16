import { DataSourceComponent, PageEvent } from './datasource.component';
import {
	Component,
	Input,
	SimpleChange,
	OnChanges,
	Optional
} from '@angular/core';

@Component({
	selector: 'tc-paginator',
	template: `<ng-content></ng-content>`
})
export class PaginatorComponent implements OnChanges {
	@Input()
	datasource: DataSourceComponent;

	private ds: DataSourceComponent;

	public activePage: number;
	public rowsOnPage: number;
	public dataLength = 0;
	public lastPage: number;

	public constructor(@Optional() private injectDatasource: DataSourceComponent) {}

	public ngOnChanges(changes: { [key: string]: SimpleChange }): any {
		this.ds = this.datasource || this.injectDatasource;
		this.onPageChangeSubscriber(this.ds.getPage());
		this.ds.onPageChange.subscribe(this.onPageChangeSubscriber);
	}

	public setPage(pageNumber: number): void {
		this.ds.setPage(pageNumber, this.rowsOnPage);
	}

	public setRowsOnPage(rowsOnPage: number): void {
		this.ds.setPage(this.activePage, rowsOnPage);
	}

	private onPageChangeSubscriber = (event: PageEvent) => {
		this.activePage = event.activePage;
		this.rowsOnPage = event.rowsOnPage;
		this.dataLength = event.dataLength;
		this.lastPage = Math.ceil(this.dataLength / this.rowsOnPage);
	}
}
