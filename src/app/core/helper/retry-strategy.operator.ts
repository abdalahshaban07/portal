import { Observable, mergeMap, throwError, timer } from 'rxjs';

export const genericRetryStrategy =
  ({
    maxRetryAttempts = 1,
    scalingDuration = 500,
    excludedStatusCodes = [],
  }: {
    maxRetryAttempts?: number;
    scalingDuration?: number;
    excludedStatusCodes?: number[];
  } = {}) =>
  (attempts: Observable<any>) => {
    return attempts.pipe(
      mergeMap((error, i) => {
        const retryAttempt = i + 1;
        if (
          retryAttempt > maxRetryAttempts ||
          excludedStatusCodes.find((e) => e === error.status)
        ) {
          return throwError(() => new Error(error));
        }
        return timer(retryAttempt * scalingDuration);
      })
    );
  };
