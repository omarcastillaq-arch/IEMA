import { io } from "socket.io-client";
import { Container } from './Container';
import { SignalCanvas } from './SignalCanvas';

export class Socket {
  public client: any;
  public static sink_mode: boolean;
  public channel_1: number[];
  public channel_2: number[];

  constructor(sink_mode: boolean) {
    Socket.sink_mode = sink_mode;

    this.client = io("https://syxsens.com", {
      withCredentials: false
    });

    this.client.on("connect", () => {
      console.log("Connected to Socket server");
    });

    if (sink_mode) {
      // The "s" means sink, the data comes from the socket server
      this.client.on("sI", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "I"
        })
        canvas.draw_line(data);
      });

      this.client.on("sII", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "II"
        })
        canvas.draw_line(data);
      });

      this.client.on("sIII", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "III"
        })
        canvas.draw_line(data);
      });

      this.client.on("saVR", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "aVR"
        })
        canvas.draw_line(data);
      });

      this.client.on("saVL", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "aVL"
        })
        canvas.draw_line(data);
      });

      this.client.on("saVF", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "aVF"
        })
        canvas.draw_line(data);
      });

      this.client.on("sV1", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "V1"
        })
        canvas.draw_line(data);
      });

      this.client.on("sV2", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "V2"
        })
        canvas.draw_line(data);
      });

      this.client.on("sV3", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "V3"
        })
        canvas.draw_line(data);
      });

      this.client.on("sV4", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "V4"
        })
        canvas.draw_line(data);
      });

      this.client.on("sV5", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "V5"
        })
        canvas.draw_line(data);
      });

      this.client.on("sV6", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "V6"
        })
        canvas.draw_line(data);
      });

      this.client.on("sIILarge", (data: any) => {
        let canvas = Container.canvases.find(canvas => {
          return canvas.id === "II Large"
        })
        canvas.draw_line(data);
      });

      this.client.on("8171", (data: any) => {
        let { data_array, canvas }: { data_array: number[]; canvas: SignalCanvas; } = convert(data);
        this.channel_1 = data_array;
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "I"
        });
        canvas.draw_line(data_array);
      });

      this.client.on("8172", (data: any) => {
        let { data_array, canvas }: { data_array: number[]; canvas: SignalCanvas; } = convert(data);
        this.channel_2 = data_array;
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "II"
        });
        canvas.draw_line(data_array);

        // Calculate Lead III
        for (let i = 0; i < data_array.length; i++) {
          data_array[i] = this.channel_2[i] - this.channel_1[i]
        }
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "III"
        })
        canvas.draw_line(data_array);

        //Calculate Lead aVR
        for (let i = 0; i < data_array.length; i++) {
          data_array[i] = -(this.channel_1[i] + this.channel_2[i]) / 2;
        }
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "aVR"
        })
        canvas.draw_line(data_array);

        //Calculate Lead aVL
        for (let i = 0; i < data_array.length; i++) {
          data_array[i] = this.channel_1[i] - (this.channel_2[i]) / 2;
        }
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "aVL"
        })
        canvas.draw_line(data_array);

        //Calculate Lead aVF
        for (let i = 0; i < data_array.length; i++) {
          data_array[i] = this.channel_2[i] - (this.channel_1[i]) / 2;
        }
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "aVF"
        })
        canvas.draw_line(data_array);

        //Calculate Lead II Large
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "II Large"
        })
        canvas.draw_line(this.channel_2);
      });

      this.client.on("8173", (data: any) => {
        let { data_array, canvas }: { data_array: number[]; canvas: SignalCanvas; } = convert(data);
        this.channel_1 = data_array;
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V1"
        });
        canvas.draw_line(data_array);
      });

      this.client.on("8174", (data: any) => {
        let { data_array, canvas }: { data_array: number[]; canvas: SignalCanvas; } = convert(data);
        this.channel_1 = data_array;
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V2"
        });
        canvas.draw_line(data_array);
      });

      this.client.on("8175", (data: any) => {
        let { data_array, canvas }: { data_array: number[]; canvas: SignalCanvas; } = convert(data);
        this.channel_1 = data_array;
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V3"
        });
        canvas.draw_line(data_array);
      });

      this.client.on("8176", (data: any) => {
        let { data_array, canvas }: { data_array: number[]; canvas: SignalCanvas; } = convert(data);
        this.channel_1 = data_array;
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V4"
        });
        canvas.draw_line(data_array);
      });

      this.client.on("8177", (data: any) => {
        let { data_array, canvas }: { data_array: number[]; canvas: SignalCanvas; } = convert(data);
        this.channel_1 = data_array;
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V5"
        });
        canvas.draw_line(data_array);
      });

      this.client.on("8178", (data: any) => {
        let { data_array, canvas }: { data_array: number[]; canvas: SignalCanvas; } = convert(data);
        this.channel_1 = data_array;
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V6"
        });
        canvas.draw_line(data_array);
      });
    }

    // Convert from 24 bit two's complement to double-precision 64-bit (IEEE 754)
    function convert(data: any) {
      let data_view: DataView = new DataView(data); //DataView(84)
      let data_array: number[] = [];
      let canvas: SignalCanvas;
      for (let index = 0; index < data_view.byteLength / 3; index++) {
        data_array[index] = (data_view.getUint8(index * 3) << 24 | data_view.getUint8(index * 3 + 1) << 16 | data_view.getUint8(index * 3 + 2) << 8) >> 8;
        data_array[index] = -data_array[index];
      }
      return { data_array, canvas };
    }
  }
}
