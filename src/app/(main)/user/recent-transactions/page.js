import React from "react"
import Transaction from "./Transaction"

function RecentTransaction() {
	return (
		<div className="dash-wrapsw card border-0 rounded-4">
			<div className="card-header">
				<h3 className="theme-color p-2">Order History</h3>
			</div>
			<div className="card-body">
				<Transaction />
			</div>
		</div>
	)
}

export default RecentTransaction
