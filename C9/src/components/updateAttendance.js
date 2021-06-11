import NavBar from "./user-navbar";
import ReactFontLoader from 'react-font-loader';
import * as React from 'react'
import TextField from '@material-ui/core/TextField';
import { useParams } from 'react-router-dom'

const UpdateAttendance = () => {

    var { id } = useParams()
    const [sid, setSId] = React.useState(null)
    const [cid, setCId] = React.useState(null)
    const [date, setDate] = React.useState(null)

    const onDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://34.136.140.158:4000/updateattend/od?sid=${sid}&fid=${id}&cid=${cid}&date=${date}`)
            .then(response => response.json())
            .catch(err => console.error(err))

        fetch(`http://34.136.140.158:4000/updateattendance/od?sid=${sid}&fid=${id}&cid=${cid}`)
            .then(response => response.json())
            .catch(err => console.error(err))
    }

    return (
        <div>{console.log(date)}
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap' />
            <NavBar message={"faculty"} fid={id} />
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '90vh', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Student ID</label>
                    <input required style={{ marginLeft: '0', width: '12vw' }} type="text" id="" className="form-attendance" placeholder="SId" value={sid} onChange={(e) => setSId(e.target.value)}></input>
                </div>
                <div style={{ marginTop: '1vh' }}>
                    <label >Course ID</label><br></br>
                    <input required style={{ marginLeft: '0', width: '12vw' }} type="text" id="" className="form-attendance" placeholder="CId" value={cid} onChange={(e) => setCId(e.target.value)}></input>
                </div>
                <div style={{ marginTop: '1vh' }}>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        required
                        value={date}
                        onChange={onDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <button type='submit' style={{ marginTop: '3vh', height: '5vh', width: '5vw', backgroundColor: 'rgb(60,60,60)', fontFamily: 'Kosugi Maru', border: '0', borderRadius: '4px', color: 'white' }}>Update</button>
            </form>
        </div>

    );
}

export default UpdateAttendance;