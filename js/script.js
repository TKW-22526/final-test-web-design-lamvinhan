document.addEventListener("DOMContentLoaded", function () {

    const phones = {
        "iPhone 15 Pro Max":
            "Giá: 28.990.000 VNĐ\nMàn hình: 6.7 inch\nChip: A17 Pro\nCamera: 48MP\nBảo hành: 12 tháng",

        "iPhone 15":
            "Giá: 21.990.000 VNĐ\nMàn hình: 6.1 inch\nChip: A16 Bionic\nCamera: 48MP\nBảo hành: 12 tháng",

        "iPhone 14 Pro Max":
            "Giá: 20.990.000 VNĐ\nMàn hình: 6.7 inch\nChip: A16 Bionic\nCamera: 48MP\nBảo hành: 12 tháng",

        "iPhone 13":
            "Giá: 12.990.000 VNĐ\nMàn hình: 6.1 inch\nChip: A15 Bionic\nCamera: 12MP\nBảo hành: 12 tháng",

        "Samsung Galaxy S24 Ultra":
            "Giá: 25.990.000 VNĐ\nMàn hình: 6.8 inch\nChip: Snapdragon 8 Gen 3\nCamera: 200MP\nBảo hành: 12 tháng",

        "Samsung Galaxy S24 Plus":
            "Giá: 19.990.000 VNĐ\nMàn hình: 6.7 inch\nChip: Exynos 2400\nCamera: 50MP\nBảo hành: 12 tháng",

        "Samsung Galaxy S24":
            "Giá: 17.990.000 VNĐ\nMàn hình: 6.2 inch\nChip: Exynos 2400\nCamera: 50MP\nBảo hành: 12 tháng",

        "Samsung Galaxy A56":
            "Giá: 9.490.000 VNĐ\nMàn hình: 6.7 inch\nRAM: 8GB\nCamera: 50MP\nBảo hành: 12 tháng",

        "Xiaomi 14":
            "Giá: 15.990.000 VNĐ\nMàn hình: 6.36 inch\nChip: Snapdragon 8 Gen 3\nCamera Leica 50MP\nBảo hành: 12 tháng",

        "Redmi Note 14 Pro":
            "Giá: 8.990.000 VNĐ\nMàn hình: 6.67 inch\nRAM: 8GB\nCamera: 200MP\nBảo hành: 12 tháng",

        "OPPO Reno 13":
            "Giá: 10.990.000 VNĐ\nMàn hình: AMOLED 120Hz\nRAM: 12GB\nCamera: 50MP\nBảo hành: 12 tháng",

        "Vivo V50":
            "Giá: 9.990.000 VNĐ\nMàn hình: AMOLED\nRAM: 8GB\nCamera: 50MP\nBảo hành: 12 tháng"
    };

    document.querySelectorAll(".product-card button, .product-item button")
        .forEach(button => {

            button.addEventListener("click", function () {

                const productName =
                    this.parentElement.querySelector("h3").innerText;

                alert(
                    "THÔNG TIN SẢN PHẨM\n\n" +
                    productName +
                    "\n\n" +
                    phones[productName] +
                    "\n\nCảm ơn bạn đã quan tâm sản phẩm!"
                );

            });

        });

});