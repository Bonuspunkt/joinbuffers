/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <bonuspunkt@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.
 * ----------------------------------------------------------------------------
 */

module.exports = function(bufferStore) {
    var length = bufferStore.reduce(function(previous, current) { 
        return previous + current.length; 
    }, 0);

    var data = new Buffer(length);
    var startPos = 0;
    bufferStore.forEach(function(buffer){
        buffer.copy(data, startPos);
        startPos += buffer.length;
    });
    return data;
};