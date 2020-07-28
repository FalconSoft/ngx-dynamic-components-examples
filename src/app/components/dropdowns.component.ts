import { Component } from '@angular/core';
import { ComponentEvent } from '@ngx-dynamic-components/core';

@Component({
  selector: 'app-dropdowns',
  template: `
    <ngx-dynamic-component 
      [uiModel]="uiModel" 
      (eventHandlers)="eventHandlers($event)" 
      [dataModel]="data">
    </ngx-dynamic-component>
  `
})
export class DropdownsComponent {

  uiModel = `
    <div class="flex-column" maxWidth="300px">
      <h3>Select City</h3>
      <div class="form-group">
        <label class="col-form-label" width="60px">Country</label>
        <ng-select onSelect="countryChanged" width="300px" binding="$.country">
          <option value="uk">United Kingdom</option>
          <option value="ua">Ukraine</option>
        </ng-select>
      </div>
      <div class="form-group">
        <label class="col-form-label" width="60px">City</label>
        <ng-select width="300px" itemsSource="$.cities" binding="$.city"></ng-select>
      </div>
    </div>
  `;

  data = {
    city: null,
    country: null,
    cities: null
  };

  private cities = {
    uk: [{label: 'London', value: 'lon'}, {label: 'Liverpool', value: 'liv'}],
    ua: [{label: 'Kyiv', value: 'kyiv'}, {label: 'Lviv', value: 'lvi'}]
  };

  eventHandlers(evt: ComponentEvent) {
    if (evt.eventName === 'countryChanged') {
      this.data.cities = this.cities[this.data.country];
      this.data.city = null;
    }
  }

}
