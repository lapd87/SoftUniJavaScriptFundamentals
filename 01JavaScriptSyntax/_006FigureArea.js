function area(w, h, W, H) {

    let [s1, s2, s3] = [w * h, W * H,
        Math.min(w, W) * Math.min(h, H)];

    console.log(s1 + s2 - s3);
}

area(2, 4, 5, 3);
area(13, 2, 5, 8);