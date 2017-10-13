// make an array in the form of an object

class Ray {
    constructor() {

    }

    _size() {
        let size = 0, key
        for (key in this) {
            if (this.hasOwnProperty(key)) size++
        }
        return size
    }

    push(value) {
        const size = this._size()
        const index = (size > 0) ? size - 1 : size
        const dexStr = index.toString()
        this[dexStr] = value
        this.length = index + 1
    }

    _stringPart(value, i) {
        console.log(this.length, i)
        let str
        if (this.length === i) {
            str = `${value} `
        } else {
            str = `${value}, `
        }
        console.log(str)
        return str
    }

    _itterateThis() {
        let strValue = ""
        let size = this._size()
        for (let i in this) {
            strValue += this._stringPart(this[i], size)
        }
        return strValue
    }

    print() {
        console.log(this._itterateThis())
    }
}

class FauxRay extends Ray {

    constructor() {
        super()
    }

}

let myArr = new FauxRay()
myArr.push("hello")
myArr.push("fuck i hope this works")
myArr.print()
myArr._stringPart("hello")