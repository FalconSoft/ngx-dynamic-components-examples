import { Component } from '@angular/core';
import { ComponentEvent } from '@ngx-dynamic-components/core';

@Component({
  selector: 'app-dropdowns-json',
  template: `
  <ngx-dynamic-component 
    [uiModel]="uiModel" 
    (eventHandlers)="eventHandlers($event)" 
    [dataModel]="data">
  </ngx-dynamic-component>
`
})
export class DropdownsJsonComponent {

  uiModel = {
    type: 'div',
    itemProperties: {
      class: 'flex-column',
      maxWidth: '300px'
    },
    children: [{
      type: 'h3',
      itemProperties: { content: 'Select City' }
    }, {
      type: 'div',
      itemProperties: { class: 'form-group' },
      children: [{
        type: 'label',
        itemProperties: { class: 'col-form-label', width: '60px', text: 'Country' }
      }, {
        type: 'ng-select',
        itemProperties: {
          onSelect: 'countryChanged',
          width: '300px',
          binding: '$.country',
          itemsSource: [
            { label: 'United Kingdom', value: 'uk' },
            { label: 'Ukraine', value: 'ua' }
          ],
          multiple: false
        }
      }]
    }, {
      type: 'div',
      itemProperties: { class: 'form-group' },
      children: [{
        type: 'label',
        itemProperties: { class: 'col-form-label', width: '60px', text: 'City' }
      },
      {
        type: 'ng-select',
        itemProperties: { width: '300px', itemsSource: '$.cities', binding: '$.city', multiple: false }
      }]
    }]
  };

  data = {
    city: null,
    country: null,
    cities: null
  };

  private cities = {
    uk: [{ label: 'London', value: 'lon' }, { label: 'Liverpool', value: 'liv' }],
    ua: [{ label: 'Kyiv', value: 'kyiv' }, { label: 'Lviv', value: 'lvi' }]
  };

  eventHandlers(evt: ComponentEvent) {
    if (evt.eventName === 'countryChanged') {
      this.data.cities = this.cities[this.data.country];
      this.data.city = null;
    }
  }

}
