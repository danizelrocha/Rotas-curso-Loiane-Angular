import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.scss']
})
export class CursoDetalhesComponent implements OnInit {

  id: number | undefined;
  inscricao: Subscription | undefined;
  curso: any;
  CursosService: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService:CursosService
    ){
  /*  console. log(this.route);
   this.id = this.route.snapshot.params['id']; */
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.CursosService.getCurso(this.id);

        if(this.curso == null){
           this.router.navigate(['/naoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
