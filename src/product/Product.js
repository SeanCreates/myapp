import "./Product.css"


function Product({ details }) {
    const tags = details.tags.map(tag =>
        <div className="black-owned">
            {tag}
        </div>
    );
    return (
        <div>
            <div className="faded">
                <img className="size" src={details.img}>

                </img>

                <div className="safirii">
                    <p className="safirii-title">
                        {details.name}
                    </p>
                    <p>
                        {details.attribute}
                    </p>

                    <p>
                        {details.price}
                    </p>

    

                    <div className="tag-parent">
                        {tags}
                    </div>

                </div>
            </div>



        </div>
    )
}
export default Product;