import Slider from "react-slick";

function RenderCharacter(props) {
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500
    };

    return (
        <div ClassName="">
            <div ClassName="mx-auto relative">
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <style>{cssstyle}</style>
                <div className="flex justify-center z-20 static">
                    <img src={props.skin} className="p-1" alt="promo"></img>
                </div>
                <div className="p-20 z-10">
                    <Slider {...settings}>
                        <div>
                            <img src="https://i.imgur.com/jqLRpd2.png" className="p-10" alt="promo"></img>
                        </div>
                        <div>
                            <img src="https://i.imgur.com/THEq4Uu.jpg" className="p-10" alt="promo"></img>
                        </div>
                        <div>
                            <img src="https://i.imgur.com/THEq4Uu.jpg" className="p-10" alt="promo"></img>
                        </div>
                        <div>
                            <img src="https://i.imgur.com/THEq4Uu.jpg" className="p-10" alt="promo"></img>
                        </div>
                        <div>
                            <img src="https://i.imgur.com/THEq4Uu.jpg" className="p-10" alt="promo"></img>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>

    )
}
const cssstyle = `

img {
    line-height: 20vh;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
.center .slick-center img {
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
}
.center img {
    transition: all .3s ease;
}
`
export default RenderCharacter;