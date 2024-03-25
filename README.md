# Angular
## Criar um novo projeto

Para criar um novo projeto 

```
ng new nome-do-seu-projeto --style=less
```

Para rodar 

```
ng serve
```

ou 

```
npm start
```

## Criar um novo componente

Para criar um novo componente

```
ng g c novo-componente
```

## Criar um nova diretiva

Para criar um nova diretiva

```
ng generate directive nome-da-sua-diretiva
```

## Criar um novo serviço

Para criar um nova diretiva

```
ng generate service nome-do-seu-servico
```

## Criar um novo interface

Para criar um nova interface

```
ng g i nova-interface
```

## Criar um novo modulo

Para criar um nova interface

```
ng g m novo-modulo
```

## Criar um novo modulo 

Para criar um nova interface

```
ng g m novo-modulo-routing
```

Depois no arquivo

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // Aqui você pode adicionar mais rotas principais conforme necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Não esquecer do 

```
<router-outlet></router-outlet>
```

e se o modulo routingo no filho trocar o ***forRoo***t para ***forChild***

## Criar um guarda de rota

Para criar um nova interface

```
ng s guard novo-guarda-rota
```

## Criar um pipe

Para criar um nova interface

```
Ng g p novo-pipe;
```

## Instalar ng zorro

Instalar a lib

```
npm install ng-zorro-antd@17.2.3
```

Configurar

```
ng add ng-zorro-antd
```

