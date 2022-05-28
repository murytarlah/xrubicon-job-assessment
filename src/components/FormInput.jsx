import { useState } from 'react';
import { Icon } from '@iconify/react';
import '../styles/FormInput.scss';

const FormInput = (props) => {
	const [value, setValue] = useState(props.value);

	const [toggle, setToggle] = useState(props.toggle);
	const handleToggle = () => {
		setToggle(!toggle);
	};


  return (
		<div className={`formControl ${props.type}`}>
			{props.label && <label htmlFor={props.label.toLowerCase()}>{props.label}</label>}
			<div>
				<input type={ 
					props.type ==='password' && toggle 
						? props.type: 
						props.type !=='password' ? props.type:'text'} checked={props.checked}  disabled={props.type === 'radio' ? true: false}
						 name={props.name} placeholder={props.placeholder} id={props.label.toLowerCase()} value={value} onChange={(e) => setValue(e.target.value)}/>	
				<span>
				<Icon icon={
					typeof props.icon === 'string'
						? props.icon:
					toggle ? props.icon[0]:props.icon[1]
				} onClick={ handleToggle}/>
				</span>
			</div>
		</div>
	);
}
 
export default FormInput;

FormInput.defaultProps = {
	name: 'InputSample',
	type: 'text',
	placeholder: 'your text here',
	icon: '',
	label: '',
	toggle: false
}