import React, { useState, useEffect } from "react";
import "../assets/styles/pages.scss";
import twitter from "../assets/images/twitter.png"
import telegram from "../assets/images/telegram.png"
import youtube from "../assets/images/youtube.png"
import { useContractRead, useContractWrite } from 'wagmi'
import tokenAbi from "../assets/abi/tokenAbi";
import { useConnect, useAccount } from 'wagmi'
import { ethers } from "ethers"
import abi from "../assets/abi/abi";
import "../hide.css"

function Hero(props) {
  const { address } = useAccount()
  const [bnbAmount, setBNBAmount] = useState(0)
  

  const { data, isError, isLoading, error } = useContractRead({
    address: "0x4A46CE1EDC0f2d53627c2beC833C2e9f6f9161A3",
    abi: tokenAbi,
    functionName: 'balanceOf',
    args: [address]
  })

  const { data: writeData, isLoading: writeIsloadingPurchase, isSuccess: purchaseSuccess, status: statusPurchase, error: claimErrorPurchase, write: buy } = useContractWrite({
    address: '0x76F14aDE8824245Afcfd5EAEfD6B57033dB84955',
    abi: abi,
    functionName: 'buy',
    value: ethers.utils.parseEther(bnbAmount.toString())
  })

  const { data: writeDataPurchase, isLoading: writeIsloading, isSuccess, status, error: claimError, write } = useContractWrite({
    address: '0x76F14aDE8824245Afcfd5EAEfD6B57033dB84955',
    abi: abi,
    functionName: 'airdrop',
    value: ethers.utils.parseEther('0.005')
  })


  return (
    <>

<div className="container mt-5 suppply" >
        <h2>Supply Chain Management</h2>

        <div className="card mt-4">
            <div className="card-header">Create Product</div>
            <div className="card-body">
                <form id="createProductForm">
                    <div className="mb-3">
                        <label for="productName" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="productName" placeholder="Enter product name"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Create Product</button>
                </form>
            </div>
        </div>

        <div className="card mt-4">
            <div className="card-header">Update Product State</div>
            <div className="card-body">
                <form id="updateProductStateForm">
                    <div className="mb-3">
                        <label for="productId" className="form-label">Product ID</label>
                        <input type="number" className="form-control" id="productId" placeholder="Enter product ID"/>
                    </div>
                    <div className="mb-3">
                        <label for="productState" className="form-label">New State</label>
                        <select className="form-select" id="productState">
                            <option value="0">Produced</option>
                            <option value="1">Processed</option>
                            <option value="2">Packaged</option>
                            <option value="3">ForSale</option>
                            <option value="4">Sold</option>
                            <option value="5">Shipped</option>
                            <option value="6">Received</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Update State</button>
                </form>
            </div>
        </div>

        <div className="card mt-4">
            <div className="card-header">Transfer Product Ownership</div>
            <div className="card-body">
                <form id="transferProductOwnershipForm">
                    <div className="mb-3">
                        <label for="productIdTransfer" className="form-label">Product ID</label>
                        <input type="number" className="form-control" id="productIdTransfer" placeholder="Enter product ID"/>
                    </div>
                    <div className="mb-3">
                        <label for="newOwner" className="form-label">New Owner Address</label>
                        <input type="text" className="form-control" id="newOwner" placeholder="Enter new owner address"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Transfer Ownership</button>
                </form>
            </div>
        </div>

        <div className="card mt-4">
            <div className="card-header">Register Material</div>
            <div className="card-body">
                <form id="registerMaterialForm">
                    <div className="mb-3">
                        <label for="materialId" className="form-label">Material ID</label>
                        <input type="text" className="form-control" id="materialId" placeholder="Enter material ID"/>
                    </div>
                    <div className="mb-3">
                        <label for="materialDescription" className="form-label">Material Description</label>
                        <input type="text" className="form-control" id="materialDescription" placeholder="Enter material description"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Register Material</button>
                </form>
            </div>
        </div>

    
        <div className="card mt-4">
            <div className="card-header">Verify Supplier</div>
            <div className="card-body">
                <form id="verifySupplierForm">
                    <div className="mb-3">
                        <label for="materialIdVerify" className="form-label">Material ID</label>
                        <input type="text" className="form-control" id="materialIdVerify" placeholder="Enter material ID"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Verify Supplier</button>
                </form>
            </div>
        </div>

        <div className="card mt-4">
            <div className="card-header">Update Material Status</div>
            <div className="card-body">
                <form id="updateMaterialStatusForm">
                    <div className="mb-3">
                        <label for="materialIdStatus" className="form-label">Material ID</label>
                        <input type="text" className="form-control" id="materialIdStatus" placeholder="Enter material ID"/>
                    </div>
                    <div className="mb-3">
                        <label for="newStatus" className="form-label">New Status</label>
                        <input type="text" className="form-control" id="newStatus" placeholder="Enter new status"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Update Status</button>
                </form>
            </div>
        </div>

    
        <div className="card mt-4 ss">
            <div className="card-header">Execute Payment</div>
            <div className="card-body">
                <form id="executePaymentForm">
                    <div className="mb-3">
                        <label for="materialIdPayment" className="form-label">Material ID</label>
                        <input type="text" className="form-control" id="materialIdPayment" placeholder="Enter material ID"/>
                    </div>
                    <div className="mb-3">
                        <label for="amount" className="form-label">Amount</label>
                        <input type="number" className="form-control" id="amount" placeholder="Enter payment amount"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Execute Payment</button>
                </form>
            </div>
        </div>
    </div>

    </>

  );
}

export default Hero;
