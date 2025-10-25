
import { useState } from "react";
import axios from "axios";
import "./admincss/Edu.css";


function Education() {
    const [nameofeducation,setNameofeducation]=useState("");
    const [nameofinstitution,setNameofinstitution]=useState("");
    const [startyear,setStartyear]=useState("");
    const [endyear,setEndyear]=useState("");
    const [percentage,setPercentage]=useState("");

    function handleSumbit(){
        const eduData={
            nameofeducation,
            nameofinstitution,
            startyear,
            endyear,
            percentage
        }
        
        try {
            axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/api/educations`, eduData)
            .then((res) => {
                console.log("Education data saved:", res.data);
            })
            .catch((err) => {
                console.error("Error saving education data:", err);
            });
        } catch (error) {
            console.error("Unexpected error:", error);
        }
        }
   

    
    return(
        <div className="form">
            <label>Name of study</label>
            <input type="text" onChange={(e)=>setNameofeducation(e.target.value)} placeholder="Enter the name of study" />
            <label>Institution</label>
            <input type="text" onChange={(e)=>setNameofinstitution(e.target.value)} placeholder="Enter the institution name" />
            <label>Start Year</label>
            <input type="text" onChange={(e)=>setStartyear(e.target.value)} placeholder="Enter the start year" />
            <label>End Year</label>
            <input onChange={(e)=>setEndyear(e.target.value)} type="text" placeholder="Enter the end year" />
            <label>Percentage/CGPA</label>
            <input onChange={(e)=>setPercentage(e.target.value)} type="text" placeholder="Enter the percentage or CGPA" />
            <button type="submit"  onClick={handleSumbit} className="save-btn">
                💾 Save
            </button>
        </div>
    )
}
export default Education;   