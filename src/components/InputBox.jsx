import React from 'react'

const InputBox = ({
    lable = "Default",
    amount = 1,
    currencyOption = ['Nope'],
    setFrom, setTo, setAmount, converter, from, to, disabled
}) => {
    return (
        <>
            <div className="inputs">
                <div className="first">
                    <label>{lable}</label>
                    <input type="number"
                        disabled={disabled ? true : false}
                        value={amount ? amount : "Amount"}
                        placeholder="Amount"
                        onChange={(e) => {
                            if (e.target.value === "") {
                                setAmount("")
                                converter()
                            } else {
                                Number(setAmount(e.target.value))
                                converter()
                            }

                        }}
                    />
                </div>
                <div className="second">
                    <label >Currency Type</label>
                    <select value={lable == "From" ? from : to} onChange={(e) => {
                        if (lable == "From") {
                            setFrom(e.target.value)
                        } else {
                            setTo(e.target.value)
                        }
                    }}>
                        {currencyOption.map((elm) => (<option key={elm} value={elm}>{elm.toUpperCase()}</option>))}

                    </select>
                </div>
            </div >
        </>
    )
}

export default InputBox