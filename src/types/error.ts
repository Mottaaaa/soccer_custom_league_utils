export interface IErrorCase {
  premise: (params: string[]) => boolean
  error: () => void
}
