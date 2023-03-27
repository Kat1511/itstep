document.querySelector("input").onchange = function () {

    let nums = this.value;
    let div = document.querySelector("div");
    let result = nums.split(" ").map(function (item){
        return item
    }.reduce(function (sum, item) {
        return sum + item;
    })

    div.innerHTML = result
    
}