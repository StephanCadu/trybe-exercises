import { IFlyingVehicle, IVehicle } from "./interfaces";

export default class FuturisticCar implements IVehicle, IFlyingVehicle {
  drive(): void {
    console.log('Driving a futuristic car');
  }

  fly(): void {
    console.log('Flying a futuristic car');
  }
}