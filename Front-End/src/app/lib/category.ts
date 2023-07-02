import { createSlug } from './slug_params';
export function CateCheckName(arr: any, kyw: string) {
  for (let i = 0; i < arr.length; i++) {
    if (createSlug(arr[i].name) == createSlug(kyw)) {
      console.log('Trùng cmnr');
      return false;
    }
  }
  return true;
}
