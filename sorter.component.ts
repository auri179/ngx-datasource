import { Component, Input, OnInit } from "@angular/core";
import { DataSourceComponent, SortEvent } from "./datasource.component";

@Component({
  selector: "tc-sorter",
  template: `
    <div style="display:flex">
      <div>
        <a
          class="tc-sorter"
          style="cursor: pointer"
          (click)="sort()"
          class="text-nowrap"
        >
          <ng-content></ng-content>
        </a>
      </div>
      <div *ngIf="displayIcons">
        <span
          *ngIf="sortedDesc"
          [class]="'icon-up ' + iconUp"
          aria-hidden="true"
        ></span>
        <span
          *ngIf="sortedAsc"
          [class]="'icon-down ' + iconDown"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  `
})
export class SorterComponent implements OnInit {
  @Input()
  datasource: DataSourceComponent;
  @Input()
  field: string;
  @Input() iconUp: string;
  @Input() iconDown: string;
  @Input() displayIcons = false;

  sortedAsc = false;
  sortedDesc = false;

  public constructor() {}

  public ngOnInit(): void {
    this.datasource.onSortChange.subscribe((event: SortEvent) => {
      this.sortedAsc = event.sortBy === this.field && event.sortOrder === "asc";
      this.sortedDesc =
        event.sortBy === this.field && event.sortOrder === "desc";
    });
  }

  sort() {
    if (this.sortedAsc) {
      this.datasource.setSort(this.field, "desc");
    } else {
      this.datasource.setSort(this.field, "asc");
    }
  }
}
