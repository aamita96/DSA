/**
 * Input arr = [23, 4, 0, 9, 0, 8, 0, 56, 0, 77, 45, 0];
 * 
 * Output should be -
 * [0, 0, 0, 0, 0, 23, 4, 9, 8, 56, 77, 45]
 */

// function shiftTheZeros(arr) {
//     const zeros = arr.filter(x => x !== 0);
//     const nonZeros = arr.filter(x => x === 0);

//     console.log(nonZeros.concat(zeros));
// }

function shiftTheZeros(arr) {
    let writeIndex = arr.length - 1;

    // Move non-zero elements to the end
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0) {
            arr[writeIndex] = arr[i];
            writeIndex--;
        }
    }

    // Fill remaining positions with zero
    while (writeIndex >= 0) {
        arr[writeIndex] = 0;
        writeIndex--;
    }

    return arr;
}


let arr = [23, 4, 0, 9, 0, 8, 0, 56, 0, 77, 45, 0];
console.log(shiftTheZeros(arr));