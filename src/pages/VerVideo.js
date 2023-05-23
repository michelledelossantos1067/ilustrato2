import ReactPlayer from "react-player";
import '../components/Navbar.css'

const VerVideo = () => {

return(
    <div style={{width:'100%',height:'100%',position:"absolute",display:'flex'}}>
    <ReactPlayer
        url={require('../asset/Grabación de pantalla 2023-05-14 a la(s) 7.30.22 p. m..mov')
        } width='30%'
        height='50%'
        controls
    />
    <div className="card fload-end w-25 h-50">
         <ReactPlayer
        url={require('../asset/Grabación de pantalla 2023-05-14 a la(s) 7.30.22 p. m..mov')
        } width='100%'
        height='150%'
        controls
    />
    </div>
    
</div>

)

}
export default VerVideo