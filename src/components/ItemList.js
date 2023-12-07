import { CDN_URL } from "../utils/constant";

const ItemList = (props) => {
    const {name,imageId, description, price, defaultPrice} = props?.data?.info;
    // console.log(props);

    const dummy = props?.dummy;
    console.log(dummy);
    return (
        <div className="border-bottom text-left flex justify-between">
            <div className="w-9/12">
                <div className="text-sm mt-2">
                    <span>
                        {name}
                    </span>
                    <span>
                    - ₹
                    {price? price/100 :defaultPrice/100}
                </span>
                </div>
                <p className="text-xs text-slate-500">{description}</p>
            </div>
            <div className="w-3/12">
                <div className="absolute">
                    <button className="p-1 mx-3 my-3 rounded-lg bg-black text-white shadow-lg text-sm">
                        Add+
                    </button>
                </div>
                <img src={CDN_URL + imageId} className="w-full p-2"></img>
            </div>
        </div>
    );
}

export default ItemList;