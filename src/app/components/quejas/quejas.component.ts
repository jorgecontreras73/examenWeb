import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {
  //formulario:FormGroup;
  //nombre:any;

  constructor(/*public fb:FormBuilder*/) { 
    /*this.formulario=this.fb.group({
      nombre:['',Validators.required]
      
    });
    this.nombre=this.formulario.controls["nombre"];
    */
  }

  ngOnInit(): void {
    //this.nombre=this.formulario.get("nombre") as FormGroup;
  }
  
  enviar(){
    //console.log(this.nombre.value);
    
  }
  
}
