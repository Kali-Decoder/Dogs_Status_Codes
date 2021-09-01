var array=[
    'https://httpstatusdogs.com/img/100.jpg','https://httpstatusdogs.com/img/200.jpg','https://httpstatusdogs.com/img/201.jpg','https://httpstatusdogs.com/img/202.jpg','https://httpstatusdogs.com/img/203.jpg','https://httpstatusdogs.com/img/204.jpg','https://httpstatusdogs.com/img/206.jpg','https://httpstatusdogs.com/img/207.jpg',
    'https://httpstatusdogs.com/img/208.jpg','https://httpstatusdogs.com/img/226.jpg',
    'https://httpstatusdogs.com/img/300.jpg','https://httpstatusdogs.com/img/301.jpg',
    'https://httpstatusdogs.com/img/302.jpg','https://httpstatusdogs.com/img/303.jpg',
    'https://httpstatusdogs.com/img/304.jpg','https://httpstatusdogs.com/img/305.jpg',
    'https://httpstatusdogs.com/img/306.jpg','https://httpstatusdogs.com/img/307.jpg',
    'https://httpstatusdogs.com/img/308.jpg','https://httpstatusdogs.com/img/400.jpg',
    'https://httpstatusdogs.com/img/401.jpg','https://httpstatusdogs.com/img/402.jpg','https://httpstatusdogs.com/img/403.jpg','https://httpstatusdogs.com/img/404.jpg','https://httpstatusdogs.com/img/405.jpg','https://httpstatusdogs.com/img/406.jpg','https://httpstatusdogs.com/img/407.jpg','https://httpstatusdogs.com/img/408.jpg',
    'https://httpstatusdogs.com/img/409.jpg','https://httpstatusdogs.com/img/410.jpg','https://httpstatusdogs.com/img/411.jpg','https://httpstatusdogs.com/img/412.jpg','https://httpstatusdogs.com/img/413.jpg','https://httpstatusdogs.com/img/414.jpg',
    'https://httpstatusdogs.com/img/416.jpg','https://httpstatusdogs.com/img/417.jpg',
    'https://httpstatusdogs.com/img/418.jpg','https://httpstatusdogs.com/img/420.jpg',
    'https://httpstatusdogs.com/img/422.jpg','https://httpstatusdogs.com/img/423.jpg',
    'https://httpstatusdogs.com/img/424.jpg','https://httpstatusdogs.com/img/425.jpg',
    'https://httpstatusdogs.com/img/426.jpg','https://httpstatusdogs.com/img/429.jpg',
    'https://httpstatusdogs.com/img/431.jpg','https://httpstatusdogs.com/img/444.jpg',
    'https://httpstatusdogs.com/img/450.jpg','https://httpstatusdogs.com/img/451.jpg',
    'https://httpstatusdogs.com/img/494.jpg','https://httpstatusdogs.com/img/501.jpg',
    'https://httpstatusdogs.com/img/500.jpg','https://httpstatusdogs.com/img/502.jpg',
    'https://httpstatusdogs.com/img/503.jpg','https://httpstatusdogs.com/img/504.jpg',
    'https://httpstatusdogs.com/img/506.jpg','https://httpstatusdogs.com/img/507.jpg',
    'https://httpstatusdogs.com/img/508.jpg','https://httpstatusdogs.com/img/509.jpg',
    'https://httpstatusdogs.com/img/510.jpg'
];

var sho=document.querySelector(".sho");
array.forEach((ele)=>{
    var div=`<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <img src="${ele}" style="width: 100%; object-fit: cover;" alt="">
    </div>`;
    sho.innerHTML+=div;
})