//   Computer
//  Pc / Laptop
//  Pc : Led/Ips
//  Laptop : Led/Ips

enum ComputerType {
  LAPTOP = "laptop",
  PC = "pc",
}

abstract class Computer {
  protected _type: ComputerType;
  protected _monitor: string;

  constructor(type: ComputerType, monitor: string) {
    this._type = type;
    this._monitor = monitor;
  }

  abstract getModel(): string;
}

class PC extends Computer {
  constructor(monitor: string) {
    super(ComputerType.PC, monitor);
  }
  getModel(): string {
    return `${this._type} with ${this._monitor}`;
  }
}

class LAPTOP extends Computer {
  constructor(monitor: string) {
    super(ComputerType.LAPTOP, monitor);
  }

  getModel(): string {
    return `${this._type} with ${this._monitor}`;
  }
}

enum MonitorType {
  IPS = "ips",
  LED = "led",
}

class LEDComputerFactory {
  static buildComputer(type: ComputerType, monitor: MonitorType) {
    switch (type) {
      case ComputerType.PC:
        return new PC(MonitorType.LED);
      case ComputerType.LAPTOP:
        return new LAPTOP(MonitorType.LED);
      default:
        throw new Error("type not found");
    }
  }
}

class IPSComputerFactory {
  static buildComputer(type: ComputerType, monitor: MonitorType) {
    switch (type) {
      case ComputerType.PC:
        return new PC(MonitorType.IPS);
      case ComputerType.LAPTOP:
        return new LAPTOP(MonitorType.IPS);
      default:
        throw new Error("type not found");
    }
  }
}

class ComputerFactory {
  static buildComputer(
    computerType: ComputerType,
    monitorType: MonitorType
  ): Computer {
    switch (monitorType) {
      case MonitorType.LED:
        return LEDComputerFactory.buildComputer(computerType, monitorType);
      case MonitorType.IPS:
        return IPSComputerFactory.buildComputer(computerType, monitorType);
      default:
        throw new Error("monitor not found");
    }
  }
}

const pcled = ComputerFactory.buildComputer(ComputerType.PC, MonitorType.LED);
const laptopips = ComputerFactory.buildComputer(
  ComputerType.LAPTOP,
  MonitorType.IPS
);

console.log(laptopips);
console.log(laptopips.getModel());

console.log(pcled);
console.log(pcled.getModel());
