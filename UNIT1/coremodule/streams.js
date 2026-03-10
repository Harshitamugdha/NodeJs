var fs=require('fs')
// var data=''
// var reader=fs.createReadStream('data.txt')
// reader.setEncoding('utf-8')

// reader.on('data',(chunk)=>{
//     data+=chunk
// })

// reader.on('end',()=>{
//     console.log('finished reading')
//     console.log(data)
// })
// reader.on('error',()=>{
//     console.log("Error")
// })



//WRITABLE STREAMS

// var data="This is a data to write in the file"
// var writer=fs.createWriteStream('demo.txt')

// writer.write(data,()=>{
//     console.log('finished writing')
// })
// writer.end()

// writer.on('finish',()=>{
//     console.log("flushed the memory")
// })
// writer.on("error",()=>{
//     console.log("err")
// })


// //Duplex streams -- question nhi aayega
// //both readable and writable stream

// var data="This is a data to write in the file"
// var writer=fs.createWriteStream('demo.txt')

// writer.write(data,()=>{
//     console.log('finished writing')
// })
// writer.end()

// writer.on('finish',()=>{
//     console.log("flushed the memory")
// })
// writer.on("error",()=>{
//     console.log("err")
// })
// var data=''
// var reader=fs.createReadStream('demo.txt')
// reader.setEncoding('utf-8')

// reader.on('data',(chunk)=>{
//     data+=chunk
// })

// reader.on('end',()=>{
//     console.log('finished reading')
//     console.log(data)
// })
// reader.on('error',()=>{
//     console.log("Error")
// })


//transfering the dara or copyng the data from one file to another file using pipe method

// var reader=fs.createReadStream('demo.txt')
// var writer=fs.createWriteStream('demo1.txt')
// reader.pipe(writer)

//The below event is optional, code ko bara banana hai to likh lena.
// //This will only listen, console.log wont write
// reader.on('pipe',()=>{
//     console.log("copying data from demo.txt to demo1.txt")
// })


//UNPIPING THE STREAM
// var reader=fs.createReadStream('demo.txt')
// var writer=fs.createWriteStream('demo2.txt')
// reader.unpipe(writer)

//The below event is optional, code ko bara banana hai to likh lena.
//This will only listen, console.log wont write
// reader.on('unpipe',()=>{
//     console.log("no data will be transferred")
// })
//using this will print the message in console but data will not be transferred from demo.txt to demo2.txt
// reader.emit('unpipe')

    
//zip and unzip files using zlib module = transformable stream
// var zlib=require('zlib')
// var reader=fs.createReadStream('demo.txt')
// var writer=fs.createWriteStream('demo.txt.gz')
// var gzip=zlib.createGzip()
// reader.pipe(gzip).pipe(writer)

//FOR DECOMPRESSING THE FILE
// var zlib=require('zlib')
// var reader=fs.createReadStream('demo.txt.gz')
// var writer=fs.createWriteStream('demo_decompressed.txt')
// var gunzip=zlib.createGunzip()
// reader.pipe(gunzip).pipe(writer)

//compressing using brotli
// var zlib=require('zlib')
// var reader=fs.createReadStream('data.txt')
// var writer=fs.createWriteStream('data.txt.br')
// var gzip=zlib.createBrotliCompress()
// reader.pipe(gzip).pipe(writer)

//decompressing using brotli
// var zlib=require('zlib')
// var reader=fs.createReadStream('data.txt.br')
// var writer=fs.createWriteStream('data_decompressed.txt')
// var gunzip=zlib.createBrotliDecompress()
// reader.pipe(gunzip).pipe(writer)

//compressing using deflate
// var zlib=require('zlib')
// var reader=fs.createReadStream('data.txt')
// var writer=fs.createWriteStream('data.txt.deflate')
// var deflate=zlib.createDeflate()
// reader.pipe(deflate).pipe(writer)

//decompressing using deflate
var zlib=require('zlib')
var reader=fs.createReadStream('data.txt.deflate')
var writer=fs.createWriteStream('data2_decompressed.txt')
var inflate=zlib.createInflate()
reader.pipe(inflate).pipe(writer)