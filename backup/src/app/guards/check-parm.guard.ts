import { CanActivateFn, Router } from '@angular/router';

export const checkParmGuard: CanActivateFn = (route, state) => {

  const router: Router = new Router();
  
      // Verifica se a rota está passando o parâmetro "meuParametro"
      if (route.params && route.params['id'] === '20') {
        return true; // Permite a ativação da rota
      } 

      router.navigate(['/not-found']);

  return false;
};
