import { Component, OnInit } from '@angular/core';
import { GridColumnStyleBuilder } from '@angular/flex-layout/grid/typings/column/column';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  login = {
    usuario:'',
    senha:''
  };

  constructor(
    private accountService:AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
    const result = await this.accountService.login(this.login);
    var user = JSON.parse(window.localStorage.getItem('user') as string);
    
    
      if(result){
        if(user.tipoUsuario === 'A'){
          this.router.navigate(['/admin']);
          
        }else if(user.tipoUsuario==='V'){
          this.router.navigate(['']);
        }
    //volta pra rota vazia porém agora tem autenticação
    
      }else{
        alert('usuário ou senha inválidos');
      }
      
    } catch(error){
      console.error(error);
    }
  }

}
