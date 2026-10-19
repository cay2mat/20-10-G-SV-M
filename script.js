/* ========================================================
   1. DATABASE
======================================================== */
const people = [
    { 
        id: 1, 
        name: "Đào Thụy Phương Uyên", 
        birthday: ["1811", "1902"],
        flowerTheme: "tulip",
        nickname: "Công Túa bé nhỏ ❤️",
        customGreeting: "Nhân ngày đặc biệt tặng Bông Hoa xinh nhất đóa hoa xinh nhì❤️",
        image: "assets/images/1811.jpg", 
        music: "assets/music/TDCA.mp3", 
        musicTitle: "Thế Giới Cuả Anh", 
        galleryImages: [
            "assets/images/1811.jpg",
            "assets/images/Gallerys/1.jpg",
            "assets/images/Gallerys/2.png",
            "assets/images/Gallerys/3.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Bạn Tui... 😘

Nhân ngày cũm hơi đặc biệt này (nó sẽ vô cùng đặc biệt nếu có...b...), Bạn Thuận chúc bạn Uyên luôn luôn thật xinh gái, mãi mãi dethw.

Thật là hạnh phục và gặp thật nhiều điều tốt đẹp, may mắn trong cuộc sống cày ngày cày đêm của bà nha :)))

Mong bạn tui luôn tự tin tràn đầy mãi mãi đẳng cấp như hiện tại kkk, yêu thương bản thân nhiều hơn, học tập thì cứ môn nào cũm 10Đ là okee và sớm sớm làm phóng viên nổi tiếng cho tui xin chữ ký kkk. 

Chúc bạn Uyên luôn tươi không cần tưới, ngày nào cũm dễ thương tươi cười (bà cười nhiều dễ thương lắm ý👉👈), và đi làm ít thuii dành thời gian nghĩ ngơi nha dành thời gian cho mình nhiều hơn chăm sóc bản thân cho xinh gái đồ đó kkk!    

Mong rằng tui mình có thể đồng hành cùng nhau lâu hơn kkkk, chứ tui biết bà xa tui là bà buồn lắm á kkk.

Cho nên bạn mà có cần tui giúp ý alo tui, tui tới giúp bà liền(hên xui :>), nói chớ đc gặp bà thì hp quá kkk🤭

Thân thương, 
Giấu Tên❤️🫶 `, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "hoá ra…", src: "assets/music/hoara.mp3" },
            { title: "Sandwich & Story", src: "assets/music/sand.mp3" },
            { title: "Không Thời Gian", src: "assets/music/TGCA.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" },
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" }
        ]
    },
    { 
        id: 2, 
        name: "Nguyễn Phạm Hoàng Mi", 
        birthday: "0603", 
        image: "assets/images/Hmiii.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/Hmiii.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ], 
        letter: `Gửi Mi... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Đăng Khoa 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 3, 
        name: "Lê Thị Quỳnh Anh", 
        birthday: "2509", 
        image: "assets/images/Le-Quynh-Anh_.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/Le-Quynh-Anh_.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Anh... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Châm Son 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 4, 
        name: "Nguyễn Ngọc Quỳnh San", 
        birthday: "1701", 
        image: "assets/images/quynhsan.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/quynhsan.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi San... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Khin 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 5, 
        name: "Vũ Cát Tường Vy", 
        birthday: "0401", 
        image: "assets/images/Rebecca.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/Rebecca.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Vy... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Chí Hoàng 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 6, 
        name: "Mai Ngọc Phương Uyên", 
        birthday: "0501", 
        image: "assets/images/maiuyen.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/maiuyen.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Uyên... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Bảo Tuấn 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 7, 
        name: "Trần Đỗ Như Quỳnh", 
        birthday: "0901", 
        image: "assets/images/nhuquynh.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/nhuquynh.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Quỳnh... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Bảo Tú 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 8, 
        name: "Phạm Thụy Minh Tú", 
        birthday: "2001", 
        image: "assets/images/minhtu.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/minhtu.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Tú... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Thành Nhân 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 9, 
        name: "Nguyễn Ngọc Phương Trinh", 
        birthday: "2101", 
        image: "assets/images/phuongtrinh.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/phuongtrinh.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Trinh... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Trần Tiến 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 10, 
        name: "Phạm Ngọc Anh Thơ", 
        birthday: "0602", 
        image: "assets/images/anhtho.jpg",
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/anhtho.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Thơ... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Anh Kiệt 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 11, 
        name: "Phạm Hồng Kiều Oanh", 
        birthday: "1402", 
        image: "assets/images/kieuoanh.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/kieuoanh.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Oanh... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Trần Thịnh 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 12, 
        name: "Đinh Hoàng Ngọc Hân", 
        birthday: "2303", 
        image: "assets/images/ngochan.jpg",
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/ngochan.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Hân... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Minh Trí 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 13, 
        name: "Nguyễn Lê Hạ Nam", 
        birthday: "0604", 
        image: "assets/images/nam.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/nam.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Nam... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Tuấn Đạt 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 14, 
        name: "Trần Lê Minh Thư", 
        birthday: "0407", 
        image: "assets/images/minhthu.jpg",
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/minhthu.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Thư... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Huy Hoàng 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 15, 
        name: "Văn Thị Thanh Thảo", 
        birthday: "0804", 
        image: "assets/images/vanthao.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/vanthao.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Thảo... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Tuấn Kiệt 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 16, 
        name: "Trần Nguyễn Linh Ân", 
        birthday: "1104", 
        image: "assets/images/linhan.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/linhan.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Ân... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Văn Tài 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 17, 
        name: "Tạ Thiên Trang", 
        birthday: "2204", 
        image: "assets/images/trang.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/trang.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Trang... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Đức Thịnh 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 18, 
        name: "Lò Vũ Ngọc Lan", 
        birthday: "2105", 
        image: "assets/images/ngoclan.jpg",
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/ngoclan.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Lan... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Nhưng 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 19, 
        name: "Phạm Ngọc Tuyết Trâm", 
        birthday: "2606", 
        image: "assets/images/tittram.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/tittram.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Trâm... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Phú Quý 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 20, 
        name: "Lê Thị Yến Nhi", 
        birthday: "1507", 
        image: "assets/images/lenhi.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/lenhi.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Nhi... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Gia Bảo 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 21, 
        name: "Vũ Quỳnh Như", 
        birthday: "2007", 
        image: "assets/images/nhuvu.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/nhuvu.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Như... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Trung Hiếu 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 22, 
        name: "Trần Lê Yến Nhi", 
        birthday: "1808", 
        image: "assets/images/yennhi.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/yennhi.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Nhi... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Minh Quân 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 23, 
        name: "Nguyễn Thị Thiên Ngân", 
        birthday: "2208", 
        image: "assets/images/thienngan.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/thienngan.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Ngân... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Phương Long 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 24, 
        name: "Lê Ngọc Quỳnh Như", 
        birthday: "1109", 
        image: "assets/images/LeNhu.jpg",
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/LeNhu.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Như... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Bảo Toàn 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 25, 
        name: "Trần Thị Tú Tú", 
        birthday: "2109", 
        image: "assets/images/Aster.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/Aster.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Tú... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Minh Tâm 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 26, 
        name: "Phạm Thanh Ngọc Diễm", 
        birthday: "2107", 
        image: "assets/images/ngocdiem.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/ngocdiem.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Diễm... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Thiên Ân 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 27, 
        name: "Nguyễn Triệu Tú Nhi", 
        birthday: "0510", 
        image: "assets/images/tunhi.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/tunhi.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Nhi... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Ngọc Thiện 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 28, 
        name: "Lưu Ngọc Đoan Anh", 
        birthday: "0810", 
        image: "assets/images/doananh.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/doananh.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Anh... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Minh Vũ 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 29, 
        name: "Đinh Nguyễn Hồng Nhung", 
        birthday: "2310", 
        image: "assets/images/nhung.jpg",
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/nhung.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Nhung... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Minh Tuệ 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 30, 
        name: "Ngô Hoàng Anh Thư", 
        birthday: ["0201", "1111"],
        image: "assets/images/Thu.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/Thu.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Thư... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Lan Binh 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 31, 
        name: "Nguyễn Trần Gia Hân", 
        birthday: "0812", 
        image: "assets/images/GiaHan.jpg",
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/GiaHan.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Hân... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Minh Tâm 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 32, 
        name: "Lê Nguyễn Khánh Uyên", 
        birthday: "1812", 
        image: "assets/images/khanhuyen.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/khanhuyen.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Uyên... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Bảo Tuấn 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 33, 
        name: "Phạm Thu Trang", 
        birthday: "2812", 
        image: "assets/images/ThuTrang.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/ThuTrang.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Trang... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Phương Long 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 34, 
        name: "Phạm Ngọc Hân", 
        birthday: "2310", 
        image: "assets/images/ngochanp.jpg", 
        music: "assets/music/TGCA.mp3", 
        musicTitle: "Không Thời Gian", 
        galleryImages: [
            "assets/images/ngochanp.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Hân... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúc bạn luôn vui vẻ, xinh đẹp, mạnh khỏe và gặp thật nhiều may mắn trong cuộc sống.

Mong bạn luôn tự tin, yêu thương bản thân, học tập thật tốt và sớm đạt được những ước mơ của mình. Hãy luôn tỏa sáng theo cách riêng, giữ mãi nguồn năng lượng tích cực và có thật nhiều kỷ niệm đẹp tại mái nhà chung Lưu Xá nhé!

Nguyện xin Chúa luôn đồng hành, ban bình an và chúc lành cho bạn. Chúc bạn có một ngày 20/10 thật ý nghĩa, ngập tràn yêu thương và tiếng cười! 💐

Thân mến,
Trung Hiếu 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 35, 
        name: "Maria Đinh Thị Thùy Hương", 
        birthday: "1905", 
        nickname: "Quý Sơ",
        customGreeting: "Nhân ngày 20/10 chúng con kính tặng Quý Sơ một đóa hoa",
        image: "assets/images/sohuong.jpeg", 
        music: "assets/music/ngmx.mp3", 
        musicTitle: "Người Gieo Mầm Xanh", 
        galleryImages: [
            "assets/images/sohuong.jpeg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Sơ Hương...🌷
        
Nhân ngày Phụ nữ Việt Nam 20/10, chúng con xin gửi đến Sơ những lời chúc yêu thương và lòng biết ơn chân thành nhất.

Chúng con cảm ơn Sơ vì đã luôn đồng hành, chăm sóc và lo lắng cho chúng con từng ngày. Cảm ơn Sơ đã yêu thương chúng con như những người con trong gia đình, kiên nhẫn dạy dỗ, chỉ bảo để chúng con ngày càng trưởng thành và nên người. Những quan tâm, hy sinh thầm lặng của Sơ luôn là điều quý giá đối với chúng con.

Nguyện xin Chúa luôn gìn giữ, ban cho Sơ thật nhiều sức khỏe, bình an và niềm vui trong sứ vụ. Kính chúc Sơ có một ngày 20/10 thật hạnh phúc, ngập tràn yêu thương và luôn cảm nhận được tình cảm mà chúng con dành cho Sơ. 💐

Thân mến,
Nhà Nam – Gia đình Sinh viên Đức Maria 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
    { 
        id: 36, 
        name: "Maria Nguyễn Thị Thay", 
        birthday: "0210", 
        customGreeting: "Nhân ngày 20/10 chúng con kính tặng Quý Sơ một đóa hoa",
        nickname: "Quý Sơ",
        image: "assets/images/sothay.jpg", 
        music: "assets/music/ngmx.mp3", 
        musicTitle: "Người Gieo Mầm Xanh", 
        galleryImages: [
            "assets/images/sothay.jpg",
            "assets/images/Gallerys/4.jpg",
            "assets/images/Gallerys/5.jpg",
            "assets/images/Gallerys/6.jpg",
            "assets/images/Gallerys/7.jpg",
            "assets/images/Gallerys/8.jpg"
        ],
        letter: `Gửi Sơ Thay thân mến... 🌷

Nhân ngày Phụ nữ Việt Nam 20/10, chúng con xin gửi đến Sơ những lời chúc yêu thương và lòng biết ơn chân thành nhất.

Chúng con cảm ơn Sơ vì đã luôn đồng hành, chăm sóc và lo lắng cho chúng con từng ngày. Cảm ơn Sơ đã yêu thương chúng con như những người con trong gia đình, kiên nhẫn dạy dỗ, chỉ bảo để chúng con ngày càng trưởng thành và nên người. Những quan tâm, hy sinh thầm lặng của Sơ luôn là điều quý giá đối với chúng con.

Nguyện xin Chúa luôn gìn giữ, ban cho Sơ thật nhiều sức khỏe, bình an và niềm vui trong sứ vụ. Kính chúc Sơ có một ngày 20/10 thật hạnh phúc, ngập tràn yêu thương và luôn cảm nhận được tình cảm mà chúng con dành cho Sơ. 💐

Thân mến,
Nhà Nam – Gia đình Sinh viên Đức Maria 🤍`, 
        giftVideo: "assets/videos/1116.mp4",
        extraMusic: [
            { title: "Chờ Chút", src: "assets/music/Perfect.mp3" },
            { title: "SECRET", src: "assets/music/JustTheWayYouAre.mp3" },
            { title: "Tràn Bộ Nhớ", src: "assets/music/BeautifulInWhite.mp3" }
        ]
    },
];

while(people.length < 36) {
    let clone = {...people[people.length % 5]};
    clone.id = people.length + 1;
    people.push(clone);
}
/* ========================================================
   2. GLOBAL STATES
======================================================== */
let currentPerson = null;
let currentScreen = "galaxy";
let flowerBloomed = false;
let isZooming = false; 

// Ghi nhớ Tab truy cập trước đó (Mặc định là Profile)
let currentActiveTabId = "tab-me";
let previousTabId = "tab-me";

const screens = {
    galaxy: document.getElementById('screen-galaxy'),
    unlock: document.getElementById('screen-unlock'),
    flower: document.getElementById('screen-flower'),
    pinkTabs: document.getElementById('screen-pink-tabs')
};

const bgMusic = new Audio(); bgMusic.loop = true;
const audioPlayerUI = document.getElementById('audio-player');
const musicTitleUI = document.getElementById('music-title');
const audioToggleBtn = document.getElementById('audio-toggle');
const tapToPlayBtn = document.getElementById('tap-to-play');

/* ========================================================
   3. GALAXY 3D
======================================================== */
let scene, camera, renderer, galaxyGroup;
let raycaster, mouse;
let isDraggingGalaxy = false;
let previousMousePosition = { x: 0, y: 0 };
let rotVx = 0; let rotVy = 0; 
const friction = 0.92;

function initThreeJSGalaxy() {
    const container = document.getElementById('webgl-container');
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050510);
    scene.fog = new THREE.FogExp2(0x050510, 0.0015); 

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    const isMobile = window.innerWidth <= 768;
    const initialCameraZ = isMobile ? 240 : 160; // 240 là độ xa vừa phải cho điện thoại
    camera.position.set(0, 0, initialCameraZ);
    camera.lookAt(0, 0, 0);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(100, 100, 50);
    scene.add(dirLight);

    createAuroraNebula(); 
    galaxyGroup = new THREE.Group(); 
    scene.add(galaxyGroup);

    createCentralPlanetAndRings(); 
    createSphericalParticles(); 
    createFibonacciImageSphere(); 

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    setupGalaxyEvents();
    animateGalaxy();
}

function createAuroraNebula() {
    function getAuroraTexture() {
        const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 512;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.85)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient; ctx.fillRect(0, 0, 512, 512);
        return new THREE.CanvasTexture(canvas);
    }
    const auroraTex = getAuroraTexture();
    const nebulas = [
        { color: 0x00ffcc, x: -400, y: 300, z: -800, scaleX: 1800, scaleY: 800, opacity: 0.55 }, 
        { color: 0xff00aa, x: 500, y: -200, z: -700, scaleX: 2000, scaleY: 900, opacity: 0.5 },  
        { color: 0x6600ff, x: 100, y: 400, z: -600, scaleX: 1500, scaleY: 1000, opacity: 0.5 },  
        { color: 0x00aaff, x: -500, y: -400, z: -750, scaleX: 1600, scaleY: 700, opacity: 0.45 }, 
        { color: 0x00ffaa, x: -200, y: 100, z: -300, scaleX: 1000, scaleY: 300, opacity: 0.35 },
        { color: 0xff4081, x: 200, y: -50, z: -300, scaleX: 1200, scaleY: 400, opacity: 0.35 }
    ];
    nebulas.forEach(n => {
        const mat = new THREE.SpriteMaterial({ map: auroraTex, color: n.color, transparent: true, opacity: n.opacity, blending: THREE.AdditiveBlending, depthWrite: false });
        const sprite = new THREE.Sprite(mat);
        sprite.position.set(n.x, n.y, n.z); sprite.scale.set(n.scaleX, n.scaleY, 1);
        sprite.material.rotation = (Math.random() - 0.5) * Math.PI / 4; scene.add(sprite);
    });
}

function createTextRibbon(text, radius, textColor, glowColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 4096; canvas.height = 128; const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 80px "Inter", sans-serif'; ctx.fillStyle = textColor; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.shadowColor = glowColor; ctx.shadowBlur = 20;
    let fullText = ""; for(let i=0; i<6; i++) { fullText += `${text}   ✦   `; }
    ctx.fillText(fullText, canvas.width / 2, canvas.height / 2);
    const texture = new THREE.CanvasTexture(canvas); texture.wrapS = THREE.RepeatWrapping;
    const geo = new THREE.CylinderGeometry(radius, radius, 5, 64, 1, true);
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false });
    return new THREE.Mesh(geo, mat);
}

function createCentralPlanetAndRings() {
    const planetGroup = new THREE.Group();
    
    const planet = new THREE.Mesh(
        new THREE.SphereGeometry(16, 64, 64), 
        new THREE.MeshPhongMaterial({ color: 0xff80ab, emissive: 0xd500f9, shininess: 150 }) 
    );
    planetGroup.add(planet);

    const haloCanvas = document.createElement('canvas'); haloCanvas.width = 512; haloCanvas.height = 512; const ctx = haloCanvas.getContext('2d');
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); 
    gradient.addColorStop(0.15, 'rgba(255, 64, 129, 1)');
    gradient.addColorStop(0.45, 'rgba(124, 77, 255, 0.75)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 512, 512);
    
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ 
        map: new THREE.CanvasTexture(haloCanvas), 
        color: 0xffffff, 
        transparent: true, 
        blending: THREE.AdditiveBlending, 
        depthWrite: false 
    }));
    
    halo.scale.set(280, 280, 1); 
    planetGroup.add(halo);

    const textRing1 = createTextRibbon("HAPPY WOMEN'S DAY", 26, '#ffffff', '#ff4081');
    textRing1.rotation.x = 0.4; textRing1.rotation.z = 0.4; textRing1.name = "orbitRing1"; planetGroup.add(textRing1);

    const textRing2 = createTextRibbon("CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM", 32, '#F4D06F', '#ff4081');
    textRing2.rotation.x = -0.4; textRing2.rotation.z = -0.4; textRing2.name = "orbitRing2"; planetGroup.add(textRing2);

    planetGroup.name = "centralPlanet"; galaxyGroup.add(planetGroup);
}

function getStarTexture() {
    const canvas = document.createElement('canvas'); canvas.width = 32; canvas.height = 32; const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)'); gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 32, 32); return new THREE.CanvasTexture(canvas);
}

function createSphericalParticles() {
    const starGeo = new THREE.BufferGeometry(); const starCount = 8000; 
    const posArray = new Float32Array(starCount * 3); const colorsArray = new Float32Array(starCount * 3);
    const colors = [new THREE.Color(0xffffff), new THREE.Color(0xffffff), new THREE.Color(0xff80ab), new THREE.Color(0xe040fb)];

    for(let i = 0; i < starCount * 3; i+=3) {
        const radius = 50 + Math.random() * 450; 
        const u = Math.random(); const v = Math.random(); const theta = u * 2.0 * Math.PI; const phi = Math.acos(2.0 * v - 1.0);
        posArray[i] = radius * Math.sin(phi) * Math.cos(theta); posArray[i+1] = radius * Math.cos(phi); posArray[i+2] = radius * Math.sin(phi) * Math.sin(theta);
        const mixedColor = colors[Math.floor(Math.random() * colors.length)];
        colorsArray[i] = mixedColor.r; colorsArray[i+1] = mixedColor.g; colorsArray[i+2] = mixedColor.b;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3)); starGeo.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    const starMat = new THREE.PointsMaterial({ size: 2.0, vertexColors: true, transparent: true, opacity: 0.8, map: getStarTexture(), depthWrite: false, blending: THREE.AdditiveBlending });
    galaxyGroup.add(new THREE.Points(starGeo, starMat)); 
}

function createRoundedImageTexture(imgUrl, name, callback) {
    const size = 512; const canvas = document.createElement('canvas'); canvas.width = size; canvas.height = size; const ctx = canvas.getContext('2d');
    const radius = 60; const borderWidth = 15; 
    function drawRoundedCanvas(imageToDraw) {
        ctx.clearRect(0, 0, size, size); ctx.beginPath();
        ctx.moveTo(radius + borderWidth/2, borderWidth/2); ctx.lineTo(size - radius - borderWidth/2, borderWidth/2);
        ctx.quadraticCurveTo(size - borderWidth/2, borderWidth/2, size - borderWidth/2, radius + borderWidth/2); ctx.lineTo(size - borderWidth/2, size - radius - borderWidth/2);
        ctx.quadraticCurveTo(size - borderWidth/2, size - borderWidth/2, size - radius - borderWidth/2, size - borderWidth/2); ctx.lineTo(radius + borderWidth/2, size - borderWidth/2);
        ctx.quadraticCurveTo(borderWidth/2, size - borderWidth/2, borderWidth/2, size - radius - borderWidth/2); ctx.lineTo(borderWidth/2, radius + borderWidth/2);
        ctx.quadraticCurveTo(borderWidth/2, borderWidth/2, radius + borderWidth/2, borderWidth/2); ctx.closePath();
        ctx.save(); ctx.clip();
        
        if(imageToDraw) {
            const imgAspect = imageToDraw.width / imageToDraw.height; let drawW = size, drawH = size, offX = 0, offY = 0;
            if(imgAspect > 1) { drawW = size * imgAspect; offX = -(drawW - size) / 2; } else { drawH = size / imgAspect; offY = -(drawH - size) / 2; }
            ctx.drawImage(imageToDraw, offX, offY, drawW, drawH);
        } else {
            ctx.fillStyle = '#1e293b'; ctx.fillRect(0, 0, size, size); ctx.fillStyle = '#F4D06F'; ctx.font = 'bold 80px Inter'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(name.split(" ").pop(), size/2, size/2); 
        }
        ctx.restore(); ctx.lineWidth = borderWidth; ctx.strokeStyle = '#ffffff'; ctx.stroke();
        const tex = new THREE.CanvasTexture(canvas); tex.minFilter = THREE.LinearFilter; callback(tex);
    }
    const img = new Image(); img.crossOrigin = "Anonymous";
    img.onload = () => drawRoundedCanvas(img); img.onerror = () => drawRoundedCanvas(null); img.src = imgUrl;
}

function createFibonacciImageSphere() {
    const totalImages = people.length; 
    const phi = Math.PI * (3 - Math.sqrt(5)); 
    const verticalSpread = 0.75; 

    // 1. Tách riêng người có ID = 1 và xáo trộn ngẫu nhiên những người còn lại
    const centerId = 1; // ID bạn muốn xuất hiện trực diện
    const specialPerson = people.find(p => p.id === centerId);
    let otherPeople = people.filter(p => p.id !== centerId);
    
    // Xáo trộn mảng những người còn lại
    otherPeople.sort(() => Math.random() - 0.5);

    // 2. Tính toán toàn bộ các vị trí trên tinh cầu và lưu vào 1 mảng trước khi vẽ
    let positions = [];
    for (let i = 0; i < totalImages; i++) {
        let y = 1 - (i / (totalImages - 1)) * 2; 
        y = y * verticalSpread; 

        const radiusAtY = Math.sqrt(1 - y * y); 
        const theta = phi * i; 
        
        // Vẫn giữ nguyên độ nhấp nhô ngẫu nhiên của quả cầu gốc
       // Cố định bán kính để quả cầu tròn đều, các ảnh sẽ luôn có kích thước bằng nhau
const baseRadius = 110;
        
        const posX = Math.cos(theta) * radiusAtY * baseRadius; 
        const posY = y * baseRadius; 
        const posZ = Math.sin(theta) * radiusAtY * baseRadius;
        
        positions.push({ posX, posY, posZ, originalIndex: i });
    }

    // 3. Tìm vị trí trực diện nhất (Vị trí có trục Z lớn nhất tức là nhô ra gần camera nhất)
    let bestIndex = 0;
    let maxZ = -Infinity;
    for (let i = 0; i < positions.length; i++) {
        if (positions[i].posZ > maxZ) {
            maxZ = positions[i].posZ;
            bestIndex = i;
        }
    }

    // 4. Bắt đầu vẽ ảnh lên tinh cầu
    const isMobile = window.innerWidth <= 768;
    const imageSize = isMobile ? 26 : 19; 
    const planeGeo = new THREE.PlaneGeometry(imageSize, imageSize); 
    
    let otherIndex = 0; // Biến đếm cho mảng otherPeople đã xáo trộn

    positions.forEach((pos, index) => {
        let personData;
        
        // Nếu đây là vị trí trực diện nhất -> Gán cho ID 1
        if (index === bestIndex && specialPerson) {
            personData = specialPerson;
        } 
        // Các vị trí khác -> Rút lần lượt từ mảng những người đã xáo trộn ngẫu nhiên
        else {
            personData = otherPeople[otherIndex];
            otherIndex++;
        }

        if (!personData) return; // Đảm bảo không bị lỗi nếu thiếu data

        createRoundedImageTexture(personData.image, personData.name, (texture) => {
            const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true });
            const mesh = new THREE.Mesh(planeGeo, material); 
            mesh.position.set(pos.posX, pos.posY, pos.posZ); 
            mesh.userData = { isTarget: true, personData: personData, isImage: true }; 
            galaxyGroup.add(mesh);
        });
    });
}

function setupGalaxyEvents() {
    const container = document.getElementById('webgl-container');
    container.addEventListener('mousedown', onDragStart, false); container.addEventListener('touchstart', onDragStart, {passive: false});
    container.addEventListener('mousemove', onDragMove, false); container.addEventListener('touchmove', onDragMove, {passive: false});
    container.addEventListener('mouseup', onDragEnd, false); container.addEventListener('touchend', onDragEnd, false);
    window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); }, false);
}

function onDragStart(event) {
    if(currentScreen !== 'galaxy' || isZooming) return;
    isDraggingGalaxy = true;
    previousMousePosition.x = event.touches ? event.touches[0].clientX : event.clientX;
    previousMousePosition.y = event.touches ? event.touches[0].clientY : event.clientY;
}

function onDragMove(event) {
    if (!isDraggingGalaxy || currentScreen !== 'galaxy' || isZooming) return;
    const currentX = event.touches ? event.touches[0].clientX : event.clientX;
    const currentY = event.touches ? event.touches[0].clientY : event.clientY;
    rotVy = (currentX - previousMousePosition.x) * 0.003; rotVx = (currentY - previousMousePosition.y) * 0.003; 
    previousMousePosition = { x: currentX, y: currentY };
}

function onDragEnd(event) {
    if(currentScreen !== 'galaxy' || isZooming) return;
    isDraggingGalaxy = false;
    if (Math.abs(rotVx) < 0.01 && Math.abs(rotVy) < 0.01) {
        const clientX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
        const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
        mouse.x = (clientX / window.innerWidth) * 2 - 1; mouse.y = -(clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(galaxyGroup.children, false);
        for (let i = 0; i < intersects.length; i++) {
    if (intersects[i].object.userData && intersects[i].object.userData.isTarget) {
        // Lấy vị trí camera hiện tại trừ đi 20 để tự động tính khoảng cách mặt trước
        const frontFaceLimit = camera.position.z - 20; 
        if (intersects[i].distance < frontFaceLimit) { 
            handleStarClick(intersects[i].object); 
            break; 
        }
    }
}
    }
}

function animateGalaxy() {
    if(currentScreen === 'galaxy') {
        requestAnimationFrame(animateGalaxy);
        if (!isZooming) {
            galaxyGroup.rotation.y += rotVy; galaxyGroup.rotation.x += rotVx;
            galaxyGroup.rotation.x = Math.max(-Math.PI/2.1, Math.min(Math.PI/2.1, galaxyGroup.rotation.x));
            if (!isDraggingGalaxy) { rotVx *= friction; rotVy *= friction; }
        }

        const planet = galaxyGroup.getObjectByName("centralPlanet");
        if(planet && !isZooming) { 
            planet.rotation.y += 0.005; planet.rotation.x += 0.002; 
            const ring1 = planet.getObjectByName("orbitRing1"); const ring2 = planet.getObjectByName("orbitRing2");
            if(ring1) ring1.rotation.y += 0.005; if(ring2) ring2.rotation.y -= 0.005;
        }

        const localCameraPos = camera.position.clone(); galaxyGroup.worldToLocal(localCameraPos);

        galaxyGroup.children.forEach(child => {
            if(child.userData && child.userData.isImage) {
                const worldPos = new THREE.Vector3(); child.getWorldPosition(worldPos);
                const dist = camera.position.distanceTo(worldPos);
                const lookOutMat = new THREE.Matrix4().lookAt(child.position, new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
                const outLocalQuat = new THREE.Quaternion().setFromRotationMatrix(lookOutMat);
                const targetAwayFromCam = child.position.clone().add(child.position.clone().sub(localCameraPos));
                const camLookMat = new THREE.Matrix4().lookAt(child.position, targetAwayFromCam, new THREE.Vector3(0,1,0));
                const camLocalQuat = new THREE.Quaternion().setFromRotationMatrix(camLookMat);

                const safeDistance = camera.position.z - 90; 
                let factor = 1.0 - (dist - safeDistance) / 100; 
                factor = Math.max(0, Math.min(1, factor)); 
                factor = factor * factor * (3 - 2 * factor); 
                child.quaternion.copy(outLocalQuat).slerp(camLocalQuat, factor);
                child.material.opacity = 0.3 + 0.7 * factor;
            }
        });
        renderer.render(scene, camera);
    }
}

function handleStarClick(mesh) {
    isZooming = true; rotVx = 0; rotVy = 0; 
    currentPerson = mesh.userData.personData;
    
    // --- GỌI HÀM ÂM THANH TỰ TẠO BẰNG CODE ---
    playSciFiZoomSound();

    const foundMsg = document.getElementById('star-found-message');
    const foundName = document.getElementById('star-found-name');
    if (foundMsg && foundName) {
        foundName.innerText = currentPerson.name; 
    }

    const startPos = camera.position.clone(); const startQuat = camera.quaternion.clone();
    const targetPos = new THREE.Vector3(); mesh.getWorldPosition(targetPos);
    
    const normal = targetPos.clone().normalize();
    
    const isMobile = window.innerWidth <= 768;
    const zoomDistance = isMobile ? 80 : 28; 
    const cameraDest = targetPos.clone().add(normal.multiplyScalar(zoomDistance)); 

    const zoomDuration = 1500; const startTime = Date.now();
    let textShown = false; // Biến đánh dấu chữ đã hiện hay chưa
    
    function zoomCamera() {
        const now = Date.now(); let progress = (now - startTime) / zoomDuration; if (progress > 1) progress = 1;
        
        // --- 2. HIỆN CHỮ KHI GẦN TỚI NƠI (Đi được 75% quãng đường) ---
        if (progress > 0.45 && !textShown && foundMsg) {
            textShown = true;
            foundMsg.classList.remove('hidden');
            setTimeout(() => foundMsg.classList.add('show'), 10);
        }

        const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        camera.position.lerpVectors(startPos, cameraDest, ease);
        const lookMatrix = new THREE.Matrix4().lookAt(camera.position, targetPos, new THREE.Vector3(0,1,0));
        const targetQuat = new THREE.Quaternion().setFromRotationMatrix(lookMatrix);
        camera.quaternion.slerpQuaternions(startQuat, targetQuat, ease);
        renderer.render(scene, camera);
        
        if (progress < 1) requestAnimationFrame(zoomCamera);
        else {
            isZooming = false; 
            
            if (foundMsg) {
                foundMsg.classList.remove('show');
                setTimeout(() => foundMsg.classList.add('hidden'), 400);
            }

            document.getElementById('webgl-container').style.display = 'none'; 
            transitionTo('unlock'); 
            setupUnlockScreen();
        }
    }
    zoomCamera();
}

/* ========================================================
   4. LOGIC PASSCODE
======================================================== */
let enteredPasscode = ""; 
const passDots = document.querySelectorAll('.dot');
const errorMsg = document.getElementById('unlock-error');
const passContainer = document.getElementById('passcode-box');

function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    container.innerHTML = '';
    for(let i=0; i<15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerText = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        container.appendChild(heart);
    }
}

function setupUnlockScreen() {
    document.getElementById('unlock-avatar').src = currentPerson.image;
    document.getElementById('unlock-name').innerText = currentPerson.name;
    enteredPasscode = "";
    updateDots(0);
    errorMsg.classList.add('hidden');
    createFloatingHearts();
}

document.querySelectorAll('.keypad-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (isZooming) return; 

        // GỌI HÀM PHÁT TIẾNG ĐÀN PIANO NGAY KHI BẤM
        playRandomPianoNote();

        // 2. --- THÊM HIỆU ỨNG TRÁI TIM BAY TỪ PHÍM ---
        const heart = document.createElement('div');
        heart.innerHTML = '❤️'; // Bạn có thể đổi thành 💖, 💕 hoặc ✨ tùy thích
        heart.className = 'mini-flying-heart';
        
        // Lấy tọa độ trung tâm của phím vừa bấm để trái tim bay ra từ đúng chỗ đó
        const rect = btn.getBoundingClientRect();
        heart.style.left = (rect.left + rect.width / 2) + 'px';
        heart.style.top = (rect.top + rect.height / 2) + 'px';
        
        // Gắn trái tim vào màn hình
        document.body.appendChild(heart);
        
        // Tự động dọn dẹp (xóa) trái tim sau khi bay xong (1 giây) để không làm nặng máy
        setTimeout(() => {
            heart.remove();
        }, 4000);

        const key = e.target.getAttribute('data-key');
        
        if (key === 'clear') {
            enteredPasscode = "";
        } else if (key === 'ok') {
            if (enteredPasscode.length === 4) {
                checkPasscode(enteredPasscode);
            } else {
                showPasscodeError();
            }
        } else {
            if (enteredPasscode.length < 4) {
                enteredPasscode += key;
            }
        }
        
        updateDots(enteredPasscode.length);
        errorMsg.classList.add('hidden');

        if (enteredPasscode.length === 4 && key !== 'ok') {
            checkPasscode(enteredPasscode);
        }
    });
});

function updateDots(length) {
    passDots.forEach((dot, index) => {
        if (index < length) dot.classList.add('filled');
        else dot.classList.remove('filled');
    });
}

function showPasscodeError() {
    errorMsg.classList.remove('hidden'); 
    passContainer.classList.remove('shake'); 
    void passContainer.offsetWidth; 
    passContainer.classList.add('shake');
    setTimeout(() => { 
        enteredPasscode = ''; 
        updateDots(0); 
    }, 600);
}

function checkPasscode(passcodeToCheck) {
    // 🟢 MẬT KHẨU CHỮA CHÁY — Đúng với TẤT CẢ mọi ID
    const BACKUP_PASSCODE = "1508";

    // Ưu tiên: nhập đúng ngày sinh → dùng ngày sinh
    // Fallback: nếu code sai ngày sinh → dùng 1508 để cứu
    const isBirthdayCorrect = Array.isArray(currentPerson.birthday)
        ? currentPerson.birthday.includes(passcodeToCheck)
        : passcodeToCheck === currentPerson.birthday;

    const isCorrect = isBirthdayCorrect || passcodeToCheck === BACKUP_PASSCODE;

    if (isCorrect) {
        isZooming = true;
        playSuccessPianoMelody();

        setTimeout(() => {
            isZooming = false;
            transitionTo('flower');
            startFlowerAnimation();
        }, 1200);
    } else {
        showPasscodeError();
    }
}

/* ========================================================
   5. HOA HỒNG NỞ & CHỮ HƯỚNG DẪN
======================================================== */
function startFlowerAnimation() {
    if (flowerBloomed) return;
    const flowerScreen = document.getElementById('screen-flower');
    if (currentPerson.flowerTheme === "tulip") {
        if (flowerScreen) flowerScreen.classList.add('theme-tulip');
    } else {
        if (flowerScreen) flowerScreen.classList.remove('theme-tulip');
    }
    const greetingEl = document.getElementById('flower-greeting');
    if (greetingEl) {
        greetingEl.innerText = currentPerson.customGreeting || "Nhân ngày 20/10 tặng Công Chúa 1 bông hoa";
    }
    document.getElementById('flower-name').innerText = currentPerson.name;
    
    const roseSvg = document.getElementById('flower-svg');
    const tulipCss = document.getElementById('tulip-css-container');
    const bloomedRose = document.getElementById('bloomed-rose');
    
    // KIỂM TRA: Nếu là Đào Thụy Phương Uyên (flowerTheme === "tulip")
    if (currentPerson.flowerTheme === "tulip") {
        if (roseSvg) roseSvg.style.display = 'none';
        if (tulipCss) {
            tulipCss.style.display = 'flex';
            
            // Kích hoạt hiển thị bó hoa giấy gói sau 2.5 giây giống hệt Video
            setTimeout(() => {
                const ramoEl = tulipCss.querySelector('.ramo');
                if (ramoEl) ramoEl.classList.add('ramo-visible');
            }, 2500);
        }
    } else {
        if (roseSvg) roseSvg.style.display = 'block';
        if (tulipCss) tulipCss.style.display = 'none';
    }
    
    setTimeout(() => { 
        if (roseSvg && currentPerson.flowerTheme !== "tulip") {
            roseSvg.classList.add('grow-active'); 
        }
    }, 600);

    setTimeout(() => {
        document.getElementById('flower-glow').classList.add('show');
        if (bloomedRose) bloomedRose.classList.add('sway');
        document.getElementById('flower-top-title').classList.add('show');
        
        flowerBloomed = true; 
        initMusic();
        setupFlowerClickListener();
    }, 7200);

    setTimeout(() => {
        document.getElementById('flower-click-instruction').classList.add('show');
    }, 8500); 
}

// Cập nhật sự kiện click chuyển tab cho tệp Tulip CSS
function setupFlowerClickListener() {
    const roseEl = document.getElementById('flower-svg');
    const tulipCss = document.getElementById('tulip-css-container');
    
    if (roseEl) {
        roseEl.style.cursor = 'pointer';
        roseEl.removeEventListener('click', goToPinkTabsScreen);
        roseEl.addEventListener('click', goToPinkTabsScreen);
    }
    if (tulipCss) {
        tulipCss.style.cursor = 'pointer';
        tulipCss.removeEventListener('click', goToPinkTabsScreen);
        tulipCss.addEventListener('click', goToPinkTabsScreen);
    }
}

function goToPinkTabsScreen() {
    transitionTo('pinkTabs');
    setupPinkTabsData();
}
/* ========================================================
   7 NHÓM CÂU THÔNG ĐIỆP PROFILE (TAB ME)
======================================================== */

// [0] → Nhóm 1: Dành riêng cho 1 người
// [1] → Nhóm 2: Dành riêng cho 2 người
// [2] → [6]: 5 câu còn lại, phát ngẫu nhiên
const quoteMessages = [
    // ===== NHÓM 1: 1 NGƯỜI =====
    "Chúc cô gái nhỏ luôn can đảm theo đuổi ước mơ. Bạn đã cố gắng hết sức rồi, hãy an tâm bước tiếp vì phía sau luôn có người chờ bạn. ❤️✨",

    // ===== NHÓM 2: 2 NGƯỜI =====
    // ===== NHÓM 2: 2 NGƯỜI =====
    `“Nguyện Đức Chúa chúc lành và gìn giữ anh em! Nguyện Đức Chúa tươi nét mặt nhìn đến anh em và dủ lòng thương anh em!”<br><span class="quote-citation">(Dân số 6,24-25)</span>`,
    // ===== NHÓM 3-7: PHÁT NGẪU NHIÊN =====
    "Chúc cô gái luôn âm thầm nỗ lực sẽ có ngày được mỉm cười thật tươi khi nhìn lại những gì mình đã vượt qua. 🌼",
    "Cảm ơn bạn vì đã không bỏ cuộc, kể cả trong những ngày chẳng dễ dàng. Mong bạn luôn tự hào về chính mình! 🌷",
    "Mong bạn không vì một lần thất bại mà nghi ngờ bản thân, bởi mỗi lần đứng dậy đều giúp bạn trưởng thành hơn. ❤️",
    "Bạn không cần phải tỏa sáng mỗi ngày. Chỉ cần không ngừng lớn lên và không đánh mất niềm tin vào chính mình. 🍀",
    "Chúc bạn giữ mãi sự dịu dàng nhưng không yếu đuối, sự khiêm nhường nhưng không tự ti và một trái tim luôn đầy hy vọng. 🌷"
];

/* 🔧 CẤU HÌNH ID NHẬN CÂU ĐẶC BIỆT
   - Key = ID của người (trong mảng people)
   - Value = index của câu trong quoteMessages
   
   👉 Bạn chỉ cần sửa 3 con số ID ở đây là xong!
*/
const SPECIAL_QUOTE_CONFIG = {
    // Nhóm 1: Dành riêng cho 1 người
    1: 0,           // ID 1 → nhận quoteMessages[0]

    // Nhóm 2: Dành riêng cho 2 người
    35: 1,          // ID 14 → nhận quoteMessages[1]
    36: 1           // ID 26 → nhận quoteMessages[1]
    // (Bạn có thể đổi 14, 26 thành bất kỳ ID nào bạn muốn)
};

/* Hàm lấy câu thông điệp cho từng ID
   → Kết quả LUÔN CỐ ĐỊNH, không đổi dù reload trang hay mở trên máy khác
*/
function getQuoteForPerson(personId) {
    // 1. Nếu ID nằm trong nhóm đặc biệt
    if (SPECIAL_QUOTE_CONFIG[personId] !== undefined) {
        return quoteMessages[SPECIAL_QUOTE_CONFIG[personId]];
    }

    // 2. Các ID còn lại: băm ID để chọn ngẫu nhiên 1 trong 5 câu [2..6]
    // Công thức hash đơn giản, đảm bảo mỗi ID luôn ra CÙNG 1 câu
    const randomIndex = 2 + ((personId * 7 + 13) % 5);
    return quoteMessages[randomIndex];
}
/* ========================================================
   6. GIAO DIỆN TONE HỒNG 3 MỤC & LOGIC CHUYỂN TAB CẬP NHẬT
======================================================== */
function setupPinkTabsData() {
    document.getElementById('me-tab-image').src = currentPerson.image;
    document.getElementById('me-tab-name').innerText = currentPerson.name;
    document.getElementById('me-tab-nickname').innerText = currentPerson.nickname || "Công chúa";
     const quoteEl = document.querySelector('#tab-me .pink-quote');
    if (quoteEl) {
        quoteEl.innerHTML = getQuoteForPerson(currentPerson.id);
    }
    setupLetterData(); 
    setupMusicPopup(); 
    setupGalleryData(); 
    const floatingBg = document.getElementById('floating-bg-container');
    if (floatingBg) {
        if (currentPerson.id === 1) { // Bạn có thể đổi số 1 thành ID bạn muốn
            floatingBg.style.display = 'block';
        } else {
            floatingBg.style.display = 'none';
        }
    }
    previousTabId = "tab-me";
    switchTab('tab-me');
}
function setupMusicPopup() {
    const triggerBtn = document.getElementById('open-music-popup-btn');
    const triggerName = document.getElementById('music-trigger-name');
    const popupModal = document.getElementById('music-popup-modal');
    const popupList = document.getElementById('music-popup-list');
    const closePopupBtn = document.getElementById('close-music-popup');
    
    if (!triggerBtn || !popupModal || !popupList || !currentPerson) return;
    
    popupList.innerHTML = ''; 

    // Lấy tên bài hát đang phát hiện tại (hoặc mặc định nếu chưa phát)
    const currentPlayingTitle = musicTitleUI.innerText || currentPerson.musicTitle;
    triggerName.innerText = currentPlayingTitle; // Hiển thị tên bài lên nút bấm

    // Gom bài hát mặc định và danh sách extraMusic thành 1 mảng
    let allMusic = [{ title: currentPerson.musicTitle, src: currentPerson.music }];
    if (currentPerson.extraMusic && currentPerson.extraMusic.length > 0) {
        allMusic = allMusic.concat(currentPerson.extraMusic);
    }

    // Mở Popup khi bấm nút
    triggerBtn.onclick = () => {
        popupModal.classList.remove('hidden');
    };

    // Đóng Popup khi bấm nút X hoặc bấm ra vùng mờ
    closePopupBtn.onclick = () => popupModal.classList.add('hidden');
    popupModal.onclick = (e) => {
        if (e.target === popupModal) popupModal.classList.add('hidden');
    };

    // Tạo các mục bài hát trong Popup
    allMusic.forEach((musicItem) => {
        const item = document.createElement('div');
        item.className = 'music-popup-item';
        
        const isPlaying = (musicTitleUI.innerText === musicItem.title);
        
        if (isPlaying) {
            item.classList.add('playing');
            item.innerHTML = `<span>🎶</span> ${musicItem.title}`;
        } else {
            item.innerHTML = `<span>🎵</span> ${musicItem.title}`;
        }

        item.onclick = () => {
            // Cập nhật nhạc
            bgMusic.src = musicItem.src;
            musicTitleUI.innerText = musicItem.title;
            triggerName.innerText = musicItem.title; // Đổi tên hiển thị trên nút bấm
            
            // Phát nhạc
            bgMusic.play().catch(e => console.log(e));
            if (tapToPlayBtn) tapToPlayBtn.classList.add('hidden');
            
            // Cập nhật trạng thái hiển thị của các bài trong Popup
            document.querySelectorAll('.music-popup-item').forEach(b => {
                b.classList.remove('playing');
                b.innerHTML = b.innerHTML.replace('🎶', '🎵');
            });
            item.classList.add('playing');
            item.innerHTML = `<span>🎶</span> ${musicItem.title}`;
            
            // Đã xóa phần tự động tắt ở đây! Popup sẽ giữ nguyên cho đến khi bạn tự bấm X.
        };

        popupList.appendChild(item);
    });
}
// Thêm biến để xử lý việc bấm ngoài menu thì tự đóng
document.addEventListener('click', function(e) {
    const toggleBtn = document.getElementById('music-dropdown-toggle');
    const dropdownList = document.getElementById('music-dropdown-list');
    
    // Nếu bấm ra ngoài khung nhạc thì tự động đóng menu
    if (toggleBtn && dropdownList) {
        if (!e.target.closest('.music-tray-container')) {
            toggleBtn.classList.remove('active');
            dropdownList.classList.remove('show');
        }
    }
});

function setupMusicTray() {
    const toggleBtn = document.getElementById('music-dropdown-toggle');
    const dropdownList = document.getElementById('music-dropdown-list');
    const currentNameEl = document.getElementById('music-current-name');
    
    if (!toggleBtn || !dropdownList || !currentPerson) return;
    
    dropdownList.innerHTML = ''; // Xóa danh sách cũ đi khi đổi tài khoản
    
    // Gắn sự kiện đóng/mở menu khi bấm vào thanh chọn (tránh bị gắn trùng nhiều lần)
    const newToggleBtn = toggleBtn.cloneNode(true);
    toggleBtn.parentNode.replaceChild(newToggleBtn, toggleBtn);
    
    newToggleBtn.addEventListener('click', () => {
        newToggleBtn.classList.toggle('active');
        dropdownList.classList.toggle('show');
    });

    // Gom bài hát mặc định và danh sách extraMusic thành 1 mảng
    let allMusic = [{ title: currentPerson.musicTitle, src: currentPerson.music }];
    if (currentPerson.extraMusic && currentPerson.extraMusic.length > 0) {
        allMusic = allMusic.concat(currentPerson.extraMusic);
    }

    const currentPlayingTitle = musicTitleUI.innerText;
    
    // Cập nhật tên hiển thị bên ngoài thanh chọn
    currentNameEl.innerText = currentPlayingTitle;

    // Tạo các mục bài hát trong thanh cuộn
    allMusic.forEach((musicItem) => {
        const item = document.createElement('div');
        item.className = 'music-item';
        
        const isPlaying = (currentPlayingTitle === musicItem.title);
        
        if (isPlaying) {
            item.classList.add('playing');
            item.innerHTML = `<span>🎶</span> ${musicItem.title}`;
        } else {
            item.innerHTML = `<span>🎵</span> ${musicItem.title}`;
        }

        item.addEventListener('click', () => {
            // Cập nhật nhạc
            bgMusic.src = musicItem.src;
            musicTitleUI.innerText = musicItem.title;
            currentNameEl.innerText = musicItem.title; // Đổi tên hiển thị ngoài thanh thả
            
            // Phát nhạc
            bgMusic.play().catch(e => console.log(e));
            if(tapToPlayBtn) tapToPlayBtn.classList.add('hidden');
            
            // Cập nhật trạng thái hiển thị của các dòng trong menu
            document.querySelectorAll('.music-item').forEach(b => {
                b.classList.remove('playing');
                b.innerHTML = b.innerHTML.replace('🎶', '🎵');
            });
            item.classList.add('playing');
            item.innerHTML = `<span>🎶</span> ${musicItem.title}`;
            
            // Chọn xong thì tự động đóng menu thả xuống
            newToggleBtn.classList.remove('active');
            dropdownList.classList.remove('show');
        });

        dropdownList.appendChild(item);
    });
}

// Bắt sự kiện chuyển Tab
// Bắt sự kiện chuyển Tab
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const tabBtn = e.target.closest('.tab-btn');
        if (!tabBtn) return;
        
        // 1. GỌI ÂM THANH UI NGHỆ THUẬT KHI BẤM CHUYỂN MỤC
        playArtisticTabSound();

        const targetTabId = tabBtn.getAttribute('data-tab');
        switchTab(targetTabId);
    });
});

// HÀM TẠO ÂM THANH "GÕ PHÍM/UI" NGHỆ THUẬT, ÊM TAI
function playArtisticTabSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Dùng sóng Sine để tạo âm thanh tròn trịa, thuần khiết (giống tiếng giọt nước hoặc phím đàn mềm)
        osc.type = 'sine'; 
        
        // Vuốt âm cực nhanh từ cao xuống thấp (1000Hz rớt xuống 400Hz trong 0.07 giây)
        // Tạo cảm giác "tóp" rất có lực chạm nhưng lại cực kỳ êm ái
        osc.frequency.setValueAtTime(1000, now); 
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.07); 

        // Âm lượng mức 25%, tắt lịm dần trong 0.1 giây tạo độ vang tinh tế
        gain.gain.setValueAtTime(0.25, now); 
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1); 

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.1);
    } catch (e) {}
}

function switchTab(tabId) {
    // NẾU LÀ TAB GIFT (tab-sec3) -> MỞ NGAY VIDEO GIFT
    if (tabId === 'tab-sec3') {
        openGiftModal();
        return;
    }

    // Ghi nhớ tab vừa truy cập
    previousTabId = tabId;
    currentActiveTabId = tabId;

    // Cập nhật nút active
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if(btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Cập nhật khung nội dung active
    document.querySelectorAll('.tab-pane').forEach(pane => {
        if(pane.id === tabId) {
            pane.classList.add('active');
        } else {
            pane.classList.remove('active');
        }
    });
    const conveyorTracks = document.querySelectorAll('.conveyor-track');
    const isImageTab = (tabId === 'tab-sec4');
    
    conveyorTracks.forEach(track => {
        track.style.animationPlayState = isImageTab ? 'running' : 'paused';
    });
}

/* ========================================================
   7. ÂM NHẠC & TIỆN ÍCH
======================================================== */
function initMusic() {
    bgMusic.src = currentPerson.music; 
    musicTitleUI.innerText = currentPerson.musicTitle; 
    audioPlayerUI.classList.remove('hidden');
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) playPromise.catch(error => { tapToPlayBtn.classList.remove('hidden'); });
}

tapToPlayBtn.addEventListener('click', () => { bgMusic.play(); tapToPlayBtn.classList.add('hidden'); });
audioToggleBtn.addEventListener('click', () => { bgMusic.muted = !bgMusic.muted; audioToggleBtn.innerText = bgMusic.muted ? "Unmute" : "Mute"; });

function transitionTo(screenName) {
    Object.values(screens).forEach(screen => { if(screen) screen.classList.remove('active'); });
    if(screens[screenName]) {
        screens[screenName].classList.add('active'); 
        currentScreen = screenName;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    initThreeJSGalaxy();
});

/* ========================================================
   8. LOGIC MỞ PHONG BÌ THƯ & THU HỒI THƯ (CÓ ÂM THANH)
======================================================== */
let letterState = 0; 

function setupLetterData() {
    if (!currentPerson) return;
    
    const textEl = document.getElementById('letter-text');
    const photoEl = document.getElementById('letter-photo');
    if (textEl) textEl.innerText = currentPerson.letter;
    if (photoEl) photoEl.src = currentPerson.image;
    
const photoPcEl = document.getElementById('letter-photo-pc');
    if (photoPcEl) {
        photoPcEl.src = currentPerson.image || "";
        
        // 🟢 THÊM XỬ LÝ TỰ ĐỘNG PHÂN BIỆT ẢNH DỌC VÀ ẢNH NGANG
        photoPcEl.onload = function() {
            const frame = photoPcEl.closest('.pc-only-photo');
            if (frame) {
                if (photoPcEl.naturalWidth > photoPcEl.naturalHeight) {
                    frame.classList.add('horizontal-photo');
                    frame.classList.remove('vertical-photo');
                } else {
                    frame.classList.add('vertical-photo');
                    frame.classList.remove('horizontal-photo');
                }
            }
        };

        // Nếu ảnh đã load xong từ trước (cache)
        if (photoPcEl.complete && photoPcEl.naturalWidth > 0) {
            photoPcEl.onload();
        }
    }
    const cornerFlower = document.getElementById('letter-flower-corner');
    if (cornerFlower) {
        if (currentPerson.id === 1) { // 👈 Thay số 1 bằng ID bạn muốn gán hoa (ví dụ: 1, 2, 3...)
            cornerFlower.style.display = 'block';
        } else {
            cornerFlower.style.display = 'none';
        }
    }
    const envContainer = document.getElementById('envelope-container');
    const scrollArea = document.querySelector('.letter-content-scroll');
    
    if (envContainer) {
        envContainer.classList.remove('step-1', 'step-2', 'from-step-2');
        letterState = 0;
    }
    if (scrollArea) scrollArea.scrollTop = 0;
}

document.addEventListener('click', function(event) {
    const envelopeContainer = document.getElementById('envelope-container');
    if (!envelopeContainer) return;

    const clickedInsideEnvelope = event.target.closest('#envelope-container');
    const clickedInsideLetter = event.target.closest('.letter-paper');

    if (letterState === 0) {
        if (clickedInsideEnvelope) {
            // 1. TỪ 0 -> 1: Tiếng mở nắp bì thư / rút nhẹ tờ giấy ra
            playEnvelopeOpenSound();

            envelopeContainer.classList.remove('from-step-2');
            envelopeContainer.classList.add('step-1');
            letterState = 1;
        }
    } 
    else if (letterState === 1) {
        if (clickedInsideEnvelope) {
            // 2. TỪ 1 -> 2: Tiếng mở rộng tấm thư to ra
            playPaperExpandSound();

            envelopeContainer.classList.remove('step-1', 'from-step-2');
            envelopeContainer.classList.add('step-2');
            letterState = 2;
        } else {
            // 3. TỪ 1 -> 0: Tiếng đóng/gấp lá thư giấy lại
            playPaperFoldSound();

            envelopeContainer.classList.remove('step-1', 'from-step-2');
            letterState = 0;
        }
    } 
    else if (letterState === 2) {
        if (!clickedInsideLetter) {
            // 4. TỪ 2 -> 1: Tiếng thu nhỏ tờ thư về lại bước 1
            playPaperShrinkSound();

            envelopeContainer.classList.remove('step-2');
            envelopeContainer.classList.add('step-1', 'from-step-2');
            letterState = 1;
            
            const scrollArea = document.querySelector('.letter-content-scroll');
            if (scrollArea) scrollArea.scrollTop = 0;
        }
    }
});


/* ========================================================
   CÁC HÀM TỔNG HỢP ÂM THANH CHO LÁ THƯ (WEB AUDIO API)
======================================================== */

// 1. Tiếng mở bì thư (0 -> 1): Tiếng sột soạt nhẹ của nắp phong bì
function playEnvelopeOpenSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const now = ctx.currentTime;

        // Tạo tiếng ồn trắng (White noise) để giả lập tiếng sột soạt giấy
        const bufferSize = ctx.sampleRate * 0.15; // 0.15 giây
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        // Lọc tần số để tiếng giấy nghe ấm và thật hơn
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1200;
        filter.Q.value = 1.5;

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        noise.start(now);
    } catch (e) {}
}

// 2. Tiếng mở rộng tấm thư (1 -> 2): Tiếng lật/vung giấy to, ngân dài
function playPaperExpandSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        // Tần số trượt lên tạo cảm giác mở rộng không gian
        osc.frequency.setValueAtTime(250, now);
        osc.frequency.linearRampToValueAtTime(450, now + 0.2);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.25);
    } catch (e) {}
}

// 3. Tiếng thu nhỏ tờ thư (2 -> 1): Tiếng sột soạt gom giấy
function playPaperShrinkSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        // Tần số trượt xuống tạo cảm giác thu gọn lại
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.linearRampToValueAtTime(200, now + 0.15);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.2);
    } catch (e) {}
}

// 4. Tiếng đóng lá thư giấy (1 -> 0): Tiếng sập nắp / gấp gọn cuối cùng
function playPaperFoldSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.12);
    } catch (e) {}
}

/* ========================================================
   9. LOGIC PHÁT VIDEO KHUNG HỒNG 16:9 & MODAL GIFT
======================================================== */
let wasMusicPlayingBeforeGift = false;

function openGiftModal() {
    const giftVideo = document.getElementById('gift-video');
    const videoModal = document.getElementById('video-modal');
    const playIcon = document.getElementById('play-icon');

    if (!currentPerson || !currentPerson.giftVideo) return;

    if (typeof bgMusic !== 'undefined') {
        wasMusicPlayingBeforeGift = !bgMusic.paused; 
        if (!bgMusic.paused) {
            bgMusic.pause();
        }
    }

    if (giftVideo) {
        giftVideo.src = currentPerson.giftVideo;
    }
    if (videoModal) {
        videoModal.classList.remove('hidden');
    }

    if (giftVideo) {
        giftVideo.play().then(() => {
            if (playIcon) playIcon.innerText = "❚❚";
        }).catch(() => {
            if (playIcon) playIcon.innerText = "▶";
        });
    }
}

function closeGiftModal() {
    const giftVideo = document.getElementById('gift-video');
    const videoModal = document.getElementById('video-modal');

    if (giftVideo) {
        giftVideo.pause();
        giftVideo.currentTime = 0;
    }
    if (videoModal) {
        videoModal.classList.add('hidden');
    }

    switchTab(previousTabId);

    if (typeof bgMusic !== 'undefined' && wasMusicPlayingBeforeGift) {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(e => console.log("Lỗi khi phát lại nhạc: ", e));
    }
}

function setupGiftVideoEvents() {
    const giftVideo = document.getElementById('gift-video');
    const videoModal = document.getElementById('video-modal');
    const closeBtn = document.getElementById('close-video');
    const playPauseBtn = document.getElementById('btn-play-pause');
    const playIcon = document.getElementById('play-icon');
    const rewindBtn = document.getElementById('btn-rewind-5');
    const forwardBtn = document.getElementById('btn-forward-5');
    const progressBar = document.getElementById('video-progress');
    const currentTimeEl = document.getElementById('video-current-time');
    const durationEl = document.getElementById('video-duration');
    const fullscreenBtn = document.getElementById('btn-fullscreen-mobile');

    // Nút Đóng X
    if (closeBtn) {
        closeBtn.addEventListener('click', closeGiftModal);
    }

    // Click ngoài modal
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeGiftModal();
            }
        });
    }

    // Nút Play / Pause
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            if (giftVideo.paused) {
                giftVideo.play();
                if (playIcon) playIcon.innerText = "❚❚";
            } else {
                giftVideo.pause();
                if (playIcon) playIcon.innerText = "▶";
            }
        });
    }

    // Nút Lùi -5s
    if (rewindBtn) {
        rewindBtn.addEventListener('click', () => {
            giftVideo.currentTime = Math.max(0, giftVideo.currentTime - 5);
        });
    }

    // Nút Tua +5s
    if (forwardBtn) {
        forwardBtn.addEventListener('click', () => {
            giftVideo.currentTime = Math.min(giftVideo.duration || 0, giftVideo.currentTime + 5);
        });
    }

    // Cập nhật thanh tiến trình
    if (giftVideo) {
        giftVideo.addEventListener('timeupdate', () => {
            if (giftVideo.duration) {
                const pct = (giftVideo.currentTime / giftVideo.duration) * 100;
                if (progressBar) progressBar.value = pct;
                if (currentTimeEl) currentTimeEl.innerText = formatVideoTime(giftVideo.currentTime);
                if (durationEl) durationEl.innerText = formatVideoTime(giftVideo.duration);
            }
        });

        giftVideo.addEventListener('ended', () => {
            if (playIcon) playIcon.innerText = "▶";
        });
    }

    // Tua video bằng thanh slider
    if (progressBar) {
        progressBar.addEventListener('input', (e) => {
            if (giftVideo.duration) {
                giftVideo.currentTime = (e.target.value / 100) * giftVideo.duration;
            }
        });
    }

    // 🟢 ĐÃ ĐƯA ĐOẠN NÀY VÀO TRONG HÀM - SỬA TRIỆT ĐỂ LỖI FULLSCREEN
    if (fullscreenBtn && giftVideo) {
        fullscreenBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            // 1. Dành cho Safari / iPhone (Phóng to trình phát video Native của iOS - Tự động quay ngang)
            if (giftVideo.webkitEnterFullscreen) {
                giftVideo.webkitEnterFullscreen();
            } 
            // 2. Dành cho Android / Chrome (Bật toàn màn hình + Ép khóa xoay màn hình ngang)
            else if (giftVideo.requestFullscreen) {
                giftVideo.requestFullscreen().then(() => {
                    if (screen.orientation && screen.orientation.lock) {
                        screen.orientation.lock('landscape').catch(() => {});
                    }
                }).catch(() => {});
            } else if (giftVideo.webkitRequestFullscreen) {
                giftVideo.webkitRequestFullscreen();
            } else if (giftVideo.msRequestFullscreen) {
                giftVideo.msRequestFullscreen();
            }
        });
    }
}

function formatVideoTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

document.addEventListener('DOMContentLoaded', () => {
    setupGiftVideoEvents();
});

// HÀM TẠO ÂM THANH RẢI ĐÀN HARP (Cực êm, không chói, không ngang)
function playSciFiZoomSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const now = ctx.currentTime;

        // Dùng thang âm Ngũ cung (Pentatonic) êm dịu. 
        // Giới hạn nốt cao nhất ở 1046Hz để tuyệt đối không bị chói tai.
        const notes = [
            392.00, // G4
            440.00, // A4
            523.25, // C5
            587.33, // D5
            659.25, // E5
            783.99, // G5
            880.00, // A5
            1046.50 // C6 (Nốt cao nhất, đủ sáng nhưng không chói)
        ];

        // 1. ÂM NỀN (Pad) - Rất trầm, ấm và tĩnh (Giữ nguyên 1 nốt để hết bị "ngang")
        const padOsc = ctx.createOscillator();
        const padGain = ctx.createGain();
        padOsc.type = 'sine'; // Sóng tròn mượt
        padOsc.frequency.value = 261.63; // Nốt C4 trầm ấm làm nền vững
        
        padGain.gain.setValueAtTime(0, now);
        padGain.gain.linearRampToValueAtTime(0.08, now + 0.5); // Âm lượng nền cực nhỏ (8%)
        padGain.gain.exponentialRampToValueAtTime(0.001, now + 2.5); // Ngân dài 2.5 giây
        
        padOsc.connect(padGain);
        padGain.connect(ctx.destination);
        padOsc.start(now);
        padOsc.stop(now + 2.5);

        // 2. CHUÔNG LẤP LÁNH - Đánh rải từ thấp lên cao như lướt đàn Harp
        notes.forEach((freq, index) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.value = freq;
            
            // Rải các nốt lần lượt cách nhau 0.07 giây (tạo cảm giác lướt tay mượt mà)
            const startTime = now + (index * 0.07); 
            const duration = 2.0 + Math.random() * 0.5; // Mỗi nốt ngân dài 2 - 2.5 giây
            
            gain.gain.setValueAtTime(0, startTime);
            // Nổi lên rất êm ái
            gain.gain.linearRampToValueAtTime(0.025, startTime + 0.1); // Âm lượng siêu nhỏ (2.5%)
            // Tắt dần từ từ lịm đi như tiếng chuông
            gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start(startTime);
            osc.stop(startTime + duration);
        });
    } catch (e) {
        console.log("Lỗi âm thanh", e);
    }
}
// HÀM TẠO ÂM THANH PIANO ÊM ÁI (Đô, Rê, Mi, Fa, Son, La, Si ngẫu nhiên)
function playRandomPianoNote() {
    try {
        const ctx = getAudioContext();  // ✅
        if (!ctx) return;
        const now = ctx.currentTime;
        const notes = [523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77];
        
        // Chọn ngẫu nhiên 1 nốt trong mảng
        const randomFreq = notes[Math.floor(Math.random() * notes.length)];

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine'; // Dùng sóng tròn để tiếng êm như chuông/piano mềm
        osc.frequency.value = randomFreq;

        // Chỉnh âm lượng: Kêu lên ngay lập tức rồi tắt dần trong 1 giây (như khi gõ phím đàn)
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.3, now + 0.02); // Âm lượng 30% đủ nghe không bị chói
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0); // Ngân vang rồi tắt dần

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.0);
    } catch (e) {
        console.log("Lỗi phát âm thanh phím", e);
    }
}

// HÀM TẠO GIAI ĐIỆU PIANO BÁO THÀNH CÔNG KHI NHẬP ĐÚNG MẬT KHẨU
function playSuccessPianoMelody() {
    try {
        const ctx = getAudioContext();  // ✅
        if (!ctx) return;
        const now = ctx.currentTime;

        // Chuỗi nốt nhạc vui tươi, đi lên (C5, E5, G5, C6, E6)
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        
        notes.forEach((freq, index) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'sine'; // Sóng tròn êm ái như piano/chuông
            osc.frequency.value = freq;
            
            // Đánh các nốt liên tiếp, mỗi nốt cách nhau 0.12 giây
            const startTime = now + (index * 0.12);
            const duration = 2.0; // Mỗi nốt ngân vang 2 giây rồi mới tắt
            
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.3, startTime + 0.03); // Nổi âm lượng lên
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration); // Tắt dần
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start(startTime);
            osc.stop(startTime + duration);
        });
    } catch (e) {
        console.log("Lỗi âm thanh thành công", e);
    }
}
// ================= XỬ LÝ SỰ KIỆN BẤM VÀO AVATAR XEM ẢNH (BẢN TỰ ĐỘNG) =================
document.addEventListener('click', function(e) {
    // Tự động tìm khung avatar trong tab Profile hoặc ngoài màn hình khóa
    const clickedProfileAvatar = e.target.closest('.profile-avatar-frame');
    const clickedUnlockAvatar = e.target.closest('.unlock-avatar-wrapper');
    const modal = document.getElementById('image-viewer-modal');
    
    // 1. Khi bấm trúng avatar trong mục Profile
    if (clickedProfileAvatar) {
        const imgElement = clickedProfileAvatar.querySelector('img');
        if (imgElement && modal) {
            const fullImg = document.getElementById('full-size-image');
            fullImg.src = imgElement.src; 
            modal.classList.add('active'); 
            return; // Dừng lại để ảnh hiện lên
        }
    }

    // 2. Khi bấm trúng avatar ở màn hình nhập mật mã (Mở rộng thêm cho bạn)
    if (clickedUnlockAvatar) {
        const imgElement = clickedUnlockAvatar.querySelector('img');
        if (imgElement && modal) {
            const fullImg = document.getElementById('full-size-image');
            fullImg.src = imgElement.src; 
            modal.classList.add('active'); 
            return;
        }
    }
    
    // 3. Khi đang bật ảnh mà bấm vào nền đen hoặc nút X thì tắt đi
    if (modal && modal.classList.contains('active')) {
        if (e.target.id === 'image-viewer-modal' || e.target.closest('.close-viewer')) {
            modal.classList.remove('active');
        }
    }
});
/* ========================================================
   10. HIỆU ỨNG ÁNH SAO TOÀN MÀN HÌNH MỤC TONE HỒNG
======================================================== */
// Hàm vẽ ngôi sao lấp lánh tại tọa độ x, y
function createSparkleEffect(x, y) {
    const star = document.createElement('div');
    star.className = 'sparkle-star';
    
    // Chọn ngẫu nhiên hình dáng (sao 4 cánh, sao 5 cánh, lấp lánh)
    const icons = ['✦', '✨', '⭐', '💖'];
    star.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    // Chọn ngẫu nhiên 1 trong 4 màu sắc
    const colors = ['sparkle-color-1', 'sparkle-color-2', 'sparkle-color-3', 'sparkle-color-4'];
    star.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    
    // Đặt vị trí ngay tại đầu ngón tay/chuột
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    
    document.body.appendChild(star);
    
    // Tự động dọn dẹp sao sau khi bay xong (0.6 giây) để không làm nặng máy
    setTimeout(() => {
        star.remove();
    }, 600);
}

// Lắng nghe sự kiện click/chạm trên toàn bộ màn hình
document.addEventListener('pointerdown', function(e) {
    // CHỈ CHO PHÉP VẼ SAO KHI ĐANG Ở MÀN HÌNH 3 MỤC (pinkTabs)
    if (typeof currentScreen !== 'undefined' && currentScreen !== 'pinkTabs') return;

    // Gọi hàm vẽ sao tại tọa độ click
    createSparkleEffect(e.clientX, e.clientY);
});
/* ========================================================
   CÁC HÀM TỔNG HỢP ÂM THANH CHO LÁ THƯ (GIẤY CHÂN THỰC & ỔN ĐỊNH)
======================================================== */

// Khởi tạo một AudioContext duy nhất toàn cục để tránh lỗi "lúc kêu lúc không"
let sharedAudioCtx = null;

function getAudioContext() {
    if (!sharedAudioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        sharedAudioCtx = new AudioContext();
    }
    // "Đánh thức" audio nếu trình duyệt đang cho nó ngủ
    if (sharedAudioCtx.state === 'suspended') {
        sharedAudioCtx.resume();
    }
    return sharedAudioCtx;
}

// Hàm giả lập tiếng giấy với bộ lọc Lowpass trầm ấm và trượt tần số
function createRefinedPaperSound(duration, startFreq, endFreq, type, maxGain, isDouble) {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        
        // Tăng độ nảy của nhiễu lên 0.85 để âm thanh phát ra to và rõ hơn
        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.85; 
        }
        
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        // Bộ lọc Lowpass làm ấm tiếng, loại bỏ âm "chói"
        const filter = ctx.createBiquadFilter();
        filter.type = type; 
        filter.frequency.setValueAtTime(startFreq, now);
        if (startFreq !== endFreq) {
            filter.frequency.exponentialRampToValueAtTime(endFreq, now + duration);
        }
        filter.Q.value = 1.0; // Tăng độ vang nhẹ để âm thanh dày hơn

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, now);
        
        if (isDouble) {
            // 2 nhịp vuốt giấy (Lúc mở tờ giấy to ra)
            gainNode.gain.linearRampToValueAtTime(maxGain, now + duration * 0.15);
            gainNode.gain.exponentialRampToValueAtTime(maxGain * 0.4, now + duration * 0.4);
            gainNode.gain.linearRampToValueAtTime(maxGain, now + duration * 0.65);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
        } else {
            // 1 nhịp vuốt êm
            gainNode.gain.linearRampToValueAtTime(maxGain, now + duration * 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
        }

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start(now);
    } catch (e) {
        console.error("Lỗi âm thanh:", e);
    }
}

// 1. Tiếng mở nắp phong bì (0 -> 1): maxGain = 1.5 để nghe rõ ràng tiếng sột soạt đầu tiên
function playEnvelopeOpenSound() { 
    createRefinedPaperSound(0.35, 300, 800, 'lowpass', 1.5, false); 
} 

// 2. Tiếng mở giấy ra (1 -> 2): 2 nhịp vuốt giấy bản to, âm lượng vặn to lên 1.3
function playPaperExpandSound() { 
    createRefinedPaperSound(0.5, 450, 600, 'lowpass', 1.3, true); 
} 

// 3. Tiếng gấp giấy lại (2 -> 1): Nhịp gấp chắc tay (maxGain = 1.4)
function playPaperShrinkSound() { 
    createRefinedPaperSound(0.3, 700, 400, 'lowpass', 1.4, false); 
} 

// 4. Tiếng nhét giấy vào (1 -> 0): Nhịp đút vào phong bì trầm, lực đút mạnh vừa (maxGain = 1.2)
function playPaperFoldSound() { 
    createRefinedPaperSound(0.4, 300, 200, 'lowpass', 1.2, false); 
}
/* ========================================================
   LOGIC LOAD ẢNH TAB IMAGE (NÚT CHỈNH SỬA TRÒN GÓC PHẢI)
======================================================== */
let isGalleryEditing = false; 

function getGalleryImages() {
    const custom = localStorage.getItem('custom_gallery_' + currentPerson.id);
    if (custom) {
        try { return JSON.parse(custom); } catch(e) { return []; }
    }
    return currentPerson.galleryImages ? [...currentPerson.galleryImages] : [];
}

function saveGalleryImages(images) {
    try {
        localStorage.setItem('custom_gallery_' + currentPerson.id, JSON.stringify(images));
    } catch(e) {
        alert("Bộ nhớ trình duyệt đầy! Vui lòng xóa bớt ảnh cũ trước khi thêm ảnh mới.");
    }
}

function setupGalleryData() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid || !currentPerson) return;
    
    galleryGrid.innerHTML = ''; 
    
    // Cài đặt để thẻ cha có thể "neo" nút tròn ở góc
    const parent = galleryGrid.parentElement;
    parent.style.position = 'relative'; 
    parent.style.paddingBottom = '70px'; // Tạo khoảng trống để nút không che mất ảnh cuối cùng
    
    let editToggleBtn = document.getElementById('toggle-gallery-edit');
    
    if (!editToggleBtn) {
        editToggleBtn = document.createElement('button');
        editToggleBtn.id = 'toggle-gallery-edit';
        editToggleBtn.className = 'toggle-edit-gallery-btn';
        // Đặt nút vào cuối phần tử cha để nó nổi lên trên
        parent.appendChild(editToggleBtn); 
        
        editToggleBtn.onclick = () => {
            isGalleryEditing = !isGalleryEditing; 
            renderGalleryUI(editToggleBtn, galleryGrid); 
        };
    }
    
    function renderGalleryUI(btn, grid) {
        grid.innerHTML = '';
        
        // Mã vẽ icon Bút chì (giống hình bạn gửi) và icon Dấu tích
        const iconEdit = `<svg viewBox="0 0 512 512" style="width: 20px; height: 20px; fill: currentColor;"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>`;
        
        const iconCheck = `<svg viewBox="0 0 448 512" style="width: 22px; height: 22px; fill: currentColor;"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`;

        // Chuyển đổi màu sắc nút tròn xen kẽ theo ý bạn
        if (isGalleryEditing) {
            grid.classList.add('edit-mode');
            btn.innerHTML = iconCheck; 
            btn.style.background = '#ff4d6d'; // Nền hồng hết
            btn.style.color = 'white';        // Icon màu trắng
            btn.style.borderColor = '#ff4d6d';
        } else {
            grid.classList.remove('edit-mode');
            btn.innerHTML = iconEdit; // Bút chì hình vuông
            btn.style.background = 'rgba(255, 255, 255, 0.9)'; // Nền trắng trong
            btn.style.color = '#ff4d6d';                       // Icon màu hồng
            btn.style.borderColor = '#ffb3c6';                 // Viền hồng nhạt
        }
        
        let imagesToLoad = getGalleryImages();
        
        if (currentPerson.id === 1 && !isGalleryEditing) {
            grid.classList.add('conveyor-belt');
            
            const trackTop = document.createElement('div');
            trackTop.className = 'conveyor-track track-left-to-right';
            
            const trackBottom = document.createElement('div');
            trackBottom.className = 'conveyor-track track-right-to-left';
            
            // 1. Chia ảnh cho 2 hàng
            const halfIndex = Math.ceil(imagesToLoad.length / 2);
            let topImages = imagesToLoad.slice(0, halfIndex);
            let bottomImages = imagesToLoad.slice(halfIndex);
            
            if (bottomImages.length === 0) {
                bottomImages = topImages;
            }

            const appendImagesToTrack = (trackElement, imagesArray) => {
                if (imagesArray.length === 0) return;
                imagesArray.forEach(src => {
                    const img = document.createElement('img');
                    img.className = 'gallery-item';
                    img.src = src;
                    img.addEventListener('click', () => {
                        const modal = document.getElementById('image-viewer-modal');
                        const fullImg = document.getElementById('full-size-image');
                        if (modal && fullImg) { fullImg.src = img.src; modal.classList.add('active'); }
                    });
                    trackElement.appendChild(img);
                });
            };

            // --- TẠO VÒNG LẶP VÔ TẬN ĐỒNG BỘ TUYỆT ĐỐI ---
            // 2. Nhân bản mảng gốc để dải ảnh kéo dài đủ bọc hết màn hình (ít nhất 15 ảnh mỗi nửa)
            // Việc này đảm bảo khi dịch chuyển -50%, mảng ảnh không bao giờ bị lộ khoảng trống ban đầu.
            let baseTop = [];
            let baseBottom = [];
            while(baseTop.length < 15) { baseTop = baseTop.concat(topImages); }
            while(baseBottom.length < 15) { baseBottom = baseBottom.concat(bottomImages); }

            // 3. Nạp vào đúng 2 lần (1 nửa gốc, 1 nửa bản sao) để khớp hoàn hảo với CSS -50%
            appendImagesToTrack(trackTop, baseTop);
            appendImagesToTrack(trackTop, baseTop);

            appendImagesToTrack(trackBottom, baseBottom);
            appendImagesToTrack(trackBottom, baseBottom);

            grid.appendChild(trackTop);
            grid.appendChild(trackBottom);
        }
        else {
            grid.classList.remove('conveyor-belt');
            let draggedItemIndex = null;

            imagesToLoad.forEach((src, index) => {
                const wrapper = document.createElement('div');
                wrapper.className = 'gallery-item-wrapper';
                wrapper.setAttribute('data-index', index);
                
                if (isGalleryEditing) {
                    wrapper.draggable = true;
                    
                    wrapper.addEventListener('dragstart', (e) => {
                        draggedItemIndex = index;
                        e.dataTransfer.effectAllowed = 'move';
                        setTimeout(() => wrapper.classList.add('dragging'), 0);
                    });

                    wrapper.addEventListener('dragover', (e) => {
                        e.preventDefault(); 
                        if (draggedItemIndex !== null && draggedItemIndex !== index) {
                            wrapper.classList.add('drag-over');
                        }
                    });

                    wrapper.addEventListener('dragleave', () => {
                        wrapper.classList.remove('drag-over');
                    });

                    wrapper.addEventListener('drop', (e) => {
                        e.preventDefault();
                        wrapper.classList.remove('drag-over', 'dragging');
                        if (draggedItemIndex !== null && draggedItemIndex !== index) {
                            const itemToMove = imagesToLoad.splice(draggedItemIndex, 1)[0];
                            imagesToLoad.splice(index, 0, itemToMove);
                            saveGalleryImages(imagesToLoad);
                            renderGalleryUI(btn, grid);
                        }
                        draggedItemIndex = null;
                    });
                    
                    wrapper.addEventListener('dragend', () => {
                        wrapper.classList.remove('dragging');
                        document.querySelectorAll('.gallery-item-wrapper').forEach(w => w.classList.remove('drag-over'));
                        draggedItemIndex = null;
                    });

                    wrapper.addEventListener('touchstart', (e) => {
                        draggedItemIndex = index;
                        setTimeout(() => wrapper.classList.add('dragging'), 0);
                    }, { passive: true });

                    wrapper.addEventListener('touchmove', (e) => {
                        if (draggedItemIndex === null) return;
                        e.preventDefault();
                        const touch = e.touches[0];
                        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                        document.querySelectorAll('.gallery-item-wrapper').forEach(w => w.classList.remove('drag-over'));
                        if (targetElement) {
                            const targetWrapper = targetElement.closest('.gallery-item-wrapper');
                            if (targetWrapper && targetWrapper !== wrapper) {
                                targetWrapper.classList.add('drag-over');
                            }
                        }
                    }, { passive: false });

                    wrapper.addEventListener('touchend', (e) => {
                        if (draggedItemIndex === null) return;
                        wrapper.classList.remove('dragging');
                        const touch = e.changedTouches[0];
                        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                        document.querySelectorAll('.gallery-item-wrapper').forEach(w => w.classList.remove('drag-over'));
                        if (targetElement) {
                            const targetWrapper = targetElement.closest('.gallery-item-wrapper');
                            if (targetWrapper && targetWrapper !== wrapper) {
                                const targetIndex = parseInt(targetWrapper.getAttribute('data-index'));
                                if (!isNaN(targetIndex) && draggedItemIndex !== targetIndex) {
                                    const itemToMove = imagesToLoad.splice(draggedItemIndex, 1)[0];
                                    imagesToLoad.splice(targetIndex, 0, itemToMove);
                                    saveGalleryImages(imagesToLoad);
                                    renderGalleryUI(btn, grid);
                                }
                            }
                        }
                        draggedItemIndex = null;
                    });
                }

                const img = document.createElement('img');
                img.className = 'gallery-item';
                img.src = src; 
                img.onerror = function() { this.parentElement.style.display = 'none'; };
                
                img.addEventListener('click', () => {
                    if (isGalleryEditing) return; 
                    const modal = document.getElementById('image-viewer-modal');
                    const fullImg = document.getElementById('full-size-image');
                    if (modal && fullImg) { fullImg.src = img.src; modal.classList.add('active'); }
                });

                if (isGalleryEditing) {
                    const deleteBtn = document.createElement('div');
                    deleteBtn.className = 'delete-gallery-btn';
                    deleteBtn.innerHTML = '✕';
                    deleteBtn.onclick = (e) => {
                        e.stopPropagation();
                        if (confirm("Xóa bức ảnh này khỏi album?")) {
                            imagesToLoad.splice(index, 1);
                            saveGalleryImages(imagesToLoad);
                            renderGalleryUI(btn, grid);
                        }
                    };
                    wrapper.appendChild(deleteBtn);
                }

                wrapper.appendChild(img);
                grid.appendChild(wrapper);
            });

            if (isGalleryEditing) {
                const addBtn = document.createElement('div');
                addBtn.className = 'add-gallery-btn';
                addBtn.innerHTML = '<span class="add-icon">+</span><span>Thêm</span>';
                addBtn.onclick = () => {
                    const fileInput = document.createElement('input');
                    fileInput.type = 'file';
                    fileInput.accept = 'image/*';
                    fileInput.onchange = (e) => {
                        const file = e.target.files[0];
                        if (!file) return;

                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const imgToCompress = new Image();
                            imgToCompress.onload = () => {
                                const canvas = document.createElement('canvas');
                                const MAX_SIZE = 800; 
                                let w = imgToCompress.width;
                                let h = imgToCompress.height;

                                if (w > h && w > MAX_SIZE) { h *= MAX_SIZE / w; w = MAX_SIZE; } 
                                else if (h > MAX_SIZE) { w *= MAX_SIZE / h; h = MAX_SIZE; }

                                canvas.width = w; canvas.height = h;
                                const ctx = canvas.getContext('2d');
                                ctx.drawImage(imgToCompress, 0, 0, w, h);

                                const compressedBase64 = canvas.toDataURL('image/jpeg', 0.6);
                                
                                imagesToLoad.push(compressedBase64);
                                saveGalleryImages(imagesToLoad);
                                renderGalleryUI(btn, grid); 
                            };
                            imgToCompress.src = event.target.result;
                        };
                        reader.readAsDataURL(file);
                    };
                    fileInput.click();
                };
                grid.appendChild(addBtn);
            }
        }
    }
    
    isGalleryEditing = false; 
    renderGalleryUI(editToggleBtn, galleryGrid);
}
/* ========================================================
   11. ĐIỀU KHIỂN ÂM LƯỢNG (BẬT/TẮT VÀ GHI NHỚ MỨC CŨ)
======================================================== */
const volToggleBtn = document.getElementById('vol-toggle-btn');
const volSlider = document.getElementById('vol-slider');
const volSliderPopup = document.getElementById('vol-slider-popup');
const svgVolOn = document.getElementById('svg-vol-on');
const svgVolOff = document.getElementById('svg-vol-off');

// Biến lưu giữ mức âm lượng trước khi tắt
let previousVolume = 1; 

if (volToggleBtn && volSlider) {
    // Hàm cập nhật trạng thái Icon và thanh kéo
    const updateVolumeUI = (vol) => {
        if (vol > 0) {
            svgVolOn.style.display = 'block';
            svgVolOff.style.display = 'none';
        } else {
            svgVolOn.style.display = 'none';
            svgVolOff.style.display = 'block';
        }
        volSlider.value = vol;
    };

    // 1. Nhấn nút Loa để Tắt/Mở
    volToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Không đóng popup ngay lập tức
        if (typeof playArtisticTabSound === 'function') playArtisticTabSound(); // Kêu tiếng UI
        
        if (bgMusic.volume > 0) {
            // Đang có tiếng -> Bấm là TẮT, đồng thời lưu lại mức âm đang nghe
            previousVolume = bgMusic.volume; 
            bgMusic.volume = 0;
        } else {
            // Đang bị tắt -> Bấm là MỞ LẠI mức cũ (nếu cũ là 0 thì lên thẳng max 1)
            bgMusic.volume = previousVolume > 0 ? previousVolume : 1; 
        }
        
        updateVolumeUI(bgMusic.volume);
        
        // Hiện thanh trượt trên mobile (tự động tắt khi click chỗ khác)
        volSliderPopup.classList.toggle('active');
    });

    // 2. Vuốt kéo trực tiếp trên thanh trượt
    volSlider.addEventListener('input', (e) => {
        const newVol = parseFloat(e.target.value);
        bgMusic.volume = newVol;
        
        // Chỉ ghi nhớ âm lượng nếu nó khác 0
        if (newVol > 0) previousVolume = newVol; 
        
        updateVolumeUI(newVol);
    });
    
    // Ngăn chặn việc click vào thanh trượt làm tắt luôn thẻ
    volSliderPopup.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // 3. Tự động ẩn thanh trượt đi nếu lướt chạm ra chỗ khác ngoài không gian nút loa
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.volume-wrapper')) {
            volSliderPopup.classList.remove('active');
        }
    });
}
/* ==========================================================
   AUTO-SHRINK: CHỈ THU NHỎ CHỮ KHI TÊN QUÁ DÀI
   Tên ngắn giữ nguyên 100% kích thước gốc
========================================================== */
function autoFitText(el, minPx = 14) {
    if (!el) return;
    if (el.offsetWidth === 0 && el.clientWidth === 0) return; // element đang ẩn

    // Lưu size gốc lần đầu (đo từ CSS thật, không dùng inline)
    if (!el.dataset.originalSize) {
        const prev = el.style.fontSize;
        el.style.fontSize = '';
        const computed = parseFloat(getComputedStyle(el).fontSize) || 24;
        el.dataset.originalSize = computed;
        el.style.fontSize = prev;
    }
    const maxSize = parseFloat(el.dataset.originalSize);
    if (!maxSize) return;

    // Reset về size gốc rồi đo
    el.style.fontSize = maxSize + 'px';
    void el.offsetWidth; // force reflow

    // Thu nhỏ 0.5px mỗi lần cho đến khi vừa
    let size = maxSize;
    let safety = 300;
    while (el.scrollWidth > el.clientWidth && size > minPx && safety-- > 0) {
        size -= 0.5;
        el.style.fontSize = size + 'px';
    }
}

// ─── Galaxy name: chạy mỗi khi khung chữ được hiện ra ───
const starMsgBox = document.getElementById('star-found-message');
if (starMsgBox) {
    new MutationObserver(() => {
        if (!starMsgBox.classList.contains('hidden')) {
            autoFitText(document.getElementById('star-found-name'), 14);
        }
    }).observe(starMsgBox, { attributes: true, attributeFilter: ['class'] });
}

// ─── Unlock name: chạy mỗi khi text đổi ───
const unlockNameEl = document.getElementById('unlock-name');
if (unlockNameEl) {
    new MutationObserver(() => autoFitText(unlockNameEl, 14))
        .observe(unlockNameEl, { childList: true, characterData: true, subtree: true });
}

// ─── Flower name: chạy mỗi khi text đổi ───
const flowerNameEl = document.getElementById('flower-name');
if (flowerNameEl) {
    new MutationObserver(() => autoFitText(flowerNameEl, 14))
        .observe(flowerNameEl, { childList: true, characterData: true, subtree: true });
}

// ─── Xoay màn hình / resize: chạy lại ───
let _resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(() => {
        autoFitText(document.getElementById('star-found-name'), 14);
        autoFitText(document.getElementById('unlock-name'), 14);
        autoFitText(document.getElementById('flower-name'), 14);
    }, 150);
});
/* ========================================================
   NÚT QUAY VỀ MÀN HÌNH TINH CẦU BAN ĐẦU
======================================================== */
function resetToGalaxyHome() {
    // 1. Dừng nhạc
    if (typeof bgMusic !== 'undefined') {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }

    // 2. Reset toàn bộ state
    flowerBloomed = false;
    isZooming = false;
    isDraggingGalaxy = false;
    rotVx = 0;
    rotVy = 0;
    letterState = 0;
    enteredPasscode = "";
    currentPerson = null;
    isGalleryEditing = false;

    // 3. Hiện lại canvas WebGL (đã bị ẩn khi zoom vào sao)
    const webglContainer = document.getElementById('webgl-container');
    if (webglContainer) webglContainer.style.display = 'block';

    // 4. Đưa camera về vị trí ban đầu
    if (camera) {
        const isMobile = window.innerWidth <= 768;
        camera.position.set(0, 0, isMobile ? 240 : 160);
        camera.lookAt(0, 0, 0);
    }
    if (galaxyGroup) {
        galaxyGroup.rotation.set(0, 0, 0);
    }

    // 5. Reset màn hình hoa hồng / tulip
    const flowerScreen = document.getElementById('screen-flower');
    if (flowerScreen) flowerScreen.classList.remove('theme-tulip');

    ['flower-top-title', 'flower-click-instruction', 'flower-glow'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('show');
    });

    const roseSvg = document.getElementById('flower-svg');
    if (roseSvg) {
        roseSvg.classList.remove('grow-active');
        roseSvg.style.display = 'block';
    }
    const bloomedRose = document.getElementById('bloomed-rose');
    if (bloomedRose) bloomedRose.classList.remove('sway');

    const tulipCss = document.getElementById('tulip-css-container');
    if (tulipCss) tulipCss.style.display = 'none';

    // 6. Reset phong bì thư
    const envContainer = document.getElementById('envelope-container');
    if (envContainer) envContainer.classList.remove('step-1', 'step-2', 'from-step-2');

    // 7. Đóng modal & dừng video quà tặng nếu đang mở
    const videoModal = document.getElementById('video-modal');
    if (videoModal) videoModal.classList.add('hidden');
    const musicPopup = document.getElementById('music-popup-modal');
    if (musicPopup) musicPopup.classList.add('hidden');
    const giftVideo = document.getElementById('gift-video');
    if (giftVideo) { giftVideo.pause(); giftVideo.currentTime = 0; }

    // 8. Reset mật mã & ảnh đại diện đã hiển thị
    if (typeof updateDots === 'function') updateDots(0);
    const unlockError = document.getElementById('unlock-error');
    if (unlockError) unlockError.classList.add('hidden');

    // 9. Quay lại màn hình Galaxy
    transitionTo('galaxy');

    // 10. Khởi động lại vòng lặp animation 3D
    setTimeout(() => {
        if (typeof animateGalaxy === 'function') animateGalaxy();
    }, 100);
}

// Gắn sự kiện khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('back-to-galaxy-btn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof playArtisticTabSound === 'function') playArtisticTabSound();
            resetToGalaxyHome();
        });
    }
});
/* ========================================================
   XỬ LÝ MÀN HÌNH CHỜ: ÉP FULLSCREEN & BẬT ÂM THANH
======================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');

    if (startScreen) {
        // Khi người dùng chạm/click vào bất kỳ đâu trên màn hình chờ
        startScreen.addEventListener('click', function() {
            // 1. Yêu cầu trình duyệt bật toàn màn hình
            const docEl = document.documentElement;
            if (docEl.requestFullscreen) {
                docEl.requestFullscreen().catch(err => console.log("Lỗi Fullscreen:", err));
            } else if (docEl.webkitRequestFullscreen) { /* Cho Safari cũ */
                docEl.webkitRequestFullscreen();
            } else if (docEl.msRequestFullscreen) { /* Cho IE11 */
                docEl.msRequestFullscreen();
            }

            // 2. Đánh thức AudioContext để nhạc có thể phát ngay sau đó
            if (typeof getAudioContext === 'function') {
                getAudioContext(); 
            }

            // 3. Làm mờ và ẩn màn hình chờ đi (hiệu ứng fade out)
            startScreen.classList.add('fade-out');
            
            // Xóa hẳn khỏi DOM sau khi mờ xong để không cản trở click
            setTimeout(() => {
                startScreen.style.display = 'none';
            }, 800); 
        });
    }
});