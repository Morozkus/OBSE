interface ImgWithId {
  img: string;
  id: number;
  title?: string;
}

interface IField<T> {
  field: keyof T;
  type: 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined';
}

export const hasImgAndLinkField = (value: unknown): value is ImgWithId => {

  if (typeof value === 'object' && value !== null) {
    return 'img' in value && typeof value.img === 'string' &&
      'id' in value && typeof value.id === 'number'
  }

  return false
}

export const hasIdAndTitleField = (value: unknown): value is ImgWithId => {

  if (typeof value === 'object' && value !== null) {
    return 'title' in value && typeof value.title === 'string' &&
      'id' in value && typeof value.id === 'number'
  }

  return false
}

export const hasVariablesFields = <T extends object>(value: unknown, ...fields: IField<T>[]): value is T =>
  typeof value !== 'object' || value === null ? false : fields.every(({ field, type }) => field in value && typeof value[field] === type)

