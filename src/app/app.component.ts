import { Component } from '@angular/core';
import { WebapiService } from './shared/webapi.service';
import { Coin } from './shared/coin.model';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coinForm: FormGroup;


  constructor(public service:WebapiService, private fb: FormBuilder){}


  ngOnInit() {
    this.initForm();
  }


  initForm(): void{
    this.coinForm = this.fb.group({
      sort: 'price_usd',
      lines: '5'
    });
  }


  onSubmit(): void{
    this.service.getSortedCoins(this.coinForm.controls.sort.value, this.coinForm.controls.lines.value).subscribe(data=> this.service.coinList = data);
  }


  selectSort(event): void{
    this.coinForm.patchValue({
      sort: event.target.value
    });
  }
} 
