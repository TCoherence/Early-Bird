import React from 'react';
import { Table } from 'reactstrap';


export default class Ranking extends React.Component{

	render(){
		return(
			<div className = "container">
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Count</th>
							<th>Name</th>
							<th>UserName</th>
							<th>Profle Link</th>
						</tr>
					</thead>
					<tbody>
						
						<tr>
							<th>1</th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
						<tr>
							<th>2</th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
						<tr>
							<th>3</th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
						<tr>
							<th>4</th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</tbody>
				</Table>
			</div>

		)
	}
}