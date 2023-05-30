export const UPDATE_OBJECT = "UPDATE_OBJECT";

export enum Unit {
  None = 0,
  Each = 1,
  M2 = 2,
  WxD = 4,
  DxH = 8,
  WxH = 16,
}
export interface ObjectData {
  id: string;
  enabled: boolean;
  type: string;
  width: number;
  height: number;
  unit: Unit;
  rate: number;
  matchSize: boolean;
  group: string;
  description: string;
  summary: string;
  order: number;
}

export interface UpdateObjectAction {
  type: typeof UPDATE_OBJECT;
  payload: ObjectData;
}

export function updateObject(updatedObject: ObjectData): UpdateObjectAction {
  return {
    type: UPDATE_OBJECT,
    payload: updatedObject,
  };
}
