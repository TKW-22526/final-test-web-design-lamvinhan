function buyProduct(productName) {

    let fullName = prompt("Nhập họ và tên:");

    if (!fullName || fullName.trim() === "") {
        alert("Vui lòng nhập họ tên!");
        return;
    }

    let phone = prompt("Nhập số điện thoại:");

    if (!phone || phone.trim() === "") {
        alert("Vui lòng nhập số điện thoại!");
        return;
    }

    alert(
        "Mua hàng thành công!\n\n" +
        "Sản phẩm: " + productName +
        "\nKhách hàng: " + fullName +
        "\nSố điện thoại: " + phone
    );
}