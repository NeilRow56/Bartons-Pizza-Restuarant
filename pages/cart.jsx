
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, dispatch, options, showSpinner]);
  return (<>
          { (showSpinner && isPending) && <div className="spinner" /> }
          <PayPalButtons
              style={style}
              disabled={false}
              forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                  return actions.order
                      .create({
                          purchase_units: [
                              {
                                  amount: {
                                      currency_code: currency,
                                      value: amount,
                                  },
                              },
                          ],
                      })
                      .then((orderId) => {
                          // Your code here after create the order
                          return orderId;
                      });
              }}
              onApprove={function (data, actions) {
                return actions.order.capture().then(function (details) {
                  const shipping = details.purchase_units[0].shipping;
                  createOrder({
                    customer: shipping.name.full_name,
                    address: shipping.address.address_line_1,
                    total: cart.total,
                    method: 1,
                  });
                });
              }}
            />
          </>
        );
      };

  return (
    <>
    <div className=' flex max-w-[1440px] mx-auto h w-full   flex-col lg:flex-row'>
        <div className=' pt-36 sm:ml-5 w-full md:flex md:flex-col hidden md: max-w-[800px]'>
         <table className='w-full mb-3 '>
           <thead className='text-left  '>
             <tr>
             <th className=''>Product</th>
             <th>Name</th>
             <th>Extras</th>
             <th>Price $</th>
             <th>Quantity</th>
             <th>Total</th>
             </tr>
           </thead>
           <tbody className=''>
           {cart.products.map((product) => (
           <tr className='' key = {product._id}>
             <td>
               <div className='relative  w-[100px] h-[100px] mt-5' >
               
                 <Image alt="Product" src={product.img} layout="fill" objectFit="cover" />
               </div>
             </td>
             <td >
               <span className='text-[#d1411e] font-semibold'>{product.title}</span>
             </td>
             <td>

               <span className=''>
                 {product.extras.map((extra) => (
                   <span key={extra._id}>{extra.text}, </span>
                 ))}
                 </span>
             </td>
             <td>
               <span className=''>{product.price}</span>
             </td>
             <td className='text-center'>
               <span className=''>{product.quantity}</span>
             </td>
             <td>
               <span className='font-semibold'>${product.price * product.quantity}</span>
             </td>
           </tr>
           ))}
           </tbody>
          </table>   

        </div>
        <div className='max-w-[440px] mt-24 mb-5  flex-col bg-gray-700 text-white w-full mx-auto text-center'>
          
          <h2 className='py-10'>CART TOTAL</h2>
           <div className='flex flex-col'>
        <div className='flex w-full text-left py-5'>
        <span className='font-bold ml-36 '>Subtotal</span><h4 className='ml-2'>${cart.total}</h4>
        </div>
        <div className='flex w-full text-left pb-5'>
        <span className='font-bold ml-36'>Discount</span><h4 className='ml-2'>$0.00</h4>
        </div>
        <div className='flex w-full text-left'>
        <span className='font-bold ml-36'>Total</span><h4 className='ml-2 font-semibold'>${cart.total}</h4>
        </div>
        <div className='items-center'>
          {open ? (
            <div>
              <button className='w-full my-4 rounded-md py-2'>CASH ON DELIVERY</button>
            <PayPalScriptProvider
            options={{
                "client-id":
                "ATE8UB4DbTf_dOQezlmSZCFnpruOpZ333rvPTMXvxGQvEtNKwFWC9Y86J1nyARC4_wI-u8vnWzhbb_m_"
                ,
                components: "buttons",
                currency: "USD",
                "disable-funding": "credit,card,p24",
            }}
        >
            <ButtonWrapper
                currency={currency}
                showSpinner={false}
                
             
            />
            </PayPalScriptProvider>
            </div>
              ) : (
            <button onClick={() => setOpen(true)} className='my-5 w-[150px] '>CHECKOUT</button>
          )}
        
        
        </div>
        </div>
        </div>
       
        
    </div>
    </>
  )
}

export default Cart