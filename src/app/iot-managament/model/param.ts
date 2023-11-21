export class Param {
  id: number;
  deviceId: number;
  humidity: string;
  temperature: string;
  localization: { latitude: number, longitude: number };
  heartRate: string;
  statusDevice: string;

  constructor(id: number, deviceId: number, humidity: string, temperature: string, localization: { latitude: number, longitude: number }, heartRate: string, statusDevice: string) {
    this.id = id;
    this.deviceId = deviceId;
    this.humidity = humidity;
    this.temperature = temperature;
    this.localization = localization;
    this.heartRate = heartRate;
    this.statusDevice = statusDevice;
  }
}
