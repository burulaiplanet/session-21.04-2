import './Block.css'

function Block(props) {
    
	if (props.block === 'yellow') {
		return <div style={{ backgroundColor:"yellow" }}></div>
	} else if (props.block === 'green') {
		return <div style={{ backgroundColor:"green" }}></div>
	} else if (props.block === 'color') {
		return <div style={{ backgroundColor:'lime'}}></div>
	} else {
	 	return <div style={{ backgroundColor:'red' }}></div>
	}
}

export default Block
