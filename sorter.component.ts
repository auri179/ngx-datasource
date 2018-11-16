import { Component, Input, OnInit } from '@angular/core';
import { DataSourceComponent, SortEvent } from './datasource.component';

@Component({
	selector: 'tc-sorter',
	template: `
    <a
      class="tc-sorter"
      style="cursor: pointer"
      (click)="sort()"
      class="text-nowrap"
    >
      <ng-content></ng-content>
      <span
        *ngIf="isSortedByMeAsc"
        class="icon-arrow-up"
        aria-hidden="true"
      ></span>
      <span
        *ngIf="isSortedByMeDesc"
        class="icon-arrow-down"
        aria-hidden="true"
      ></span>
    </a>
  `
})
export class SorterComponent implements OnInit {
	@Input()
	datasource: DataSourceComponent;
	@Input()
	field: string;

	isSortedByMeAsc = false;
	isSortedByMeDesc = false;

	public constructor() {}

	public ngOnInit(): void {
		this.datasource.onSortChange.subscribe((event: SortEvent) => {
			this.isSortedByMeAsc =
				event.sortBy === this.field && event.sortOrder === 'asc';
			this.isSortedByMeDesc =
				event.sortBy === this.field && event.sortOrder === 'desc';
		});
	}

	sort() {
		if (this.isSortedByMeAsc) {
			this.datasource.setSort(this.field, 'desc');
		} else {
			this.datasource.setSort(this.field, 'asc');
		}
	}
}
