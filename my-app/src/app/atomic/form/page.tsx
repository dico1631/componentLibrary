export default function FormPage(){
  return(
    <InputInt />
  )
}

interface InputIntProps {
  placeholder: string
  maxLength? : number,
};

function InputInt({ placeholder, maxLength }: InputIntProps){
  return(
    <input type="text" name="" id="" placeholder={placeholder} maxLength={maxLength}/>
  )
}

function InputFloat(){
  return(
    <input type="text" name="" id="" />
  )
}
function InputString(){}
function TextArea(){}
function DataTime(){}
function Email(){}
function Tel(){}
function CheckBox(){}
function RadioBtn(){}
function SelectBox(){}
