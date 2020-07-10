// so the typescript compiler doesn't complain about the global config object
export class Constants{
    public static get baseURL(): string {
          return 'http://localhost:8080';
       }
}
