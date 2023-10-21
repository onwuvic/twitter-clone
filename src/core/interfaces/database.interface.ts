export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  type?: string;
  urlDatabase?: string;
}

export interface EnvironmentVariables {
  PORT: number;
  TIMEOUT: string;
}
