let arr = [100, 2, 5, 556, 12, 34, 113]
/**
 * 1. 冒泡
 * 2. 选择
 * 3. 插入
 * 4. 快排
 */
// 取最小的放前面 或者 最大的放后面
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         const item1 = arr[j];
//         if (item1 < arr[i]) {
//             let temp = arr[i]
//             arr[i] = item1
//             arr[j] = temp
//         }
//     }
// }
// 选择最大的放后面
// for (let i = 0; i < arr.length - 1; i++) {
//     let posi = 0;
//     for (let j = 1; j < arr.length - i; j++) {
//         if (arr[j] > arr[posi]) {
//             posi = j
//         }
//     }
//     temp = arr[posi];
//     arr[posi] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
// }
// 维护两个数组，一个最小的在前面
// for (let i = 1; i < arr.length; i++) {
//     const item = arr[i];
//     let j = i - 1
//     let k = -1
//     while (j >= 0) {
//         const item1 = arr[j];
//         if (item1 > item) {
//             k = j
//         }
//         j--
//     }
//     if (k != -1) {
//         let temp = item
//         arr[i] = arr[k]
//         arr[k] = temp
//     }
// }
// 取一个数组的值，分离出大小两个数组，在进行递归合并
// function t(arr) {
//     if (arr.length <= 1) return arr
//     let middle = Math.floor(arr.length / 2)
//     let middleItem = arr.splice(middle, 1)[0]
//     let left = [],
//         right = [];
//     for (let index = 0; index < arr.length; index++) {
//         const item = arr[index];
//         if (item < middleItem) {
//             left.push(item)
//         } else {
//             right.push(item)
//         }
//     }
//     return t(left).concat([middleItem, ...t(right)])
// }
console.log(arr);