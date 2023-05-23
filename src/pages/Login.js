import '../components/Navbar.css'

const Login = () => {

    return (
        <div>
            <form>
                <div className=' container-fluid bg-dark text-white rounded' style={{width:"500px",height:'350px'}}>
                   <br/>
                    <h1 className='text-center text-light mb-4'>Login</h1>
                    <div className='text-center'>
                        <label className='form-label'>Email</label>
                        <input type='email' placeholder='aer@gmail.com' className='form-control mb-3 text-center container-fluid' style={{width:"360px"}}></input>
                    </div>
                    <div className='text-center'>
                        <label className='form-label'>Contraseña</label>
                        <input type='password'className='form-control mb-3 container-fluid' style={{width:"360px"}}></input>
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-outline-success btn-lg w-75'>Enviar</button>
                    </div>
                </div>



            </form>
        </div>
    )


}
export default Login