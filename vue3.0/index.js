class Vue {
    constructor(options) {
        // 应用
    }
    // 全局api
    createApp() {
        console.log(123);
    }
}

let {
    createApp
} = Vue
let vm = new Vue()

console.log(createApp);
console.log(vm.createApp);

