import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PopUpMessagesService {

  constructor() { }

  correctMessage(title:string, message: string){
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'Accept'
    })
  }

  warningMessage(title:string, message: string){
    Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      confirmButtonText: 'Accept'
    })
  }

  errorMessage(title:string, message: string){
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'Accept'
    })
  }
}
