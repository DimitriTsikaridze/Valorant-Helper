import { ActivatedRoute } from '@angular/router';

export const routeParams = (route: ActivatedRoute, paramName: string) => {
  return route.snapshot.params[paramName];
};
