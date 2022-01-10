import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'mad-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
})
export class LifecycleHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('constructor');
    //Primeiro a ser chamado
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }
  //Lifecycle chamado antes do ngOnInit e responde quando Angular define ou redefine as propriedades de entrada vinculadas a dados.

  ngOnInit() {
    console.log('ngOnInit');
  }
  //Lifecycle ligado após o ngOnChanges() e após as propriedades iniciais serem verificadas

  ngDoCheck() {
    console.log('ngDoCheck');
  }
  //Lifecycle chamado imediatamente após ngOnChanges()em cada execução de detecção de alteração e imediatamente após ngOnInit()na primeira execução.

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  //Lifecycle que responde depois que o Angular projeta conteúdo externo na visualização do componente e ligado uma vez após o primeiro ngDoCheck().

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  //Lifecycle que responde depois que o Angular verificar o conteúdo projetado na diretiva ou componente. Chamado depois ngAfterContentInit()e a cada subseqüente ngDoCheck().

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  //Lifecycle ligado uma vez após o primeiro ngAfterContentChecked().

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  //Lifecycle que responde após verificação do componente e visualizações filha ou que contenham diretivas. Chamado após o ngAfterViewInit()e todos os subseqüentes ngAfterContentChecked().

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  //Lifecycle responsável pela limpeza antes de Angular destruir a diretiva ou o componente. Cancelar a assinatura de Observables e desanexar manipuladores de eventos para evitar vazamentos de memória. Chamado imediatamente antes de Angular destruir a diretiva ou componente.
}
