import { Component, Input, OnInit } from "@angular/core";
import { DataSourceComponent, SortEvent } from "./datasource.component";

@Component({
  selector: "tc-sorter",
  template: `
    <a
      class="tc-sorter"
      style="cursor: pointer"
      (click)="sort()"
      class="text-nowrap"
    >
      <ng-content></ng-content>
    </a>
  `
})
export class SorterComponent implements OnInit {
  @Input()
  datasource: DataSourceComponent;
  @Input()
  field: string;

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
