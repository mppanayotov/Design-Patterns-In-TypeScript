import { Chair } from "./chair"

export class MediumChair implements Chair {

    height: number
    width: number
    depth: number

    constructor() {
        this.height = 60
        this.width = 60
        this.depth = 60
    }

    public getDimensions(): dimension {
        return {
            "width": this.width,
            "depth": this.depth,
            "height": this.height
        }
    }
}