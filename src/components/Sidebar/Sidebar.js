import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [email, setEmail] = useState('ongsuwannoo_255556@gmail.com')
    const checkEmail = () => {
        console.log(email)
        if (email.length >= 25) {
            setEmail(email.substr(0, 24) + '.....')
        }

    }
    useEffect(() => {
        checkEmail()
    })

    return (
    <div id="admin_sidebar" className="bg-gray-900 text-white">
            <h1 className="font-bold text-2xl py-8 text-center" >Marketry</h1>
            <h4 className="font-bold text-center">Jakkrapat Suwanno</h4>
            <h5 className="text-center text-xs">{email}</h5>
            <div className="mt-12">
                <Link to='/admin'>
                    <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
                        <i class="fas fa-home"></i>  Home</div>
                </Link>
                <Link to='/admin/product'>
                    <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
                        <i class="fas fa-box"></i>  Product</div>
                </Link>
                <Link to='/admin/promotion'>
                    <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
                        <i class="fas fa-dollar-sign"></i>  Promotion</div>
                </Link>
                <Link to='/admin/order'>
                    <div className="rounded px-10 py-2 m-2 hover:bg-blue-600 active:bg-blue-600">
                        <i class="fas fa-shopping-cart"></i>  Order</div>
                </Link>
            </div>
        </div>
    )
}
export default Sidebar;