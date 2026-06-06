function buyProduct(name) {
    let fullName = prompt("Nhập họ tên:");
    let phone = prompt("Nhập số điện thoại:");

    if (!fullName || !phone) {
        alert("Thiếu thông tin!");
        return;
    }

    alert(
        "Mua hàng thành công!\n" +
        "Sản phẩm: " + name +
        "\nTên: " + fullName +
        "\nSĐT: " + phone
    );
}