import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AboutData } from '../../aboutData';

@Component({
  selector: 'app-athird-extra',
  standalone:false,
  templateUrl: './athird-extra.html',
  styleUrl: './athird-extra.css'
})
export class AthirdExtra {
    @Output() open=new EventEmitter()
  
  data:any=AboutData
    constructor(private router:Router){}
goDettails(id:string){
  this.router.navigate([`/aDetail/${id}`])
}
  openPopUp(){
  this.open.emit()
    }
}
