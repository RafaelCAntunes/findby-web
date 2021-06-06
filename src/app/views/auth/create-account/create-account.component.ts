import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  
  account={
    codSegmento: '', 
    nome: '',
    email: '',
    login:'',
    cpfCgc: null as number | null,
    tipoUsuario:'V',
    tipoPessoa:'J',
    senha:'',
    indUserAtivo:'N'
 
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }


  async onSubmit(){
    try {
      
      const result = await this.accountService.createAccount(this.account);
      alert('Usuário cadastrado com sucesso');
      this.router.navigate(['login']);
    } catch (error) {
      console.error(error);
    }
  }
}

