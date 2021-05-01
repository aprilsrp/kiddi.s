import Slider from "react-slick";

function Character() {
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div ClassName="">
            <div className="mx-auto">
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <style>{cssstyle}</style>
                <div className="flex justify-center">
                    <h2 className="text-3xl font-bold py-12">Choose Your Character</h2>
                </div>
                <div className="p-20">
                    <Slider {...settings}>
                        <div>
                            <img src="https://via.placeholder.com/398x500" className="p-10" alt="promo"></img>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/398x500" className="p-10" alt="promo"></img>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/398x500" className="p-10" alt="promo"></img>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/398x500" className="p-10" alt="promo"></img>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/398x500" className="p-10" alt="promo"></img>
                        </div>

                    </Slider>
                    <div className="flex justify-center">
                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Select
</button>
                    </div>
                </div>


            </div>


        </div>
    )


}
const cssstyle = `

img {
    color: #fff;
    line-height: 100px;
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

export default Character;