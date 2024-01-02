interface ImgWithId {
  img: string;
  id: string;
}

export const hasImgAndLinkField = (value: unknown): value is ImgWithId => {

  if (typeof value === 'object' && value !== null) {
    return 'img' in value && typeof value.img === 'string' &&
      'id' in value && typeof value.id === 'number'
  }

  return false
}