let canvas = document.getElementById("displayCanvas");
let display = new Display(canvas);
let cursor = new Cursor(display);

let controller = new BleController();
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("connect").addEventListener("click", () => {
        controller.connect()
            .then(() => {
                console.log("Connected to BLE controller");
                controller.addEventListener('touch', (event) => {
                    switch (event.touchedKey) {
                        case 'R': cursor.move_right(); break;
                        case 'L': cursor.move_left(); break;
                        case 'U': cursor.move_up(); break;
                        case 'D': cursor.move_down(); break;
                        case 'B': cursor.colorize({ r: 0, g: 0, b: 100 }); break;
                        case 'A': cursor.colorize({ r: 0, g: 100, b: 0 }); break;
                        case 'X': cursor.colorize({ r: 100, g: 0, b: 0 }); break;
                    }
                });
            }).catch((error) => {
                console.log(error);
            });
    });
});