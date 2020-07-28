import { Component, OnInit } from '@angular/core';
import { ComponentEvent } from '@ngx-dynamic-components/core';

@Component({
  selector: 'app-reg-form',
  template: `
  <ngx-dynamic-component 
    [uiModel]="uiModel" 
    [dataModel]="data" 
    (eventHandlers)="eventHandlers($event)">
  </ngx-dynamic-component>
  `
})
export class RegFormComponent implements OnInit {

  data = {};
  uiModel = {
    id: 'top-form',
    type: 'form',
    itemProperties: {},
    children: [
      {
        id: 'control-container',
        type: 'div',
        itemProperties: {
          class: 'container-fluid'
        },
        children: [
          {
            type: 'div',
            itemProperties: {
              class: 'row'
            },
            children: [
              {
                type: 'h2',
                itemProperties: {
                  content: 'Club Membership Registration',
                  class: 'col-12 border-bottom'
                }
              },
              {
                type: 'span',
                itemProperties: {
                  content: 'Complete the form below to sign up for our membership service',
                  'font-size': 'medium',
                  class: 'col-12'
                }
              }
            ]
          },
          {
            type: 'div',
            itemProperties: {
              class: 'row form-group'
            },
            children: [
              {
                type: 'div',
                itemProperties: {
                  class: 'col-12 col-md-6'
                },
                children: [{
                  type: 'div',
                  itemProperties: {
                    class: 'row'
                  },
                  children: [{
                    type: 'label',
                    itemProperties: {
                      class: 'col-md-4 col-form-label',
                      text: 'First Name'
                    }
                  }, {
                    type: 'input',
                    itemProperties: {
                      class: 'col-md-8 form-control',
                      binding: '$.firstName',
                    }
                  }]
                }]
              },
              {
                type: 'div',
                itemProperties: {
                  class: 'col-12 col-md-6'
                },
                children: [{
                  type: 'div',
                  itemProperties: {
                    class: 'row'
                  },
                  children: [{
                    type: 'label',
                    itemProperties: {
                      class: 'col-md-4 col-form-label text-right',
                      text: 'Last Name'
                    }
                  }, {
                    type: 'input',
                    itemProperties: {
                      class: 'col-md-8 form-control',
                      binding: '$.lastName'
                    }
                  }]
                }]
              }
            ]
          },
          {
            type: 'div',
            itemProperties: {
              class: 'row form-group'
            },
            children: [
              {
                type: 'label',
                itemProperties: {
                  text: 'E-mail',
                  class: 'col-md-2 col-form-label'
                }
              },
              {
                type: 'input',
                itemProperties: {
                  class: 'col-md-10 form-control',
                  binding: '$.email',
                }
              }
            ]
          },
          {
            type: 'div',
            itemProperties: {
              class: 'row form-group'
            },
            children: [
              {
                type: 'div',
                itemProperties: {
                  class: 'col-12 col-md-6'
                },
                children: [{
                  type: 'div',
                  itemProperties: {
                    class: 'row'
                  },
                  children: [{
                    type: 'label',
                    itemProperties: {
                      class: 'col-md-4 col-form-label',
                      text: 'Area Code'
                    }
                  }, {
                    type: 'input',
                    itemProperties: {
                      class: 'col-md-8 form-control',
                      binding: '$.areaCode',
                    }
                  }]
                }]
              },
              {
                type: 'div',
                itemProperties: {
                  class: 'col-12 col-md-6'
                },
                children: [{
                  type: 'div',
                  itemProperties: {
                    class: 'row'
                  },
                  children: [{
                    type: 'label',
                    itemProperties: {
                      class: 'col-md-4 col-form-label text-right',
                      text: 'Phone Number'
                    }
                  }, {
                    type: 'input',
                    itemProperties: {
                      class: 'col-md-8 form-control',
                      binding: '$.phone'
                    }
                  }]
                }]
              }
            ]
          },
          {
            type: 'div',
            itemProperties: {
              class: 'row form-group'
            },
            children: [
              {
                type: 'label',
                itemProperties: {
                  text: 'Street Address',
                  class: 'col-md-2 col-form-label'
                }
              },
              {
                type: 'input',
                itemProperties: {
                  class: 'col-md-10 form-control',
                  binding: '$.address',
                }
              }
            ]
          },
          {
            type: 'div',
            itemProperties: {
              class: 'row form-group'
            },
            children: [
              {
                type: 'div',
                itemProperties: {
                  class: 'col-12 col-md-6'
                },
                children: [{
                  type: 'div',
                  itemProperties: {
                    class: 'row'
                  },
                  children: [{
                    type: 'label',
                    itemProperties: {
                      class: 'col-md-4 col-form-label',
                      text: 'City'
                    }
                  }, {
                    type: 'input',
                    itemProperties: {
                      class: 'col-md-8 form-control',
                      binding: '$.city',
                    }
                  }]
                }]
              },
              {
                type: 'div',
                itemProperties: {
                  class: 'col-12 col-md-6'
                },
                children: [{
                  type: 'div',
                  itemProperties: {
                    class: 'row'
                  },
                  children: [{
                    type: 'label',
                    itemProperties: {
                      class: 'col-md-4 col-form-label text-right',
                      text: 'State / Province'
                    }
                  }, {
                    type: 'input',
                    itemProperties: {
                      class: 'col-md-8 form-control',
                      binding: '$.state'
                    }
                  }]
                }]
              }
            ]
          },
          {
            type: 'div',
            itemProperties: {
              class: 'row form-group'
            },
            children: [
              {
                type: 'label',
                itemProperties: {
                  text: 'Birth Date',
                  class: 'col-md-2 col-form-label'
                }
              },
              {
                type: 'input',
                itemProperties: {
                  class: 'col-md-4 form-control',
                  binding: '$.birthdate',
                  type: 'date'
                }
              }
            ]
          },
          {
            type: 'div',
            itemProperties: {
              class: 'row form-group'
            },
            children: [
              {
                type: 'h6',
                itemProperties: {
                  content: 'Where did you hear about us?',
                  class: 'col-12'
                }
              },
              {
                type: 'div',
                itemProperties: {
                  class: 'col-12'
                },
                children: [{
                  type: 'div',
                  itemProperties: {
                    class: 'form-check'
                  },
                  children: [
                    {
                      type: 'input',
                      itemProperties: {
                        type: 'checkbox',
                        binding: '$.friends',
                        class: 'form-check-input'
                      }
                    },
                    {
                      type: 'label',
                      itemProperties: {
                        text: 'A friend or colleague',
                        class: 'form-check-label'
                      }
                    }]
                }]
              }, {
                type: 'div',
                itemProperties: {
                  class: 'col-12'
                },
                children: [
              {
                type: 'div',
                itemProperties: {
                  class: 'form-check'
                },
                children: [
                  {
                    type: 'input',
                    itemProperties: {
                      type: 'checkbox',
                      binding: '$.google',
                      class: 'form-check-input'
                    }
                  },
                  {
                    type: 'label',
                    itemProperties: {
                      text: 'Google',
                      class: 'form-check-label'
                    }
                  }]
              }]},
              {
                type: 'div',
                itemProperties: {
                  class: 'col-12'
                },
                children: [{
                type: 'div',
                itemProperties: {
                  class: 'form-check'
                },
                children: [
                  {
                    type: 'input',
                    itemProperties: {
                      class: 'form-check-input',
                      type: 'checkbox',
                      binding: '$.blogPost',
                    }
                  },
                  {
                    type: 'label',
                    itemProperties: {
                      text: 'Blog Post',
                      class: 'form-check-label'
                    }
                  }]
              }]}, {
                type: 'div',
                itemProperties: {
                  class: 'col-12'
                },
                children: [{
                type: 'div',
                itemProperties: {
                  class: 'form-check'
                },
                children: [
                  {
                    type: 'input',
                    itemProperties: {
                      type: 'checkbox',
                      class: 'form-check-input',
                      binding: '$.news',
                    }
                  },
                  {
                    type: 'label',
                    itemProperties: {
                      text: 'News Article',
                      class: 'form-check-label'
                    }
                  }]
              }]}
            ]
          }
        ]
      },
      {
        type: 'div',
        itemProperties: {
          class: 'row'
        },
        children: [
          {
            type: 'button',
            itemProperties: {
              label: 'Submit',
              onClick: 'submitForm',
              class: 'btn btn-primary ml-auto mr-3',
            }
          }
        ]
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  eventHandlers(evt: ComponentEvent): void {
    if (evt.eventName === 'submitForm') {
      console.log(this.data);
    }
  }

}
