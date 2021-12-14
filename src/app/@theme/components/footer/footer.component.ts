import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      版權為牛頓游泳池 ©2021 <b><a href="" target="_blank"> Created By Bruno</a></b>
    </span>
  `,
})
export class FooterComponent {
}
