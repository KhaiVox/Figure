// Click đổi ảnh
function myFunction(smallImg) {
    var fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;
    console.log(smallImg);
}


// Hàm tăng giảm số lượng sản phẩm (giá cao nên không cho nhập thủ công)
let count = 0;

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".i-btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("quantity-decrease")) {
            count--;
            if (count <= 0) {
                count = 1;
            }
        } else if (styles.contains('quantity-increase')) {
            count++;
            if (count > 5) {
                count--;
                alert("Bạn chỉ có thể mua tối đa 5 sản phẩm");
            }
        }
        value.textContent = count;
    })
});

// Ẩn hiện mật khẩu
const input = document.querySelector(".input");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");

eyeOpen.addEventListener("click", function() {
    eyeOpen.classList.add("hidden");
    eyeClose.classList.remove("hidden");
    input.setAttribute("type", "password");
});

eyeClose.addEventListener("click", function() {
    eyeOpen.classList.remove("hidden");
    eyeClose.classList.add("hidden");
    input.setAttribute("type", "text");
});



// Chuyển đổi màu nền khi nhận click

// const nav1 = document.querySelector(".nav_1")
// Có thể phải làm script trong cùng 1 file thì mới ăn