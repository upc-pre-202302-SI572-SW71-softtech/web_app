import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-metrics-device',
  templateUrl: './metrics-device.component.html',
  styleUrls: ['./metrics-device.component.css']
})
export class MetricsDeviceComponent implements OnDestroy {
  constructor(private http: HttpClient) {}

  temperatureDataPoints: any[] = [];
  humidityDataPoints: any[] = [];
  heartRateDataPoints: any[] = [];
  timeout: any = null;
  xValue: number = 1;
  yValue: number = 10;
  newDataCount: number = 10;
  temperatureChart: any;
  humidityChart: any;
  heartRateChart: any;

  temperatureChartOptions = {
    theme: "light2",
    title: {
      text: "Temperature"
    },
    data: [{
      type: "line",
      dataPoints: this.temperatureDataPoints
    }]
  };

  humidityChartOptions = {
    theme: "light2",
    title: {
      text: "Humidity"
    },
    data: [{
      type: "line",
      dataPoints: this.humidityDataPoints
    }]
  };

  heartRateChartOptions = {
    theme: "light2",
    title: {
      text: "Heart Rate"
    },
    data: [{
      type: "line",
      dataPoints: this.heartRateDataPoints
    }]
  };

  getTemperatureChartInstance(chart: object) {
    this.temperatureChart = chart;
    this.updateData('temperature');
  }

  getHumidityChartInstance(chart: object) {
    this.humidityChart = chart;
    this.updateData('humidity');
  }

  getHeartRateChartInstance(chart: object) {
    this.heartRateChart = chart;
    this.updateData('heartRate');
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  updateData = (chartType: string) => {
    const chartOptions = this.getChartOptions(chartType);
    this.http.get(`https://canvasjs.com/services/data/datapoints.php?xstart=${this.xValue}&ystart=${this.yValue}&length=${this.newDataCount}type=json`, { responseType: 'json' })
      .subscribe((data: any) => this.addData(chartType, data, chartOptions));
  }

  addData = (chartType: string, data: any, chartOptions: any) => {
    const dataPoints = this.getDataPoints(chartType);
    if (this.newDataCount !== 1) {
      data.forEach((val: any[]) => {
        dataPoints.push({ x: val[0], y: parseInt(val[1]) });
        this.xValue++;
        this.yValue = parseInt(val[1]);
      });
    } else {
      dataPoints.push({ x: data[0][0], y: parseInt(data[0][1]) });
      this.xValue++;
      this.yValue = parseInt(data[0][1]);
    }
    
    // Render the specific chart instance
    switch (chartType) {
      case 'temperature':
        this.temperatureChart.render();
        break;
      case 'humidity':
        this.humidityChart.render();
        break;
      case 'heartRate':
        this.heartRateChart.render();
        break;
      default:
        throw new Error(`Invalid chart type: ${chartType}`);
    }
  
    this.timeout = setTimeout(() => this.updateData(chartType), 1000);
  }
  

  private getChartOptions(chartType: string): any {
    switch (chartType) {
      case 'temperature':
        return this.temperatureChartOptions;
      case 'humidity':
        return this.humidityChartOptions;
      case 'heartRate':
        return this.heartRateChartOptions;
      default:
        throw new Error(`Invalid chart type: ${chartType}`);
    }
  }

  private getDataPoints(chartType: string): any[] {
    switch (chartType) {
      case 'temperature':
        return this.temperatureDataPoints;
      case 'humidity':
        return this.humidityDataPoints;
      case 'heartRate':
        return this.heartRateDataPoints;
      default:
        throw new Error(`Invalid chart type: ${chartType}`);
    }
  }
}
