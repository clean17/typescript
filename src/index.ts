// import { init, exit } from "./myPackage";
// console.log(exit(120000));

import crypto from "crypto"; 

interface BlockShape {
    hash: string,
    prevHash: string,
    height: number,
    data: string
}

class Block implements BlockShape {
    // hash 값은 prevHash, height, data 를 종합해서 만듦
    public hash: string
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ){
        this.hash = Block.calculateHash(prevHash, height, data)
    }
    static calculateHash(prevHash: string, height: number, data: string){
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("SHA256").update(toHash).digest("hex");
    }
}

class BlockChain {
    private blocks: Block[]
    constructor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if( this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length -1].hash
    }
    public addBlock(data: string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length+1, data)
        this.blocks.push(newBlock)
    }
    public getBlock(){
        // return this.blocks
        return [...this.blocks] // new
    }
}

const BC = new BlockChain()
BC.addBlock("First");
BC.addBlock("Second");
BC.addBlock("Third");
BC.getBlock().push(new Block("xxx",  666,  "fxck")) // 스프레드 연산자를 통해 새로운 배열을 리턴하므로 getBlock 으로 가져온 배열에 추가해도 addBlock 으로 추가하지 않으면 적용되지 않는다.
console.log(BC.getBlock())
