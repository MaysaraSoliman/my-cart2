let plus = document.querySelectorAll("#myCart .product .col .plus");
let minus = document.querySelectorAll("#myCart .product .col .minus");

let increamentAndDecreament = () => {
    plus.forEach((plus) => {
        plus.addEventListener("click", function () {
            let amount = parseInt(this.closest(".amount-handler").querySelector(".amount").textContent);
            if (amount < 9) {
                this.closest(".amount-handler").querySelector(".amount").textContent = `${amount + 1}`
            }
        })
    })

    minus.forEach((minus) => {
        minus.addEventListener("click", function () {
            let amount = parseInt(this.closest(".amount-handler").querySelector(".amount").textContent);
            if (1 < amount) {
                this.closest(".amount-handler").querySelector(".amount").textContent = `${amount - 1}`
            }
        })
    })
}

increamentAndDecreament()
