const CartInputForm = () => {
    //logic here..............
    return (
        <div className="cart-input-form">
            <form>
                <label>
                    <span>name</span>
                    <input type="text"></input>
                    <span>Price</span>
                    <input type="number"></input>
                </label>
            </form>
            <button type="submit">+</button>
        </div>
    );
};

export default CartInputForm
