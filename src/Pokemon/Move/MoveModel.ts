import { Type } from "../Type/TypeModel";

export interface Move {
  name: string;
  type: Type;
  uses: number;
  power?: number;
  energy?: number;
  energyGain?: number;
}
