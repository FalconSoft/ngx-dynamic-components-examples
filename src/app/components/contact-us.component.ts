import { Component } from '@angular/core';
import { ComponentEvent, JSONUtils, UIModel } from '@ngx-dynamic-components/core';

@Component({
  selector: 'app-contact-us',
  template: `
  <ngx-dynamic-component
    [uiModel]="uiModel"
    (eventHandlers)="eventHandlers($event)"
    [dataModel]="data">
    </ngx-dynamic-component>
  `
})
export class ContactUsComponent {

  uiModel = `
  <form onSubmit="contactUs(data)">
    <h3>Contact us</h3>
    <div class="row">
      <div class="col-12 col-md-4 mb-2">
        <label>Full Name*</label>
        <input class="form-control" binding="$.fullName" onInput="onChange()" required="true" />
      </div>
      <div class="col-12 col-md-4 mb-2">
        <label>E-mail Address*</label>
        <input class="form-control" binding="$.email" onInput="onChange()" required="true" />
      </div>
      <div class="col-12 col-md-4 mb-2">
        <label>Phone</label>
        <input type="tel" class="form-control" binding="$.phone" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label>Message</label>
        <textarea class="form-control" rows="5" onInput="onChange()" binding="$.message" required="true" />
      </div>
    </div>
    <div class="row">
      <div class="col ml-auto">
        <button class="btn btn-primary" id="submitBtn" disabled="true" type="submit">SEND MESSAGE</button>
      </div>
    </div>
  </form>`;

  data = {
    fullName: null,
    email: null,
    message: null,
    phone: null
  };

  eventHandlers(evt: ComponentEvent): void {
    switch (evt.eventName) {
      case 'onChange': {
        const btn = this.getComponentById(evt.rootUIModel, 'submitBtn') as any;
        btn.disabled = this.data.fullName && this.data.email && this.data.message ? undefined : true;
        break;
      }

      case 'contactUs': {
        this.sendData(evt.parameters?.data);
        break;
      }
    }
  }

  private getComponentById(uiModel: UIModel, id: string) {
    const componentUIModel = JSONUtils.find(uiModel, `$(children:id=${id})`) as UIModel;
    return componentUIModel?.getComponent();
  }

  private sendData(data: any): void {
    // Send data
    console.log('sendData', data);
  }

}
