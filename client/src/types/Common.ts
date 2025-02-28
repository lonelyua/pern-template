export interface Values {
  [key: string]: Record<string, unknown>;
}

export type Nullable<T> = T | null;

export type GenericObject = { [key: string]: unknown };
