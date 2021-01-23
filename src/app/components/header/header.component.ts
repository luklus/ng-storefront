import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { uiNameSelector } from 'src/app/store/app.selectors'
import { AppStateInterface } from 'src/app/store/app.state'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name$: Observable<string>

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.name$ = this.store.pipe(select(uiNameSelector))
  }
}
