let slider = tns({
    constainer : ".slider",
    "slideBy": 5,
    "speed" : 500,
    "nav" : false,
    controlContainer: "#controls",
    prevButton : ".left",
    nextButton : ".right",
    responsive : {
        1600: {
            items : 5,
            gutter : 20
        },
        1024: {
            items: 5,
            gutter : 20
        }, 
    }
}) 