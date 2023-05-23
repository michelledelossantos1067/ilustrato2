import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from '../asset/letra-d.png'
import '../components/Navbar.css'




const Home = () => {
    return (
        <div>
            <div className='container'>


            </div>
            <div className='bost container-fluid text-white text-center'>
                <img src={bootstrap} className='img' style={{ width: '200px' }} />
                <h1 className='display text-white'>ILLUSTRATORS AGENCY.</h1>
                <p className='h4'>
                    HERE YOU WILL FIND THE ARTISTS ON WHICH OUR LOOK HAS STOPPED.
                    <br />The illustrator is in charge of creating faithful visual representations or transformations of the reality of ideas, concepts, characters and situations that will be a central part of different supports.</p>
                <input type='text' placeholder='Buscar....' className='w-50 p-2 rounded border border-none gap-2 ' />
                <input type='submit' className='p-2 rounded border border-none btn btn-outline-primary btn-lg col-2' />

            </div>



            <div className='fondo'>

            </div>

        </div>
    )
}
export default Home