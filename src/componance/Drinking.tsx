import React ,{ useState ,useEffect} from "react"
import '../style/Style.css';
interface DrinkingProps {
    isToggled : boolean;
}

function Drinking({isToggled}:DrinkingProps) {
    const [weight,setWeight] = useState<number>(0);


    const onChangeWeight =(e: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(Number(e.target.value));
    }
    const howMuchwater = (
        weight * 2.2 * (30/2)
    ).toFixed(2);

    useEffect(()=> {
        document.body.style.color = isToggled ? '#ffffff' : '#000000';    
      },[isToggled]);    

    return (
        <div >
            <div>
                <h1>ควรดื่มน้ำวันละเท่าไหร่ ? </h1>
                <h1>{howMuchwater} มล.</h1>
            </div>
            <form className="form">
                <input className="weight" type="number" id="weight" placeholder="น้ำหนักของคุณ (กิโลกรัม)" onChange ={onChangeWeight}
                style={{
                    backgroundColor: isToggled ? '#000000' : '#ffffff',
                    color: isToggled ? '#ffffff' : '#000000',
                    border: `2px solid ${isToggled ? '#ffffff' : '#000000'}`,
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width : '300px',
                    height : '50px',
                  }}/>
                {/* <button type="submit"></button> */}
            </form>

        </div>
    )
}

export default Drinking