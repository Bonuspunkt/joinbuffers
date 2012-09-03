#joinBuffers
takes an array of small buffers and copies them into a single big one

## example

    var joinBuffers = require('joinBuffers')
    var smallBuffers = [new Buffer('1'), new Buffer('2')];
    var bigBuffer = joinBuffers(smallBuffers);
    console.log(bigBuffer.toString('utf8')); // prints 12

## licence
    * ----------------------------------------------------------------------------
    * "THE BEER-WARE LICENSE" (Revision 42):
    * <bonuspunkt@gmail.com> wrote this file. As long as you retain this notice you
    * can do whatever you want with this stuff. If we meet some day, and you think
    * this stuff is worth it, you can buy me a beer in return.
    * ----------------------------------------------------------------------------
