import {NgModule, Component, Input, Output, EventEmitter, HostListener, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {CommonModule} from '@angular/common';

const UI_SWITCH_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiSwitchComponent),
  multi: true
};

@Component({
  selector: 'my-switch',
  template: `
    <span class="switch"
          [class.checked]="checked"
          [class.disabled]="disabled"
          [class.switch-large]="size === 'large'"
          [class.switch-medium]="size === 'medium'"
          [class.switch-small]="size === 'small'"
          [style.background-color]="getColor('')"
          [style.border-color]="getColor('borderColor')"
    >
      <span style="margin-left: 5px" *ngIf="checked">{{onText}}</span>
      <span style="margin-left: 26px" *ngIf="!checked">{{offText}}</span>
  <small [style.background]="getColor('switchColor')">
  </small>
  </span>
  `,
  styles: [`
    .switch {
      background-color: #f00;
      border: 1px solid #dfdfdf;
      position: relative;
      display: inline-block;
      box-sizing: content-box;
      overflow: visible;
      padding: 0;
      margin: 0;
      cursor: pointer;
      box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
      transition: 0.3s ease-out all;
      -webkit-transition: 0.3s ease-out all;
      font-size: 14px;
      line-height: 22px;
      color: #FFFFFF;
    }
    
    small {
      border-radius: 100%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 2px;
      left: 3px;
      transition: 0.3s ease-out all;
      -webkit-transition: 0.3s ease-out all;
    }
    
    .switch-large {
      width: 66px;
      height: 40px;
      border-radius: 40px;
    }
    
    .switch-large small {
      width: 36px;
      height: 36px;
    }
    
    .switch-medium {
      width: 58px;
      height: 22px;
      border-radius: 22px;
    }
    
    .switch-medium small {
      width: 18px;
      height: 18px;
    }
    
    .switch-small {
      width: 33px;
      height: 20px;
      border-radius: 20px;
    }
    
    .switch-small small {
      width: 16px;
      height: 16px;
    }
    
    .checked {
      background: rgb(100, 189, 99);
      border-color: rgb(100, 189, 99);
    }
    
    .switch-large.checked small {
      left: 26px;
    }
    
    .switch-medium.checked small {
      left: 37px;
    }
    
    .switch-small.checked small {
      left: 13px;
    }
    
    .disabled {
      opacity: .50;
      cursor: not-allowed;
    }
  `],
  providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
})
export class UiSwitchComponent implements ControlValueAccessor {
  private onTouchedCallback = (v: any) => {
  };
  private onChangeCallback = (v: any) => {
  };
  
  private _checked: boolean;
  private _disabled: boolean;
  private _reverse: boolean;
  
  @Input() set checked(v: boolean) {
    this._checked = v !== false;
  }
  
  get checked() {
    return this._checked;
  }
  
  @Input() set disabled(v: boolean) {
    this._disabled = v !== false;
  };
  
  get disabled() {
    return this._disabled;
  }
  
  @Input() set reverse(v: boolean) {
    this._reverse = v !== false;
  };
  
  get reverse() {
    return this._reverse;
  }
  
  @Input() size: string = 'medium';
  @Output() change = new EventEmitter<boolean>();
  @Input() color: string = 'rgb(100, 189, 99)';
  @Input() switchOffColor: string = '';
  @Input() switchColor: string = '#fff';
  @Input() onText: string = 'ON';
  @Input() offText: string = 'OFF';
  defaultBgColor: string = '#f00';
  defaultBoColor: string = '#fff';
  
  getColor(flag) {
    if (flag === 'borderColor') return this.defaultBoColor;
    if (flag === 'switchColor') {
      if (this.reverse) return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
      return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
    }
    if (this.reverse)  return !this.checked ? this.color : this.defaultBgColor;
    return this.checked ? this.color : this.defaultBgColor;
  }
  
  @HostListener('click')
  onToggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.change.emit(this.checked);
    this.onChangeCallback(this.checked);
    this.onTouchedCallback(this.checked);
  }
  
  getMargin() {
    if (this.checked) {
      return '5px';
    } else {
      return '26px';
    }
    
  }
  
  writeValue(obj: any): void {
    if (obj !== this.checked) {
      this.checked = !!obj;
    }
  }
  
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [UiSwitchComponent],
  declarations: [UiSwitchComponent]
})

export class MyUiSwitchModule {
}
