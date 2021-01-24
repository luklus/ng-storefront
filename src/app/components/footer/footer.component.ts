import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { uiIDSelector } from 'src/app/store/app.selectors'
import { AppStateInterface } from 'src/app/store/app.state'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  id$: Observable<string>

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.id$ = this.store.pipe(select(uiIDSelector))
  }
}
