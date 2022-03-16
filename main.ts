function girar90gradosalaizquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    basic.pause(1100)
    maqueen.motorStop(maqueen.Motors.All)
}
function girar90gradosaladerecha () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    basic.pause(1100)
    maqueen.motorStop(maqueen.Motors.All)
}
let ultimogiro = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
        maqueen.motorStop(maqueen.Motors.All)
        if (ultimogiro == 0) {
            girar90gradosalaizquierda()
            ultimogiro = 1
        } else {
            girar90gradosaladerecha()
            ultimogiro = 0
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
        maqueen.motorStop(maqueen.Motors.All)
        girar90gradosalaizquierda()
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
            maqueen.motorStop(maqueen.Motors.All)
            girar90gradosaladerecha()
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
})
