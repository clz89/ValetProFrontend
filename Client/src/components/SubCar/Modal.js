import React, {useEffect} from "react"
import { useNavigate } from 'react-router';


const Modal = ({vehicle, setVehicle, modalid, setModal, setFormData, formData}) => {


   
    

    const handleModal = () => {
        setModal(false)
    } 

    const handleChange = event => {
        if(event.target.name!=="vcolor" && event.target.name!=="vmake"){
        setFormData({
        name: event.target.name,
        value: event.target.value
        }) 
        setModal(false)
        }else{
        const name1 = event.target.name
        const evt = event.target.value
        if(name1==="vcolor"){
        vehicle.vmake=formData.vmake ? formData.vmake : ""
        vehicle.vcolor=evt
        setVehicle(vehicle)
        console.log(vehicle)
        setFormData({
            name: event.target.name,
            value: event.target.value
            }) 
        setModal(false)  
    }else if(name1==="vmake"){
        vehicle.vcolor=formData.vcolor ?formData.vcolor : ""
        vehicle.vmake=evt
        setVehicle(vehicle)
        console.log(vehicle)
        setFormData({
            name: event.target.name,
            value: event.target.value
            })
          setModal(false)  
    }    

        }
       }
     
    return (
        <div className='backshadow' onClick={handleModal}>
            <div className='custom-modal' onClick={(e) => e.stopPropagation()}>
                
                {modalid==="vcolor" &&(
                <div className="vcolor">
                    <button name="vcolor" value="White" onClick={handleChange}>White</button>
                    <button name="vcolor"  value="Black" onClick={handleChange} >Black</button>
                    <button name="vcolor"  value="Gray" onClick={handleChange} >Gray</button>
                    <button name="vcolor"  value="Silver" onClick={handleChange} >Silver</button>
                    <button name="vcolor"  value="Blue" onClick={handleChange} >Blue</button>
                    <button name="vcolor"  value="Red" onClick={handleChange} >Red</button>
                    <button name="vcolor"  value="Green" onClick={handleChange} >Green</button>
                    <button name="vcolor"  value="Tan" onClick={handleChange} >Tan</button>
                    <button name="vcolor"  value="Brown" onClick={handleChange} >Brown</button>
                    <button name="vcolor"  value="Burgundy" onClick={handleChange} >Burgundy</button>
                    <button name="vcolor"  value="Purple" onClick={handleChange} >Purple</button>
                    <button name="vcolor"  value="Pink" onClick={handleChange} >Pink</button>
                </div>)}

                {modalid==="vmake" &&(
                <div className="make" onClick={handleModal}>
                    <div  >
                    &nbsp;  A : &nbsp;
                    <button className="vmakebtn" name="vmake" value="Acura" onClick={handleChange}>Acura</button>
                    <button className="vmakebtn"  name="vmake"  value="Alfa Romeo" onClick={handleChange} >Alfa Romeo</button>
                    <button className="vmakebtn"  name="vmake"  value="Audi" onClick={handleChange} >Audi</button>
                    </div>
                    <div >
                    &nbsp; B : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="BMW" onClick={handleChange} >BMW</button>
                    <button className="vmakebtn"  name="vmake"  value="Bentley" onClick={handleChange} >Bentley</button>
                    <button className="vmakebtn"  name="vmake"  value="Buick" onClick={handleChange} >Buick</button>
                    </div>
                    <div  >
                    &nbsp; C : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Cadillac" onClick={handleChange} >Cadillac</button>
                    <button className="vmakebtn"  name="vmake"  value="Chevrolet" onClick={handleChange} >Chevrolet</button>
                    <button className="vmakebtn"  name="vmake"  value="Chrysler" onClick={handleChange} >Chrysler</button>
                    </div>
                    <div className="makediv">
                    <div  >
                    &nbsp;  D : &nbsp;
                    <button className="vmakebtn"    name="vmake"  value="Dodge" onClick={handleChange} >Dodge</button>
                    </div>
                    <div  >
                    &nbsp; F : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Fiat" onClick={handleChange} >Fiat</button>
                    <button className="vmakebtn"  name="vmake"  value="Ford" onClick={handleChange} >Ford</button>
                    </div>
                    </div>
                    <div >
                    &nbsp; G : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="GMC" onClick={handleChange} >GMC</button>
                    <button className="vmakebtn"  name="vmake"  value="Genesis" onClick={handleChange} >Genesis</button>
                    </div>
                    <div >
                    &nbsp; H : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Honda" onClick={handleChange} >Honda</button>
                    <button className="vmakebtn"  name="vmake"  value="Hyundai" onClick={handleChange} >Hyundai</button>
                    </div>
                    <div className="makediv">
                    <div >
                    &nbsp; I : &nbsp;&nbsp;&nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Infiniti" onClick={handleChange} >Infiniti</button>
                    </div>
                    <div >
                    &nbsp;&nbsp;&nbsp; J : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Jaguar" onClick={handleChange} >Jaguar</button>
                    <button className="vmakebtn"  name="vmake"  value="Jeep" onClick={handleChange} >Jeep</button>
                    </div>
                    </div>
                    <div className="makediv">
                    <div className="vmakedivK" >
                    &nbsp;  K : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Kia" onClick={handleChange} >Kia</button>
                    </div>
                    
                    <div >
                    &nbsp; L : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Land Rover" onClick={handleChange} >Land Rover</button>
                    <button className="vmakebtn"  name="vmake"  value="Lexus" onClick={handleChange} >Lexus</button>
                        
                    <button className="vmakebtn"  name="vmake"  value="Lincoln" onClick={handleChange} >Lincoln</button>
                    <button className="vmakebtn"  name="vmake"  value="Lotus" onClick={handleChange} >Lotus</button>
                    </div>
                    </div>
                    <div >
                    &nbsp; M : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Maserati" onClick={handleChange} >Maserati</button>
                    <button className="vmakebtn"  name="vmake"  value="Mazda" onClick={handleChange} >Mazda</button>
                    <button className="vmakebtn"  name="vmake"  value="Mercedes-Benz" onClick={handleChange} >Mercedes-Benz</button>
                    <button className="vmakebtn"  name="vmake"  value="Mercury" onClick={handleChange} >Mercury</button>
                    <button className="vmakebtn"  name="vmake"  value="Mini" onClick={handleChange} >Mini</button>
                    <button className="vmakebtn"  name="vmake"  value="Mitsubishi" onClick={handleChange} >Mitsubishi</button>
                    </div>
                    <div >
                    &nbsp; N : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Nissan" onClick={handleChange} >Nissan</button>
                    </div>
                    <div >
                    &nbsp; P : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Polestar" onClick={handleChange} >Polestar</button>
                    <button className="vmakebtn"  name="vmake"  value="Pontiac" onClick={handleChange} >Pontiac</button>
                    <button className="vmakebtn"  name="vmake"  value="Porsche" onClick={handleChange} >Porsche</button>
                    </div>
                    <div >
                    &nbsp;&nbsp;R : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Ram" onClick={handleChange} >Ram</button> 
                    <button className="vmakebtn"  name="vmake"  value="Range-Rover" onClick={handleChange} >Range-Rover</button>                   
                    <button className="vmakebtn"  name="vmake"  value="Rivian" onClick={handleChange} >Rivian</button>
                    
                    <button className="vmakebtn" name="vmake"  value="Rolls-Royce" onClick={handleChange} >Rolls-Royce</button>
                    </div>
                    <div >
                    &nbsp; S : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Saab" onClick={handleChange} >Saab</button>
                    <button className="vmakebtn"  name="vmake"  value="Saturn" onClick={handleChange} >Saturn</button>
                    <button className="vmakebtn"  name="vmake"  value="Scion" onClick={handleChange} >Scion</button>
                    <button className="vmakebtn"  name="vmake"  value="Smart" onClick={handleChange} >Smart</button>
                    <button className="vmakebtn"  name="vmake"  value="Subaru" onClick={handleChange} >Subaru</button>
                    <button className="vmakebtn"  name="vmake"  value="Suzuki" onClick={handleChange} >Suzuki</button>
                    </div>
                    <div >
                    &nbsp; T : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Tesla" onClick={handleChange} >Tesla</button>
                    <button className="vmakebtn"  name="vmake"  value="Toyota" onClick={handleChange} >Toyota</button>
                    </div>
                    <div >
                       &nbsp; V : &nbsp;
                    <button className="vmakebtn"  name="vmake"  value="Volkswagen" onClick={handleChange} >Volkswagen</button>
                    <button className="vmakebtn"  name="vmake"  value="Volvo" onClick={handleChange} >Volvo</button>
                        </div>
                    </div>)}

                {modalid==="price" &&(
                <div className="price">
                    <button name="price" value="$44" onClick={handleChange}>$44</button>
                    <button name="price"  value="$20" onClick={handleChange} >$20</button>
                    <button name="price"  value="$10" onClick={handleChange} >$10</button>
                    <button name="price"  value="$7" onClick={handleChange} >$7</button>
                    <button name="price"  value="$17" onClick={handleChange} >$17</button>
                    <button name="price"  value="$15" onClick={handleChange} >$15</button>
                    <button name="price"  value="$14" onClick={handleChange} >$14</button>
                    <button name="price"  value="$13" onClick={handleChange} >$13</button>
                    <button name="price"  value="$12" onClick={handleChange} >$12</button>
                    <button name="price"  value="Hosted1" onClick={handleChange} >Hosted1</button>
                    <button name="price"  value="Hosted2" onClick={handleChange} >Hosted2</button>
                    <button name="price"  value="Hosted3" onClick={handleChange} >Hosted3</button>
                    <button name="price"  value="Hosted4" onClick={handleChange} >Hosted4</button>
                    <button name="price"  value="Hosted5" onClick={handleChange} >Hosted5</button>
                    <button name="price"  value="Comp" onClick={handleChange} >Comp</button>
                </div>)}
            </div>  
        </div>
    )
}
export default Modal;