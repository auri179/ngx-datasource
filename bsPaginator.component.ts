import { DataSourceComponent } from './datasource.component';
import { Component, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
	selector: 'bootstrap-paginator',
	template: `
    <tc-paginator #p [datasource]="datasource">
        <ul [class]="'pagination' + ' pagination-' + size" *ngIf="p.dataLength > p.rowsOnPage">
            <li class="page-item" [class.disabled]="p.activePage <= 1" (click)="p.setPage(1)">
                <a class="page-link" style="cursor: pointer">&laquo;</a>
            </li>
            <li class="page-item" *ngIf="p.activePage > 4 && p.activePage + 1 > p.lastPage" (click)="p.setPage(p.activePage - 4)">
                <a class="page-link" style="cursor: pointer">{{p.activePage-4}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage > 3 && p.activePage + 2 > p.lastPage" (click)="p.setPage(p.activePage - 3)">
                <a class="page-link" style="cursor: pointer">{{p.activePage-3}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage > 2" (click)="p.setPage(p.activePage - 2)">
                <a class="page-link" style="cursor: pointer">{{p.activePage-2}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage > 1" (click)="p.setPage(p.activePage - 1)">
                <a class="page-link" style="cursor: pointer">{{p.activePage-1}}</a>
            </li>
            <li class="page-item active">
                <a class="page-link" style="cursor: pointer">{{p.activePage}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage + 1 <= p.lastPage" (click)="p.setPage(p.activePage + 1)">
                <a class="page-link" style="cursor: pointer">{{p.activePage+1}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage + 2 <= p.lastPage" (click)="p.setPage(p.activePage + 2)">
                <a class="page-link" style="cursor: pointer">{{p.activePage+2}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage + 3 <= p.lastPage && p.activePage < 3" (click)="p.setPage(p.activePage + 3)">
                <a class="page-link" style="cursor: pointer">{{p.activePage+3}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage + 4 <= p.lastPage && p.activePage < 2" (click)="p.setPage(p.activePage + 4)">
                <a class="page-link" style="cursor: pointer">{{p.activePage+4}}</a>
            </li>
            <li class="page-item" [class.disabled]="p.activePage >= p.lastPage" (click)="p.setPage(p.lastPage)">
                <a class="page-link" style="cursor: pointer">&raquo;</a>
            </li>
        </ul>
        <ul class="pagination pull-right float-sm-right" *ngIf="p.dataLength > minRowsOnPage">
            <li class="page-item" *ngFor="let rows of rowsOnPageSet" [class.active]="p.rowsOnPage===rows" (click)="p.setRowsOnPage(rows)">
                <a class="page-link" style="cursor: pointer">{{rows}}</a>
            </li>
        </ul>
    </tc-paginator>
    `,
    styles:['paginatinon { margin-bottom: 0;}']
})
export class BootstrapPaginatorComponent implements OnChanges {
	@Input()
	rowsOnPageSet = [];
	@Input()
    datasource: DataSourceComponent;
    @Input()
    size: string = "sm";

	minRowsOnPage = 0;

	ngOnChanges(changes: any): any {
		if (changes.rowsOnPageSet) {
			this.minRowsOnPage = _.min(this.rowsOnPageSet);
		}
	}
}
