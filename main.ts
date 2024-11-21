bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 150)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Stop, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Back, 150)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Stop, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Left, 150)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Stop, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Right, 150)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Stop, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        step = 5
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        step = 0
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        step = -5
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        step = 0
    }
})
let hue = 0
let temp = 0
let step = 0
bluetooth.startAccelerometerService()
bluetooth.startTemperatureService()
bluetooth.startMagnetometerService()
bluetooth.startLEDService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
let pos = 90
servos.P0.setAngle(pos)
mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Stop, 0)
music.stopAllSounds()
basic.forever(function () {
    if (step != 0) {
        step += pos
        step = Math.max(pos, 0)
        step = Math.min(pos, 180)
        servos.P0.setAngle(pos)
    }
    if (temp != 0) {
        temp += hue
        if (hue < 0) {
            hue += 360
        } else if (hue > 360) {
            hue += 360
        }
    }
    basic.pause(20)
})
